# Invernadero
Proyecto final de la materia electronica digital con el docente Leonardo Tafur Correales el cual consiste de un arduino al cual se le conecta una cantidad de sensores y demas modulos de hardware que especificamos en nuestra documentacion de hardware en: https://github.com/juan-suarez/proyecto-invernadero/blob/main/AUTOMATIZACI%C3%93N%20DE%20UN%20INVERNADERO.pdf. este proyecto tiene la capacidad de monitorear y controlar nuestro invernadero de manera automatica, puesto que este se encarga de mantener tanto temperatura como humedad ideal para el tipo de planta que se maneja.

Aparte de esto es posible visualizar la informacion que nuestro hardware captura mediante una interfaz grafica web que nos muestra los datos en tiempo real, mediante graficas y numeros, con los cuales podemos llevar el hsitorial de estados de nuestro invernadero. tambien llevamos un historial de acciones que toma nuestro hardware con informacion relevate para una correcta valoración.

## Frontend

Ahora hablando de la parte tecnica nos encontramos que nuestra interfaz o parte visual (Front-end) fue diseñada meramente con HTML5,CSS3 y Boostrap.

## Backend

Para el comportamiento de nuestro hardware usamos la herramienta de programacion para arduino "arduino" que es basada en C/C++, para el posterior procesamiento de los datos que nuestro hardware proporciona usamos python, el cual usamos para recibir la informacion y llevarlo a una base de datos en MYSQL.

Para nuestro back-end usamos NodeJs ideal para levantar nuestro servidor y consuktar sobre nuestra base de datos todo esto con JavaScript.

## requisitos

Nuestra base de datos es MYSQL la cual podemos instalar por medio de consola o descargando algun entorno con interfaz que nos facilite el uso:
* Workbench : https://www.mysql.com/products/workbench/ 
* Mediante consola : 
```bash 
sudo apt install mysql-server
```
Esta base de datos debe estar en local y corriendo en el puerto 3306 para poder llevar conexion sin problemas de esta misma.

Ahora bien tambien necesitamos nuestro entorno de trabajo para esto usamos NodeJs, para instalarlo podemos consultar la documentacion en:
* NodeJs : https://nodejs.org/es/

## Preview

Ahora para levantar nuestro servidor y poner en  marcha el entorno debemos usar la siguiente sentencia de node en el bash:

```bash
npm run dev
```
Ahora nuestra aplicacion web ya deberá estar corriendo sin problemas en nuestro localhost:4000 al cual podemos acceder en nuestro navegador. 
