
import $ from 'jquery'
import ERR from "./Errores"

(function(){

    let seleccionado = 1
    const cantidad = $(".slider-show .slider .item").length
    let intervalo = null



    const inicializar = ({
        selectores = true, 
        flechas = true, 
        automatico = false, 
        tiempo = 3000} = {}) => {
       
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
                $(".slider-show .slider .selectores").append("<span></span>")
            }

            $(".slider-show .slider .selectores span").click((e) => {
                pararCronometro()
                let ind = $(e.target).index()
                $(".slider-show .slider .item:nth-child(" + (seleccionado) +")").fadeOut(300)
                $(".slider-show .slider .selectores span:nth-child(" + seleccionado + ")").removeClass("activo")
                seleccionado = ind + 1
                $(".slider-show .slider .item:nth-child(" + (seleccionado ) +")").fadeIn(300)
                $(".slider-show .slider .selectores span:nth-child(" + seleccionado + ")").addClass("activo")
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

            $(".slider-show .slider .f .f-der").click( (e) => {
                pararCronometro()
                efectofadeAdelante()
                activarCronometo()
            })
    
            $(".slider-show .slider .f .f-izq").click( (e) => {
                pararCronometro()
                efectofadeAtras()
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
            $(".slider-show .slider .item:nth-child(" + (seleccionado) +")").fadeOut(300)
            $(".slider-show .slider .selectores span:nth-child(" + seleccionado + ")")
                .removeClass("activo")
            seleccionado = adelante()
            $(".slider-show .slider .item:nth-child(" + (seleccionado ) +")").fadeIn(300)
            $(".slider-show .slider .selectores span:nth-child(" + seleccionado + ")")
                .addClass("activo")
        } 

        const efectofadeAtras = () => {
            $(".slider-show .slider .item:nth-child(" + (seleccionado) +")").fadeOut(300)
            $(".slider-show .slider .selectores span:nth-child(" + seleccionado + ")").removeClass("activo")
            seleccionado = atras()
            $(".slider-show .slider .item:nth-child(" + (seleccionado ) +")").fadeIn(300)
            $(".slider-show .slider .selectores span:nth-child(" + seleccionado + ")").addClass("activo")
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