# Guía Básica HTML

## Unidades de medida

### Longitudes relativas
| Valor | Descripción |
|-------|-------------|
|px     | Píxeles (relativo al dispositivo) |
|em     | Relativo al tamaño de la fuente del elemento ( 2em significa 2 veces el tamaño de la fuente actual) |
|rem    | Relativo al tamaño de la fuente del elemento raíz ( 2rem significa 2 veces el tamaño de la fuente actual de Body) |
|%      | Porcentaje (relativo al elemento padre) |
|vh y vw| Medidas relativas de acuerdo al viewport. 1vh = 1% de la altura del viewport. 100vh = altura del viewport|

### Longitudes absolutas
| Valor | Descripción |
|-------|-------------|
|in     |Pulgadas (1pulgada = 2.54 cm)|
|cm     |Centímetros|
|mm     |Milímetros|
|pt     |Puntos (1pt = 1/72 pulgadas)|
|pc     |Picas (1pica = 12 puntos)|

## Colores básicos
|Color |HEX        |RGB         |
|------|-----------|------------|
|black | #000000 | 0,0,0      |
|white | #ffffff | 255,255,255|
|red   | #ff0000 | 255,0,0    |
|blue  | #0000ff | 0,0,255    |
|yellow| #ffff00 | 255,255,0  |
|gray  | #808080 | 128,128,128|
|green | #008000 | 0,128,0|


### Color y fondo
|Propiedad            |Descripción|Valores|
|---------------------|-----------|-------|
|color                |	Color del texto	| color|
|background-color     | Color de fondo| color |
|background-image     | Imagen de fondo| url |
|background-repeat    | Repetición de la imagen de fondo| repeat, repeat-x, repeat-y, no-repeat|
|background-attachment| Desplazamiento de la imagen de fondo|scroll, fixed|
|background-position  | Posición de la imagen de fondo|percentage, length, left, center, right|
|background-size      | Tamaño de la imagen de fondo| auto, cover, contain, valor|
|Opacity              | Transparencia de un elemento|  0 – 1  (0 → transparente, 1 opaco)|

## Texto
|Propiedad       |Descripción                                            |Valores|
|----------------|-------------------------------------------------------|-------|
|text-indent     | Desplazamiento de la primera línea del texto	longitud | porcentaje |
|text-align	     | Alineamiento del texto                                | left, right, center, justify |
|text-decoration | Efectos de subrayado y tachado                        | none, underline, overline, line-through |
|letter-spacing  | Espacio entre caracteres                              | normal, longitud |
|word-spacing    | Espacio entre palabras                                | normal, longitud |
|text-transform	 | Transformación a mayúsculas / minúsculas              | capitalize, uppercase, lowercase, none|
|line-height     | Tamaño del espacio entre líneas                       | longitud, porcentaje
|vertical-align  | Alineación vertical                                   | top, middle, bottom,baseline, sub, super, valor

## Fuentes
|Propiedad|Descripción|Valores|
|---------|-----------|-------|
|font-family | Familias de fuentes | nombre-familia,nombre-familia-genérica, *|
|font-style | Estilo de la fuente | normal, italic, oblique|
|font-variant | Convierte a mayúsculas manteniendo un tamaño inferior | normal, small-caps|
|font-weight | Anchura de los caracteres. Normal = 400, Negrita = 700 | normal, bold, bolder, lighter, 100, 200, 300, 400, 500, 600, 700, 800, 900|
|font-size | Tamaño de la fuente | xx-small, x-small, small, medium, large, x-large, xx-large, larger, smaller, longitud, porcentaje|

## Listas
|Propiedad|Descripción|Valores|
|---------|-----------|-------|
|list-style-type | Estilo aplicable a los marcadores visuales o viñetas de las listas | disc, circle, square, decimal, decimal-leading-zero, lower-roman, upper-roman, lower-greek, lower-latin, upper-latin, armenian, georgian, lower-alpha, upper-alpha, none|
|list-style-image | Imagen aplicable a las viñetas de las listas | url(«…»), none |
|list-style-position | Posición de las viñetas dentro de la lista | inside, outside |
|list-style | Permite establecer varios estilos de la lista en una sola propiedad | list-style-type, list-style-position, list-style-image|

## Tablas
|Propiedad|Descripción|Valores|
|---------|-----------|-------|
|caption-side | Posición del título respecto la tabla|top, bottom|
|table-layout|Formato de las celdas, filas y columnas|auto, fixed|
|border-collapse|Selección del modelo de los bordes|collapse, separate|
|border-spacing|Espaciado entre los bordes de celdas adyacentes|longitud|
|empty-cells|Visibilidad de los bordes de celdas sin contenido|show, hide|

## Pseudo-clases para selección de hijos o hermanos
|Pseudo-clase|Descripción|
|------------|-----------|
| :first-child | Primer hijo|
| :last-child | Último hijo|
| :first-of-type | Primer hermano de su tipo|
| :last-of-type | Último hermano de su tipo|
| :only-child | Hijos únicos|
| :only-of-type | Únicos hermanos de su tipo|
| :empty | Elementos que no tienen hijos|
| :nth-child(n) | Enésimo elemento hijo|
| :nth-last-child(n) | Enésimo elemento hijo contando desde el último|
| :nth-of-type(n) | Enésimo hermano de su tipo|
| :nth-last-of-type(n) | Enésimo hermano de su tipo comenzando desde el último|

## Pseudo-clases para los estados de un elemento
|Pseudo-clase|Descripción|
|------------|-----------|
| :link | Enlace no visitado por el usuario|
| :visited | Enlace visitado por el usuario|
| :hover | Modifica el estilo cuando un elemento apuntador pasa por encima|
| :active | Se activa cuando el usuario pulsa el elemento|
| :focus | Se activa cuando tiene el foco sobre el elemento|

## Pseudo-elementos
|Pseudo-clase|Descripción|
|------------|-----------|
|::first-line | Primera línea de texto de un elemento|
|::first-letter | Primera letra de la primera línea de texto de un elemento|
|::before | Añade contenido al principio del documento|
|::after | Añade contenido al final del documento|

