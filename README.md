# Bodystyle UI 

## Librería de estilos en CSS (v2.2.0)

Librería pensada para la creación y el desarrollo del frontend de sitios o aplicaciones web.

## Documentación

Para conocer todas las funcionalidades de la librería acudir a su documentación en: 

[https://bodystyle.000webhostapp.com](https://bodystyle.000webhostapp.com)

## Comenzar 

La forma más rápida y sencilla de disponer de la librería es a través del CDN que enlaza con el código de los archivos minificados. 
La forma de utilizar estos enlaces es agregandolos dentro de la etiqueta `<head>...</head>` de nuestro documento html.

### CDN

### bodystyle.min.css
[https://ghcdn.rawgit.org/FedericoManzano/bodystyle-v2.2.0-fuente/master/dist/css/bodystyle.min.css](https://ghcdn.rawgit.org/FedericoManzano/bodystyle-v2.2.0-fuente/master/dist/css/bodystyle.min.css)

### bodystyle.min.js
[https://ghcdn.rawgit.org/FedericoManzano/bodystyle-v2.2.0-fuente/master/dist/js/bodystyle.min.js](https://ghcdn.rawgit.org/FedericoManzano/bodystyle-v2.2.0-fuente/master/dist/js/bodystyle.min.js)

#### Cabecera
```html
<!DOCTYPE html>
<head>

    <!-- META obligatorio para poder utilizar la libreria -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Link con el CDN de los estilos css  -->
    <link rel="stylesheet" href="https://ghcdn.rawgit.org/FedericoManzano/bodystyle-v2.2.0-fuente/master/dist/css/bodystyle.min.css">

</head>

<!-- Resto de la página -->
```

#### Pie
```html
<script src="https://ghcdn.rawgit.org/FedericoManzano/bodystyle-v2.2.0-fuente/master/dist/js/bodystyle.min.js"></script>
</body>
```

## Plantilla 

Dejamos una plantilla para copiar y pegar para poder cargar la librería con lo que mencionamos antes.

```html
<!DOCTYPE html>
<html>
    <head>
        <!-- META obligatorio para poder utilizar la libreria -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Link con el CDN de los estilos css  -->
        <link rel="stylesheet" href="https://ghcdn.rawgit.org/FedericoManzano/bodystyle-v2.2.0-fuente/master/dist/css/bodystyle.min.css">
    </head>
    <body>
        <h1>Hola Mundo !!! <span class="badge badge-rojo">New</h1>
        <script src="https://ghcdn.rawgit.org/FedericoManzano/bodystyle-v2.2.0-fuente/master/dist/js/bodystyle.min.js"></script>
    </body>
</html>
```


## Descarga 

Podemos disponer de la librería a través de su código fuente, el archivo pre-compilado o instalarla como una dependencia de nuestro proyecto con los gestores de paquetes 
de Node.

### Archivo Precompilado

[bodystyle-v2.2.0-precompilado-master.zip](https://github.com/FedericoManzano/bodystyle-v2.1.1-precompilado/archive/master.zip)


### Archivo Fuente

[bodystyle-v2.2.0-fuente-master.zip](https://github.com/FedericoManzano/bodystyle-v2.2.0-fuente/archive/master.zip)

### Node package
Ingresar por el terminal los siguientes comandos para instalar la dependencia de la librería.

#### NPM 
```
npm i body-ui
```

#### Yarn 
```
yarn add body-ui
```

## Dependencias

### Producción 
- [jquery](https://jquery.com/)

### Desarrollo 
- [babeljs](https://babeljs.io/)
- [webpack](https://webpack.js.org/) v4.43.0

## Cambios desde la versión 2.1.1

- Capacidad deresaltar el código fuente de `html`, `js`, `css`.
- Objetos dinámicos con una descripción personalida.
- Mejoramiento de las barras de navegación.
- Dropdown refactorizado y depurado respecto versiones anteriores.

## Licencia

MIT 

bodystyle (c) 2020




