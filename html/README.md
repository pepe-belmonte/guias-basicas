# Guía Básica HTML

## Qué es una etiqueta HTML
Una etiqueta HTML es una instrucción que le dice al navegador cómo debe mostrar un contenido.

## Estructura básica de HTML

*Tip VSCode: !+Enter (escribe estructura básica HTML)*
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    
</body>
</html>
```

## Etiquetas básicas

### Documentar metadatos

| Etiqueta | Descripción |
| -------- | ----------- |
| ``````<head>`````` | Proporciona metadatos sobre el documento, incluido su título, scripts y hojas de estilo.|
| ``````<link>`````` | Especifica un enlace a un recurso externo, típicamente hojas de estilo.|
| ``````<meta>``````| Cualquier información de metadatos que no pueda ser representada por uno de los otros elementos meta-relacionados HTML (base, link,, style o title).| 
| ``````<style>``````| Contiene información de estilo para un documento escrito en CSS. |
| ``````<title>``````| Define el título del documento, que se muestra en la barra de título de un navegador o en la pestaña de la página |

### Selección  de contenido
| Etiqueta | Descripción |
| -------- | ----------- |
| ``````<body>``````| Representa el contenido de un documento. Solo puede haber un elemento **body** en un documento. |
| ``````<footer>``````| Representa un pie de página que generalmente contiene datos de derechos de autor o enlaces a documentos relacionados. |
| ``````<header>``````| Representa un grupo de elementos, como un logotipo, un formulario de búsqueda y una barra de navegación. |
| ``````<h1>…<h6>`````` | Un elemento de encabezado describe brevemente el tema de la sección que presenta. h1 es el más importante y h6 es el menos.|
| ``````<nav>``````|Representa una sección de una página que vincula a otras páginas o partes de la página.|
| ``````<article>``````|Especifica contenido independiente y autónomo.|

### Contenido del texto
| Etiqueta | Descripción |
| -------- | ----------- |
|```<div>``` | Un contenedor genérico para contenido de flujo. Se puede usar para agrupar elementos con fines de estilo (utilizando los atributos de clase o id).|
|```<hr>``` | Representa una ruptura temática entre párrafos, definida en términos semánticos en lugar de términos de presentación.|
|```<li>``` | Representa un elemento en una lista y debe estar contenido en un elemento principal: una lista ordenada (```<ol>```), una lista desordenada (```<ul>```) o un menú (```<menú>```).|
|```<ol>``` | Representa una lista ordenada de elementos, generalmente mostrada con una numeración secuencial.|
|```<p>``` | Representa un párrafo de texto.|
|```<pre>``` | Representa texto preformateado (es decir, texto que se muestra sin formato de texto).|
|```<ul>``` | Representa una lista desordenada de elementos, generalmente se muestra con una viñeta.|
|```<address>``` | Define la información de contacto para el autor / propietario de un documento o artículo.|

### Formularios
| Etiqueta | Descripción |
| -------- | ----------- |
|```<button>``` | Representa un botón en el que se puede hacer clic.|
|```<datalist>``` | Contiene un conjunto de elementos ```<option>``` que representan los valores disponibles para otros controles.|
|```<fieldset>``` | Se usa para agrupar varios controles y etiquetas (```<etiqueta>```) dentro de un formulario web.|
|```<form>``` | Representa el elemento principal de un formulario web en una sección de documento.|
|```<input>``` | Se usa para crear controles interactivos para aceptar datos del usuario.|
|```<label>``` | Representa un título para un elemento en una interfaz de usuario. Se puede colocar un elemento de control dentro de un elemento ```<label>``` o utilizando el atributo for.|
|```<legend>``` | Representa un título para el contenido de su padre ```<fieldset>```.|
|```<optgroup>``` | Crea una agrupación de opciones dentro de un elemento ```<select>```.|
|```<option>``` | Se usa para crear un control que representa un elemento dentro de un elemento ```<select>```, un ```<optgroup>``` o ```<datalist>```.|
|```<output>``` | Representa el resultado de un cálculo o acción del usuario.|
|```<select>``` | Representa un control que presenta un menú de opciones. Las opciones dentro del menú están representadas por elementos ```<option>```, que se pueden agrupar por elementos ```<optgroup>```.|
|```<textarea>``` | Representa un control de edición de texto sin formato de varias líneas.|

### Imágenes y Multimedia

| Etiqueta | Descripción |
| -------- | ----------- |
| ```<area>``` | Define una región de punto caliente en una imagen y, opcionalmente, la asocia con un enlace de hipertexto. Este elemento se usa solo dentro de un elemento ```<map>```. |
| ```<audio>``` | Se usa para incrustar contenido de sonido en documentos. |
| ```<img>``` | El elemento de imagen HTML (```<img>```) representa una imagen del documento. |
| ```<map>``` | Se usa con elementos ```<area>``` para definir un mapa de imagen (un área de enlace seleccionable). |
| ```<track>``` | Se usa como elemento secundario de los elementos ```<audio>``` y ```<video>```. Te permite especificar pistas de texto cronometradas, como los subtítulos. |
| ```<video>``` | El elemento HTML ```<video>``` se usa para incrustar contenido de vídeo. |

### Semántica de texto en línea

| Etiqueta | Descripción |
| -------- | ----------- |
| ```<a>``` | Define un hipervínculo a una ubicación en la misma página o cualquier otra página en la Web.|
| ```<b>``` | Representa un lapso de texto cuya presentación típica estaría en negrita.|
| ```<br>``` | Produce un salto de línea en el texto.|
| ```<code>``` | Representa un fragmento de código de computadora y se muestra en la fuente de monoespacio predeterminada del navegador.|
| ```<em>``` | Marca el texto que tiene énfasis. El elemento ```<em>``` se puede anidar, con cada nivel de anidación indicando un mayor grado de énfasis.|
| ```<i>``` | Representa un rango de texto que generalmente se muestra en cursiva.|
| ```<s>``` | Renderiza texto con un tachado, o una línea a través de él.|
| ```<span>``` | Un contenedor en línea genérico para contenido de frase. Puede usarse para agrupar elementos con fines de estilo (usando los atributos de clase o id).|
| ```<strong>``` | Le da mucha importancia al texto y, por lo general, se muestra en negrita.|
| ```<u>``` | Renderiza el texto con un subrayado, una línea debajo de la línea de base de su contenido.|

### Contenido incrustado

| Etiqueta | Descripción |
| -------- | ----------- |
| ```<embed>``` | Representa un punto de integración para una aplicación externa o contenido interactivo.|
| ```<iframe>``` | Representa un contexto de exploración anidado, integrando de manera efectiva otra página HTML en la página actual.|
| ```<object>``` | Representa un recurso externo, que se puede tratar como una imagen, un contexto de exploración anidado o un recurso que se manejará con un complemento.|
| ```<param>``` | Define parámetros para ```<objeto>```.|
| ```<source>``` | Un elemento vacío utilizado para especificar múltiples recursos de medios para los elementos ```<picture>```, ```<audio>``` y ```<video>```.|
### Contenido de la tabla

| Etiqueta | Descripción |
| -------- | ----------- |
| ```<table>``` | Representa datos tabulares. |
| ```<caption>``` | Representa el título de una tabla. |
| ```<td>``` | Define una celda de una tabla que contiene datos. |
| ```<th>``` | Define una celda que es un encabezado para un grupo de celdas de una tabla. |
| ```<tr>``` | Define una fila de celdas en una tabla. Pueden ser una mezcla de elementos ```<td>``` y ```<th>```. |

### Lenguaje de escritura

| Etiqueta | Descripción |
| -------- | ----------- |
| ```<canvas>``` | Se utiliza para dibujar gráficos, composiciones fotográficas o animaciones a través de secuencias de comandos, normalmente escrito en JavaScript. |
| ```<noscript>``` | Define una sección de HTML para insertar si un tipo de script en la página no es compatible o si el scripting está actualmente desactivado en el navegador. Se utiliza para insertar o hacer referencia a un script ejecutable, normalmente escrito en JavaScript. |

