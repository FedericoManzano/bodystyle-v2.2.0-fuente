
import $ from 'jquery'
import ERR from "./GestionErrores"



(function(){

    let seleccionado = 1
    const cantidad = $(".slider-show .slider .item").length
    let intervalo = null



    const inicializar = ({

        contexto = "sinid",
        selectores = true, 
        flechas = true, 
        automatico = false, 
        tiempo = 3000} = {}) => {
       
        if(!ERR.contexto.val(contexto)) {
            console.error("(SLIDER)" + ERR.contexto.mje)
            $(".slider-show").hide()
            return
        }

        if(!ERR.bool.val(selectores)){
            console.error( "(SLIDER)" + ERR.bool.mje)
            $(".slider-show").hide()
            return
        }

        if(!ERR.bool.val(flechas)){
            console.error( "(SLIDER)" + ERR.bool.mje)
            $(".slider-show").hide()
            return
        }

        if(!ERR.bool.val(automatico)){
            console.error( "(SLIDER)" + ERR.bool.mje)
            $(".slider-show").hide()
            return
        }

        if(!ERR.positivo.val(tiempo)){
            console.error( "(SLIDER)" + ERR.positivo.mje + " Tiempo en ms")
            $(".slider-show").hide()
            return
        }

        


        $("html").css("height", "100%")
        $("body").css("height", "100%")
        
        $(".slider-show .slider .item").css("display", "none")
        $(".slider-show .slider .item:nth-child(1)").show()
        

        if(selectores){
            $(".slider-show .slider").append(`
            <div class='selectores'>
            </div>
            `)

            for(let i = 0; i < cantidad; i ++) {
                $(contexto + " .slider-show .slider .selectores").append("<span></span>")
            }

            $(contexto + " .slider-show .slider .selectores span").click((e) => {
                if(automatico)
                    pararCronometro()
                let ind = $(e.target).index()
                $(contexto + " .slider-show .slider .item:nth-child(" + (seleccionado) +")")
                    .fadeOut(500)
                $(contexto + " .slider-show .slider .selectores span:nth-child(" + seleccionado + ")")
                    .removeClass("activo")
                seleccionado = ind + 1
                $(contexto + " .slider-show .slider .item:nth-child(" + (seleccionado ) +")")
                    .fadeIn(500)
                $(contexto + " .slider-show .slider .selectores span:nth-child(" + seleccionado + ")")
                    .addClass("activo")
                if(automatico)
                    activarCronometo()
            })

            $(".slider-show .slider .selectores span:nth-child(1)").addClass("activo")
        }
        
        if(flechas) {
            $(".slider-show .slider").append(`
            <div class='f'>
                <div class='f-der'></div>
                <div class='f-izq'></div>
            </div>
            `)

            $(contexto + " .slider-show .slider .f .f-der").click( (e) => {
                if(automatico)
                    pararCronometro()
                efectofadeAdelante()
                if(automatico)
                    activarCronometo()
            })
    
            $(contexto + " .slider-show .slider .f .f-izq").click( (e) => {
                if(automatico)
                    pararCronometro()
                efectofadeAtras()
                if(automatico)
                    activarCronometo()
            })
        }

        const adelante = () => {
            return seleccionado === cantidad  ? 1 : seleccionado + 1
        }

        const atras = () => {
            return seleccionado === 1  ? cantidad : seleccionado - 1
        }


        const efectofadeAdelante = () => {
            $(contexto + " .slider-show .slider .item:nth-child(" + (seleccionado) +")").fadeOut(500)
            $(contexto + " .slider-show .slider .selectores span:nth-child(" + seleccionado + ")")
                .removeClass("activo")
            seleccionado = adelante()
            $(contexto + " .slider-show .slider .item:nth-child(" + (seleccionado ) +")").fadeIn(500)
            $(contexto + " .slider-show .slider .selectores span:nth-child(" + seleccionado + ")")
                .addClass("activo")
            $(contexto + " .slider-show .slider .item:nth-child("+ seleccionado +") .info").animate({
                transform: "scale(1.3)"
            }, 500, () => {
                $(contexto + " .slider-show .slider .item:nth-child( "+ seleccionado + ") .info")
                    .css("transform", "scale(1)")
            })
        } 

        const efectofadeAtras = () => {
            $(contexto + " .slider-show .slider .item:nth-child(" + (seleccionado) +")").fadeOut(500)
            $(contexto + " .slider-show .slider .selectores span:nth-child(" + seleccionado + ")")
                .removeClass("activo")
            seleccionado = atras()
            $(contexto + " .slider-show .slider .item:nth-child(" + (seleccionado ) +")").fadeIn(500)
            $(contexto + " .slider-show .slider .selectores span:nth-child(" + seleccionado + ")")
                .addClass("activo")
        }


        const activarCronometo = () => {
            intervalo = setInterval(() => {
                efectofadeAdelante()
            }, tiempo);
        } 

        const pararCronometro = () => {
            clearInterval(intervalo)
        } 

        if(automatico) {
            
            activarCronometo()
            $(window).focus(() => {
                activarCronometo()
            })
            $(window).blur(() => {
                pararCronometro()
            })
        }
    }

    var Slider = {
        iniciar: (config)=> {
            inicializar(config)
        }
    }

    window.Slider = Slider
})()

export default Slider