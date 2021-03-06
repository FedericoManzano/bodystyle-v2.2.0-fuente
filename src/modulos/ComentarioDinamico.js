import $ from "jquery" 

(function(){


    const posInicial = (origen, comentario) => {
        let x = $(origen).offset().left
        let y = $(origen).offset().top
        $(comentario).css("left", x)
        $(comentario).css("top", y)
    } 

    const dameXInicial = (origen) => {
        return $(origen).offset().left
    }

    const dameYInicial = (origen) => {
        return $(origen).offset().top 
    }

    const puedeDerecha = (origen, comentario) => {
        let anchoComentario = $(comentario).width()
        let desplazamientoX = $(origen).offset().left
        let anchoOrigen = $(origen).width() 
        return $(window).width()  - desplazamientoX - anchoOrigen > anchoComentario
    }

    const puedeIzquierda = (origen, comentario) => {
        let anchoComentario = $(comentario).outerWidth()
        let desplazamientoX = $(origen).offset().left 
        return anchoComentario - desplazamientoX < 0
    }

    const puedeArriba = (origen, comentario) => {
        let alturaComentario = $(comentario).outerHeight()
        let espacioDisponible = $(origen).offset().top - $(window).scrollTop()
        return espacioDisponible  > alturaComentario + 10
    }

    const puedeAbajo = (origen, comentario) => {
        let alturaComentario = $(comentario).outerHeight()
        let espacioDisponible = $(window).outerHeight() + $(origen).offset().top - $(origen).outerHeight()
        return espacioDisponible  > alturaComentario + 10
    }
    const ubicarAbajo = (origen, comentario) => {
        $(comentario).css("top", dameYInicial(origen) + $(origen).outerHeight() + 10)
    }


    const ubicarArriba = (origen, comentario) => {
        $(comentario).css("top", dameYInicial(origen) - $(comentario).outerHeight() - 10)
    }

    const ubicarIzquierda = (origen, comentario) => {
        $(comentario).css("left", dameXInicial(origen) - $(comentario).width() - 100)
    }


    const ubicarDerecha = (origen, comentario) => {
        $(comentario).css("left", dameXInicial(origen) + $(origen).outerWidth() + 12)
    }

    const centrarEjeX = (origen, comentario) => {
        let ejeOrigen = ($(origen).offset().top)  + $(origen).outerHeight() / 2
        let ejeComentario = ($(comentario).offset().top) + $(comentario).outerHeight() / 2
        let espacioDisponible = $(origen).offset().top - $(window).scrollTop()
        let aSubir =  Math.abs( ejeOrigen - ejeComentario )


        if(aSubir > espacioDisponible) {
            let dy = aSubir - espacioDisponible
            $(comentario).css("top",   dameYInicial(origen) - aSubir +  dy + 10)
        }else {
            $(comentario).css("top",  dameYInicial(origen) - aSubir)
        }
    }

    const inicializar = () => {
        $(".com-trigger").hover((e)=> {
            let origen = $(e.target)
            let comentario = $("<div class='com-dinamico'></div>")
            let info = $(origen).data("info")
            
            $(comentario).append(info)
            $("body").append(comentario)
            posInicial(origen, comentario)
            $(comentario).show()

            let puedeMostrar = false
            if(puedeDerecha(origen, comentario)){
                ubicarDerecha(origen, comentario)
                centrarEjeX(origen, comentario)
                puedeMostrar = true
            } else if(puedeIzquierda(origen, comentario)) {
                ubicarIzquierda(origen, comentario)
                centrarEjeX(origen, comentario)
                puedeMostrar = true
            } else if(puedeArriba(origen, comentario)) {
                ubicarArriba(origen, comentario)
                puedeMostrar = true
            }else if(puedeAbajo(origen, comentario)) {
                ubicarAbajo(origen, comentario)
                puedeMostrar = true
            }
            if(!puedeMostrar) {
                $(comentario).hide()
                $(comentario).remove()
            } 
        }, (e) => {
            $(".com-dinamico").hide()
            $(".com-dinamico").remove()
        })
    }

    const ComentarioDinamico = {
        iniciar: () => inicializar()
    }

    window.ComentarioDinamico = ComentarioDinamico
})()

export default ComentarioDinamico