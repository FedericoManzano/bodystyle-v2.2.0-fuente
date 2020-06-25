import $ from 'jquery'
import ERR from './Errores'

(function () {

    var presionado = 0;
    const margin = 10
    const MODULO = "Error BodyStyle dice: M08"


    const configurarDropDown = ({ color = "#fff" } = {}) => {

        if (!(ERR.hexadecimal.validacion.test(color))) {
            console.error(MODULO + ERR.hexadecimal.mensaje)
            return
        }

        $(".dropdown ul li a").addClass("dd-a")
        $(".dropdown-toggle").append("<span class='f-abajo'></span>")
        $(".dropdown-toggle").append("<span class='f-derecha'></span>")


        $(".dropdown-toggle").children(".f-abajo").css({
            borderTop: "solid 5px " + color,
            borderRight: "solid 5px transparent",
            borderLeft: "solid 5px transparent"
        })
        $(".dropdown-toggle").children(".f-derecha").css({
            borderTop: "solid 5px transparent",
            borderBotton: "solid 5px transparent",
            borderLeft: "solid 5px " + color
        })


        $(".dropdown-toggle .f-abajo").hide()

        $("body").append("<div class='drop'></div>");
        $(".drop").hide()
    }


    const posicionInicialX = (origen, dropdown) => {
        let x = $(origen).offset().left
        $(dropdown).css("left", x)
        return x;
    }

    const posicionInicialY = (origen, dropdown) => {
        let y = $(origen).offset().top
        $(dropdown).css("top", y + $(origen).outerHeight() + 5)
        return y;
    }

    const disabled = () => {
        $(".dropdown ul li .disabled").removeAttr("href")
    }

    const effsetIzquierda = (dropdown) => {
        let offSet = $(dropdown).offset().left;
        return offSet <= 0 ? Math.round(offSet * -1 + margin) : 0
    }

    const offsetDerecha = (dropdown) => {
        let offSet = $(window).width() - $(dropdown).offset().left - $(dropdown).outerWidth();
        return offSet <= 0 ? Math.round(offSet - margin) : 0
    }

    const posicionamientoDropDown = (origen, dropdown) => {
        let oi = effsetIzquierda(dropdown)
        let od = offsetDerecha(dropdown)
        if (oi !== 0)
            $( dropdown ).css("left", posicionInicialX(origen, dropdown) + oi);
        if (od !== 0)
            $( dropdown ).css("left", posicionInicialX(origen, dropdown) + od);
    }

    const reiniciarPosicion = (dropdown, origen) => {
        posicionInicialX(origen, dropdown)
        posicionInicialY(origen, dropdown)
    }


    const aparecerDrop = (origen, dropdown) => {
        $( dropdown ).fadeIn(300)
        posicionamientoDropDown(origen, dropdown)
        $( origen ).children(".f-derecha").hide()
        $( origen ).children(".f-abajo").show()
        $(".drop").show()
        presionado = 1
    }

    const desaparecerDrop = (origen, dropdown) => {
        $( dropdown ).hide()
        reiniciarPosicion(dropdown, origen)
        $( origen ).children(".f-derecha").show()
        $( origen ).children(".f-abajo").hide()
        $(".drop").hide()
        presionado = 0
    }


    const eventoDrop = (e) => {
        let boton = e.target
        let dropdown = $($(e.target).data("target"))
        reiniciarPosicion(dropdown, boton)
     
        if (presionado === 0 || presionado === undefined) 
            aparecerDrop(boton, dropdown)
         else 
            desaparecerDrop(boton, dropdown)
        

        $(".drop").click( () => {
            desaparecerDrop(boton, dropdown)
        })

        $(dropdown).click( () => {
            if (presionado === 1) 
                desaparecerDrop(boton, dropdown)
        })
    }

    const dropDown = () => {
        $(".dropdown-toggle").click(eventoDrop)
    }

    const destroy = (target) => {

        if(target === undefined || target === "") {
            $(".dropdown-toggle").off()
        }else {
            $(".dropdown-toggle").each( (index,e) => {
                if(target === $(e).data("target")) 
                    $(e).off()
            })
        }
    }

    const DropDown = {
        iniciar: (config) => {
            configurarDropDown(config)
            dropDown()
            disabled()
        },
        destroy: (elemento = "") => {
            destroy(elemento)
        }
    }

    window.DropDown = DropDown
})()

export default DropDown