import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export enum DocTypesEnum {
  NIF = 'N',
  CIF = 'C',
  NIE = 'E',
  PASSPORT = 'P',
  OTHERS = 'X',
}

export function phoneValidator(control: AbstractControl) {
  const regexPhone = /(\+34|0034|34)?[ -]*(0|1|2|3|4|5|6|7|8|9)[ -]*([0-9][ -]*){8,19}$/;

  if (!control.value) {
    return null; // No hay error si el campo está vacío
  }

  const ret = regexPhone.test(control.value);
  return ret ? null : { phone: true };
}

export function phoneSpainValidator(control: AbstractControl) {
  const regexPhone = /^[67][0-9]{8}$/;
  const ret = regexPhone.test(control.value);
  return ret ? null : { phone: true };
}

export function emailValidator(control: AbstractControl) {
  const strEmail = '^[a-zA-Z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$';
  const regexEmail = new RegExp(strEmail);
  const ret = regexEmail.test(control.value);
  if (!control.value) {
    return null; // No hay error si el campo está vacío
  }
  return ret ? null : { email: true };
}

export function stringOnlyValidator(control: AbstractControl) {
  const regexStringOnly = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

  if (!control.value) {
    return null; // No hay error si el campo está vacío
  }

  const ret = regexStringOnly.test(control.value);
  return ret ? null : { stringOnly: true };
}


export function docNumberValidator(formGroup: AbstractControl, docTypeField: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const docType = formGroup.get(docTypeField)?.value;
    const docNumber = control.value;

    const NIF_REGEX = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
    const CIF_REGEX = /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/;
    const NIE_REGEX = /^[XYZ]\d{7,8}[A-Z]$/;
    const PASSPORT_REGEX = /^([0-9a-zA-Z]{0,16})$/;
    const OTHERS_REGEX = /^[^\s]{0,17}$/;

    let docNumberFormatError = null;
    if (docType) {
      switch (docType) {
        case DocTypesEnum.NIF:
          if (docNumber) { docNumberFormatError = NIF_REGEX.test(docNumber) }
          break;
        case DocTypesEnum.NIE:
          if (docNumber) { docNumberFormatError = NIE_REGEX.test(docNumber) }
          break;
        case DocTypesEnum.CIF:
          if (docNumber) { docNumberFormatError = CIF_REGEX.test(docNumber) }
          break;
        case DocTypesEnum.PASSPORT:
          if (docNumber) { docNumberFormatError = PASSPORT_REGEX.test(docNumber) }
          break;
        case DocTypesEnum.OTHERS:
          if (docNumber) { docNumberFormatError = OTHERS_REGEX.test(docNumber) }
          break;
        default:
          return { docType: true };
      }

      return docNumberFormatError ? null : { docNumber: true };
    }

    return null;

  };
}

// Validador personalizado para evitar etiquetas <script> y atributos peligrosos
export function xssValidator(control: AbstractControl) {
  const value = control.value || '';
  const pattern = /<script|onerror|onload|javascript:/i;
  return pattern.test(value) ? { xssDetected: true } : null;
}

// Validador para bloquear cualquier etiqueta HTML
export function noHtmlTagsValidator(control: AbstractControl) {
  const value = control.value || '';
  const htmlTagPattern = /<[^>]*>/g; // Detecta cualquier cosa entre < >
  return htmlTagPattern.test(value) ? { htmlTagsDetected: true } : null;
}

export function addXssValidatorToAllControls(form: FormGroup | FormArray): void {
  Object.keys(form.controls).forEach(controlName => {
    const control = form.get(controlName);

    if (control instanceof FormControl) {
      control.addValidators([xssValidator, noHtmlTagsValidator]);
      control.updateValueAndValidity();
    } else if (control instanceof FormGroup || control instanceof FormArray) {
      // Llamada recursiva para grupos o arrays
      addXssValidatorToAllControls(control);
    }
  });
}
