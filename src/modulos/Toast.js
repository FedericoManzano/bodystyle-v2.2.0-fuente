import $ from 'jquery'
import ERR from "./GestionErrores"


(function(){

    var toast = (html = "Hola soy un toast !", clases = {
        color:"fd-gris-az-c",
        radio: "bor-rad-3",
        colorTexto: "c-blanco"
        }, tiempo = 3000)=> {

        if(!ERR.fondo.val(clases.color)) {
            console.error("(TOAST)" + ERR.fondo.mje)
            return
        }

        if(!ERR.texto.val(clases.colorTexto)) {
            console.error("(TOAST)" + ERR.texto.mje)
            return
        }


        if(!ERR.borde.val(clases.radio)) {
            console.error("(TOAST)" + ERR.borde.mje)
            return
        }

        $(".toast").remove();
        $("body").append("<div class='toast'></div>");
        var t = $("body .toast:last-child")
        t.html(html)
        t.addClass(clases.color)
        t.addClass(clases.radio)
        t.addClass(clases.colorTexto)
        setInterval(function() {
            t.remove()
        }, tiempo);
    }

    var Toast = {
        ejecutar: (html, clases, tiempo)=> toast(html, clases, tiempo)
    }

    window.Toast = Toast;
})()

export default Toast;