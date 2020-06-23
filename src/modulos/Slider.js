
import $ from 'jquery'
import ERR from "./Errores"

(function(){



    var cantidadElementos = $(".slider li").length
    var elementos = new Array(cantidadElementos)
    var selectores = new Array(cantidadElementos)
    var seleccionado = 0
    var config = {}
    var timer = null

    var validarConfig = ( efecto, tiempo ) => {

        const MODULO = "Error BodyStyle dice: M27"

        if(!ERR.efecto.validacion(efecto)){
            console.error(MODULO + ERR.efecto.mensaje)
            return false
        }

        if(!ERR.positivos.validacion(tiempo)){
            console.error(MODULO + ERR.positivos.mensaje)
            return false
        }

        return true
    }


    var Inicializar = ({    
                            efecto = "lateral", 
                            automatico = false, 
                            tiempo = 3000, 
                            select = true 
                        } = {}
    ) => {
        
        if(!validarConfig(efecto, tiempo))
            return

        config.efecto = efecto
        config.automatico = automatico
        config.tiempo = tiempo
        config.select = select
        $("html, body").css("height","100%")


        for(var i = 0; i < cantidadElementos; i ++){
            if(config.select === true){
                selectores[i] = $("<span class='selectores'></span>")
                $(".selectores-contenedor").append(selectores[i])
            }
            elementos[i] = $(".slider li:nth-child(" + (i + 1) + ")")
            $(elementos[i]).hide()
        }
        $($(elementos[0])).show()
        if(config.select === true){
            $(selectores[0]).css("background-color", "orangered")
        }
        if(config.automatico){
            arrancarCronometro()
        }
    } 


    var salida = () => {
        $(window).blur(function(){
            if(config.automatico)
                pararCronometro()
        })

        $(window).focus(function(){
            if(config.automatico)
                arrancarCronometro()
        })
    }

    var siguiente = (seleccionado) => {
        return seleccionado + 1 >= cantidadElementos ? 0: seleccionado + 1;
    }

    var atras = (seleccionado) => {
        return seleccionado - 1 <= -1 ? cantidadElementos- 1 : seleccionado - 1;
    }

    var efectoFade = ( direccion) => {
        if(config.automatico)
            pararCronometro()
        if(direccion === "derecha") {
            $(elementos[seleccionado]).fadeOut(300)
            $(elementos[siguiente(seleccionado)]).fadeIn(300)
            $(selectores[seleccionado]).css("background-color", "grey")
            $(selectores[siguiente(seleccionado)]).css("background-color", "orangered")
            seleccionado = siguiente(seleccionado)
        }else {
            $(elementos[seleccionado]).fadeOut(300)
            $(elementos[atras(seleccionado)]).fadeIn(300)
            $(selectores[seleccionado]).css("background-color", "grey")
            $(selectores[atras(seleccionado)]).css("background-color", "orangered")
            seleccionado = atras(seleccionado)
        }
        if(config.automatico)
            arrancarCronometro()
    }

    var efectoLateral = (sel, direccion) => {
        if(config.automatico)
            pararCronometro()
        if(direccion === "izquierda"){
            $(elementos[sel]).animate({
                left: "-100%"
            }, 500, function() {
                $(elementos[sel]).hide()
                $(elementos[sel]).css("left", 0)
                $(elementos[siguiente(sel)]).fadeIn()
                $(selectores[sel]).css("background-color", "grey")
                $(selectores[siguiente(sel)]).css("background-color", "orangered")
                seleccionado = siguiente(sel)
            })

        }else {
            $(elementos[sel]).animate({
                left: "100%"
            }, 500, function() {
                $(elementos[sel]).hide()
                $(elementos[sel]).css("left", 0)
                $(elementos[atras(sel)]).fadeIn()
                $(selectores[sel]).css("background-color", "grey")
                $(selectores[atras(sel)]).css("background-color", "orangered")
                seleccionado = atras(sel)

            })
        }
        if(config.automatico)
            arrancarCronometro()
    }

    var pararCronometro = () => {
        clearInterval(timer)
        timer = null
    } 

    var arrancarCronometro = () => {
        if(!timer)
            timer = setInterval(efectoCronometro, config.tiempo)
    }

    var efectoCronometro = () => {
        $(elementos[seleccionado]).fadeOut(500)
        $(elementos[siguiente(seleccionado)]).fadeIn(500)
        $(selectores[seleccionado]).css("background-color", "grey")
        $(selectores[siguiente(seleccionado)]).css("background-color", "orangered")
        seleccionado = siguiente(seleccionado)
    }

    var selectores = () => {
        $(".selectores").click(function(){
            if(config.automatico)
                pararCronometro()
            var ind = $(this).index()
            $(elementos[seleccionado]).fadeOut(300)
            $(elementos[ind]).fadeIn(300)
            $(selectores[seleccionado]).css("background-color", "grey")
            $(selectores[ind]).css("background-color", "orangered")
            seleccionado = ind
            if(config.automatico)
                arrancarCronometro()
        })
    }


    var botones = () => {

        if(config.efecto === "lateral"){
            $(".botones span:first-child").click(function(){
                efectoLateral(seleccionado,"izquierda")
            })
    
            $(".botones span:last-child").click(function(){
                efectoLateral(seleccionado,"derecha")
                
            })
        }else {
            $(".botones span:first-child").click(function(){
                efectoFade("izquierda")
            })
    
            $(".botones span:last-child").click(function(){
                efectoFade("derecha")
            })
        }
    }

    var Slider = {
        iniciar: (config)=> {
            Inicializar(config)
            botones()
            selectores()
            salida()
        }
    }

    window.Slider = Slider
})()

export default Slider