import $ from 'jquery'
import ERR from './Errores'

(function () {

    var presionado = 0;
    const margin = 10
    const MODULO = "Error BodyStyle dice: M08"


    var configurarDropDown = ({ color = "#fff" } = {}) => {

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


    var posicionInicialX = (origen, dropdown) => {
        var x = $(origen).offset().left
        $(dropdown).css("left", x)
        return x;
    }

    var posicionInicialY = (origen, dropdown) => {
        var y = $(origen).offset().top
        $(dropdown).css("top", y + $(origen).outerHeight() + 5)
        return y;
    }

    var disabled = () => {
        $(".dropdown ul li .disabled").removeAttr("href")
    }

    var effsetIzquierda = (dropdown) => {
        var offSet = $(dropdown).offset().left;
        return offSet <= 0 ? Math.round(offSet * -1 + margin) : 0
    }

    var offsetDerecha = (dropdown) => {
        var offSet = $(window).width() - $(dropdown).offset().left - $(dropdown).outerWidth();
        return offSet <= 0 ? Math.round(offSet - margin) : 0
    }

    var posicionamientoDropDown = (origen, dropdown) => {
        var oi = effsetIzquierda(dropdown)
        var od = offsetDerecha(dropdown)
        if (oi !== 0)
            $(dropdown).css("left", posicionInicialX(origen, dropdown) + oi);
        if (od !== 0)
            $(dropdown).css("left", posicionInicialX(origen, dropdown) + od);
    }

    var reiniciarPosicion = (dropdown, origen) => {
        posicionInicialX(origen, dropdown)
        posicionInicialY(origen, dropdown)
    }


    var eventoDrop = (e) => {
        var boton = $(e.target);
        var dropdown = $($(e.target).data("target"))
        reiniciarPosicion(dropdown, e.target)
        if (presionado === 0 || presionado === undefined) {
            dropdown.fadeIn(300)
            posicionamientoDropDown(this, dropdown)
            boton.children(".f-derecha").hide()
            boton.children(".f-abajo").show()
            $(".drop").show()
            presionado = 1
        } else {
            dropdown.hide()
            reiniciarPosicion(dropdown, e.target)
            boton.children(".f-derecha").show()
            boton.children(".f-abajo").hide()
            $(".drop").hide()
            presionado = 0
        }

        $(".drop").click(function () {
            dropdown.hide()
            reiniciarPosicion(dropdown, e.target)
            boton.children(".f-derecha").show()
            boton.children(".f-abajo").hide()
            $(".drop").hide()
            presionado = 0
        })

        $(dropdown).click(function () {
            if (presionado === 1) {
                dropdown.hide()
                reiniciarPosicion(dropdown, e.target)
                boton.children(".f-derecha").show()
                boton.children(".f-abajo").hide()
                $(".drop").hide()
                presionado = 0
            }
        })
    }

    var dropDown = () => {
        $(".dropdown-toggle").click(eventoDrop)
    }

    const destroy = (target) => {

        if(target === undefined || target === "") {
            $(".dropdown-toggle").off()
        }else {
            $(".dropdown-toggle").each( (index,e) => {
                if(target === $(e).data("target")) {
                    $(e).off()
                }
            })
        }
    }

    var DropDown = {
        iniciar: function (config) {
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