## Prueba técnica para el proceso de selección: Desarrolladora fullstack junior Card-Dynamics

**Propósito**

Realizar un pequeño buscador de recetas usando el API Punk:
https://punkapi.com/documentation/v2

**Requerimientos**

La usuaria debe ser capaz de insertar un nombre de comida (*parameter ‘food’*) en un buscador y obtener el resultado de la búsqueda en una lista.
Cada vez que la usuaria introduzca o borre un carácter de la búsqueda, la lista debe ser actualizada.
El ejercicio se debe de ver bien tanto en pantallas móviles como en pantallas de
ordenador. 

**Criterios de revisión**

Calidad de código.
Simplicidad y escalabilidad de la solución.
Diseño responsive.

**Otros**

Te recomendamos que reserves dos horas para realizar la prueba.
Nos gustaría que la prueba la realizaras en Angular pero puedes usar librerías, patrones de diseño o cualquier cosa que decidas. Siéntete cómoda usando las herramientas con las que estás acostumbrada a trabajar.
Envíanos el resultado de la prueba a través de tu repositorio personal (*Github, Gitlab, Bitbucket...*).

**Notas de la autora**

Hacer esta prueba técnica me ha servido para practicar mis habilidades en React y HTML/CSS; aunque era una prueba asequible y fácil de entender, me retó a enfrentarme a ese folio en blanco tan temido al principio.

Por otro lado, mi gran reto fue el *Rate Limits* de la API,  ya que estaba configurado para hacer un máximo de 3600 peticiones por hora, es por ello que tuve que utilizar una función *Throttle* para no enviar una petición a la API cada vez que se escribiera un carácter en el buscador sino que se enviara cada segundo, tal y como lo he configurado.

Aproximadamente la prueba me llevó unas 4 horas para terminarla.


#### Guía para arrancar el proyecto

> **NOTA:** Necesitas tener instalado [Node JS](https://nodejs.org/) para trabajar con este Starter Kit.

**Pasos a seguir:**

1. _Clonar o descargar este repositorio_
2. _Abrir una terminal en la carpeta raíz del repositorio_
3. _Instalar las dependencias locales ejecutando en la terminal el comando:_

```bash
npm install
```

**Arrancar el proyecto con el comando**

```bash
npm start
```

---
