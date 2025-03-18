# Amigo Secreto
# Descripción del proyecto
Este proyecto es una aplicación web sencilla diseñada para organizar un "Amigo Secreto" de manera interactiva. Los usuarios tienen la posibilidad de:

1. Añadir nombres de amigos a una lista.
2. Visualizar los nombres ingresados en una lista dinámica.
3. Realizar un sorteo aleatorio de los nombres en la lista y mostrar el resultado en pantalla.

## Características de la aplicación y demostración
### 1. Agregar nombres
Los usuarios pueden ingresar el nombre de un amigo en un campo de texto y añadirlo a la lista con un clic en el botón "Adicionar".
Si el campo está vacío, se muestra un mensaje de advertencia solicitando un nombre válido.
### 2. Mostrar la lista
Los nombres agregados aparecen en una lista dinámica ubicada debajo del campo de entrada.
### 3. Sortear un amigo
Al presionar el botón "Sortear Amigo", se selecciona aleatoriamente un nombre de la lista y se muestra en pantalla.
Si no hay nombres en la lista, se muestra un mensaje de alerta indicando que no hay datos para realizar el sorteo.

## Acceso al proyecto

## Tecnologías utilizadas
**HTML5**: Estructura básica de la aplicación.
**CSS3**: Diseño responsivo y estilos.
**JavaScript**: Implementación de la lógica, manipulación del DOM, validaciones y sorteo.

## Personas Contribuyentes
Manuel Cerón

## Estructura del proyecto

```
📂 challange_amigo_secreto
├── index.html       # Archivo principal de la aplicación
├── styles.css       # Archivo de estilos
├── script.js        # Archivo JavaScript con la lógica del proyecto
└── README.md        # Documentación del proyecto
```

## Instalación

1. Clona este repositorio en tu máquina local ejecutando:
   ```bash
   git@github.com:sknetboy/desafio-amigo-secreto.git
   ```

2. Abre el archivo index.html en tu navegador web.

## Cómo usar la aplicación

1. Ingresa un nombre en el campo de texto y haz clic en **"Adicionar"**.
2. Repite el proceso para agregar todos los nombres deseados.
3. Presiona el botón **"Sortear Amigo"** para seleccionar un nombre al azar.

## Ejemplo de interfaz


https://manuelceron.github.io/challange_amigo_secreto/

## Contribuir al proyecto

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Realiza un fork del repositorio.
2. Crea una nueva rama para tu mejora o corrección:
   ```bash
   git checkout -b mi-nueva-funcionalidad
   ```
3. Haz los cambios necesarios y realiza un commit:
   ```bash
   git commit -m "Añadir nueva funcionalidad"
   ```
4. Sube tus cambios:
   ```bash
   git push origin mi-nueva-funcionalidad
   ```
5. Abre un Pull Request para que tu contribución sea revisada.

## Licencia

Este proyecto está bajo la Licencia MIT.

