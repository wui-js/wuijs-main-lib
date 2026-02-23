---
name: code-doc-writer
description: Usa cuando el usuario requiera crear, completar o revisar la documentación técnica de un proyecto de código, con el fin de mantén un formato estándar en la documentación, tanto en el orden de las secciones y en su contenido, como en el uso de estructuras documentales. Siempre debes escribir sobre los archivos README.md y LEEME.md en inglés y español respectivamente, velando que ambos mantengan su coherencia en estructura e información.
---

# Code Doc Writer

## Propósito

Esta habilidad estandariza el flujo de trabajo de la documentación técnica para proyectos de software, garantizando la coherencia estructural, semántica y bilingüe entre:

- `README.md` (inglés)
- `LEEME.md` (español)

## Estándar del Formato de la Documentación

Toda sección de la documentación DEBE seguir estas normas de formato:

### Tablas

Si se utilizan tablas, estas deben cumplir las siguientes normas:

- Todas las celdas de una columna (a excepción de las celdas de la última columna) deben incluir los espacios en blanco suficientes para completar el ancho máximo de cada columna, de tal manera que al ser leída directamente en el archivo Markdown, las celdas puedan ser asociada a una columna de manera visual. Ejemplo:

```
| Col. A   | Col. B | Col. C |
| -------- | ------ | ------ |
| Alpha    | 1      | Uno |
| Beta Dos | 2      | Dos |
| Gamma    | 3      | Tres |
```

- Columnas de cada Tabla
	- Clases, Plugins:
		- Nombre Clase
		- Versión
		- Descripción
	- Mapa de Directorios
		- Ruta
		- Descripción
	- Fuentes:
		- Tipo
		- Archivo
	- Constructor:
		- Tipo
		- Descripción
	- Propiedades, Opciones
		- Propiedad
		- Tipo
		- Valor predeterminado
		- Descripción
	- Métodos, Métodos de la Clase, Métodos del Objeto
		- Método
		- Tipo retorno
		- Descripción
	- Variables, Variables CSS
		- Variable
		- Descripción

- Las valores de celda de las columnas “Versión”, “Tipo”, “Tipo retorno”, “Valor predeterminado” y "Variable" deberán ser escritos es comillas invertidas. Lo anterior no impide que por necesidad otros valores o parte de ellos sean escritos en este formato.

## Estándar de Estructura de la Documentación

Todo archivo de documentación DEBE seguir este orden de secciones:

### 1. Sección de encabezado

- Bloque de advertencia (si corresponde)
- Título del proyecto
- Logotipo centrado (si está disponible)
- Versión del proyecto
- Versión del documento
- Licencia
- Autor

Aclaración de la nota de versión (si se explica el modelo de versiones)

