

import $ from 'jquery'


(function(){
    const efecto = () => {
        $(".waves").click(function(e){
            var color = $($(this)).data("color")
            var boton = $(this)
            var elemento = null
            elemento = $("<span class='efecto-waves'></span>")
            if(color !== undefined && color !== "")
                $(elemento).addClass(color)
            
        
            elemento.css({
                width: 10,
                height: 10,
                left: e.offsetX,
                top: e.offsetY
            }).appendTo(boton).animate({
                width: 200,
                height: 200,
                opacity: 0
            }, 500, function(){
                $(this).remove()
            })
        })
    }

    var Waves = {
        iniciar: function($){
            efecto($)
        }
    }
    window.Waves = Waves
})()

export default Waves