import $ from "jquery"

(function(){

    let colapso = false
    let colapsoDesplegable = true

    const destroy = () => {
        $( ".nav-sidebar-desplegable .titulo" ).off()
        $( ".boton-desplegable" ).off()
        $( ".boton-nav" ).off()
        $( window ).off( "resize", ajustarContenido )
    }


    const ajustarContenido = () => {
        if( $( window ).width() < 1024) {
            $( ".nav-contenido" ).css("width", "100%")
            $( ".nav-contenido" ).css("margin-left", 0)
            colapsoDesplegable = false
            $(".nav-sidebar-desplegable").css("left", -240)
            $(".nav-complemento").hide()
        }else {
            if(!colapsoDesplegable) {
                $( ".nav-contenido" ).css("width", "100%")
                $( ".nav-contenido" ).css("margin-left", 0)
            }else {
                $(".nav-contenido").css("width", "calc(100% - 240px)")
                $(".nav-contenido").css("margin-left", "240px")
                $(".nav-sidebar-desplegable").css("left", 0)
            }
        }
    }

    const resize = () => {
        $(window).resize( ajustarContenido )
    }


    const inicializarDesplegable = () => {
        $(".nav-sidebar-desplegable .titulo").append("<span class='f-derecha'></span>")
        $(".nav-sidebar-desplegable ul").hide()
        if($(".nav-body .boton-desplegable").length > 0) {
            if(!$(".nav-body").hasClass("nav-fixed")){
                $(".nav-body").addClass("nav-fixed")
            }
        }
        $(".nav-sidebar-desplegable .titulo").click( (e) => {
            let idLista = $(e.target).data("target")
            
            if($(idLista).hasClass("ab")) {
                $(idLista).slideUp(200)
                $(e.target).children(".f-abajo").remove()
                $(e.target).append("<span class='f-derecha'></span>")
                $(idLista).removeClass("ab") 
            }else {
                $(idLista).slideDown(200)
                $(e.target).children(".f-derecha").remove()
                $(e.target).append("<span class='f-abajo'></span>")
                $(idLista).addClass("ab") 
            }
        })

        $(".boton-desplegable").click( function (e) {
            let idColapso = $(e.target).data("trigger")
            if(idColapso === undefined) 
                idColapso = $(e.target).parent().data("trigger")
            if(colapsoDesplegable === false || colapsoDesplegable === undefined) {
                $(idColapso).css("left", 0)
                colapsoDesplegable = true
                if($(window).width() > 1024) {
                    $(".nav-contenido").css("width", "calc(100% - 240px)")
                    $(".nav-contenido").css("margin-left", "240px")
                }else 
                    $(".nav-complemento").show()
            }else {
                $(idColapso).css("left", -240)
                colapsoDesplegable = false
                if($(window).width() > 1024) {
                    $(".nav-contenido").css("width", "100%")
                    $(".nav-contenido").css("margin-left", 0)
                }else 
                    $(".nav-complemento").hide()
            }
        })
    }


    const desplegar = (e) => {
        let idColapso = $(e.target).data("trigger")
        if(idColapso === undefined) 
            idColapso = $(e.target).parent().data("trigger")

        if($(idColapso).hasClass("nav-sidebar")) {
            if(colapso === false || colapso === undefined) {
                $(idColapso).css("left", 0)
                $(".nav-complemento").show()
                colapso = true
            }else {
                $(idColapso).css("left", -240)
                $(".nav-complemento").hide()
                colapso = false
            } 
        }else {
            if(!$(".nav-body").hasClass("nav-fixed"))
                $(idColapso).css("top", $(".nav-body").offset().top +  $(".nav-body").outerHeight())
            else {
                $(idColapso).css("top", $(".nav-body").outerHeight())
            }
            if(colapso === false || colapso === undefined) {
                $(idColapso).slideDown(200)
                colapso = true
            }else {
                $(idColapso).slideUp(200)
                colapso = false
            }
        }
    }
    const inicializar = () => {
        $(".nav-colapso").css("opacity", 1)
        $(".nav-sidebar").css("top", $(".nav-body").height())
        inicializarDesplegable()
        if($(".nav-body").hasClass("nav-fixed")) {
            $(".nav-sidebar").css("top", $(".nav-body").height()) 
            $(".nav-sidebar-desplegable").css("top",$(".nav-body").height() )
        }else {
            $(".nav-sidebar").css("top", 0) 
            $(".nav-sidebar-desplegable").css("top",0 )
        }
        
        ajustarContenido()
        
        $(".nav-colapso").hide()
        $(".boton-nav").append("<span></span><span></span><span></span>")
        $(".boton-desplegable").append("<span></span><span></span><span></span>")

        $("body").append("<div class='nav-complemento'></div>")
        
        $(".boton-nav").click((e) => desplegar(e))
        $(window).scroll( () => {
            $(".nav-colapso").css("top", $(".nav-body").height())
        })

        $(window).resize(() => {
            if($(window).width() > 1030) {
                $(".nav-colapso").hide()
                $(".nav-sidebar").css("left", -240)
                $(".nav-complemento").hide()
                colapso = false
            }
        })

        $(".nav-complemento").click( () => {
            $(".nav-sidebar").css("left", -240)
            $(".nav-sidebar-desplegable").css("left", -240)
            $(".nav-complemento").hide()
            colapso = false
            colapsoDesplegable = false
        })
        
        $(".nav-complemento").hide()
    }


    const Nav = {
        iniciar: () => {
            inicializar()
            resize()
        },
        destroy: () => destroy()
    }
    window.Nav = Nav
})()

export default Nav