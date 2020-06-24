import $ from "jquery"

(function() {
    let indice = 0


    const colorearSelectores  = (codigo) =>  {

        let resultado = ""
        
        for(var i = 0; i < codigo.length; i ++) {
            if(codigo[i] === '{') {
                while (codigo[i] !== '}'){
                    resultado += codigo[i]
                    i ++
                }
                if(codigo[i] === '}') {
                    resultado += codigo[i]
                    i ++
                }
            } 
            else
                resultado += "<span class='bs-selector'>"+ codigo[i] + "</span>"
        }
        


        return resultado
    }








    const inicializar = () => {
        $(".cod-css").each((index, e) => {
            let codigo = $(e).html()
            $(e).text(codigo)
            codigo = $(e).text()
           
    
            let resultado = colorearSelectores(codigo)
            resultado = resultado.replace(/width/g, "<span class='bs-prop'>width</span>")
            resultado = resultado.replace(/height/g, "<span class='bs-prop'>height</span>")
            resultado = resultado.replace(/max-width/g, "<span class='bs-prop'>max-width</span>")
            resultado = resultado.replace(/max-height/g, "<span class='bs-prop'>max-height</span>")
            resultado = resultado.replace(/min-width/g, "<span class='bs-prop'>min-width</span>")
            resultado = resultado.replace(/min-height/g, "<span class='bs-prop'>min-height</span>")

            /** Fuentes */
            resultado = resultado.replace(/font-family/g, "<span class='bs-prop'>font-family</span>")
            resultado = resultado.replace(/font-size/g, "<span class='bs-prop'>font-size</span>")
            resultado = resultado.replace(/font-weight/g, "<span class='bs-prop'>font-weight</span>")
            resultado = resultado.replace(/font-style/g, "<span class='bs-prop'>font-family</span>")
            resultado = resultado.replace(/font-variant/g, "<span class='bs-prop'>font-family</span>")
        


            // Colores
            resultado = resultado.replace(/background-color/g, "<span class='bs-prop'>background-color</span>")
            resultado = resultado.replace(/background-image/g, "<span class='bs-prop'>background-image</span>")
            resultado = resultado.replace(/background-repeat/g, "<span class='bs-prop'>background-repeat</span>")
            resultado = resultado.replace(/background-attachment/g, "<span class='bs-prop'>background-attachment</span>")
            resultado = resultado.replace(/background-position/g, "<span class='bs-prop'>background-position</span>")
            resultado = resultado.replace(/opacity/g, "<span class='bs-prop'>opacity</span>")


            // Texto
            resultado = resultado.replace(/text-indent/g, "<span class='bs-prop'>text-indent</span>")
            resultado = resultado.replace(/text-align/g, "<span class='bs-prop'>text-align</span>")
            resultado = resultado.replace(/text-decoration/g, "<span class='bs-prop'>text-decoration</span>")
            resultado = resultado.replace(/letter-spacingt/g, "<span class='bs-prop'>letter-spacing</span>")
            resultado = resultado.replace(/text-transform/g, "<span class='bs-prop'>word-spacing</span>")
            resultado = resultado.replace(/line-height/g, "<span class='bs-prop'>line-height</span>")

        
            //Listas
            resultado = resultado.replace(/list-style-type/g, "<span class='bs-prop'>list-style-type</span>")
            resultado = resultado.replace(/list-style-image/g, "<span class='bs-prop'>list-style-image</span>")
            resultado = resultado.replace(/list-style-position/g, "<span class='bs-prop'>list-style-position</span>")
            resultado = resultado.replace(/list-style/g, "<span class='bs-prop'>list-style</span>")
           
            // padding 
            resultado = resultado.replace(/padding-top/g, "<span class='bs-prop'>padding-top</span>")
            resultado = resultado.replace(/padding-left/g, "<span class='bs-prop'>padding-left</span>")
            resultado = resultado.replace(/padding-bottom/g, "<span class='bs-prop'>padding-bottom</span>")
            resultado = resultado.replace(/padding-right/g, "<span class='bs-prop'>padding-right</span>")
            resultado = resultado.replace(/padding/g, "<span class='bs-prop'>padding</span>")
            // margin 
            
            resultado = resultado.replace(/margin-top/g, "<span class='bs-prop'>margin-top</span>")
            resultado = resultado.replace(/margin-left/g, "<span class='bs-prop'>margin-left</span>")
            resultado = resultado.replace(/margin-bottom/g, "<span class='bs-prop'>margin-bottom</span>")
            resultado = resultado.replace(/margin-right/g, "<span class='bs-prop'>margin-right</span>")
            resultado = resultado.replace(/margin/g, "<span class='bs-prop'>margin</span>")


            resultado = resultado.replace(/border-top-width/g, "<span class='bs-prop'>border-top-width</span>")
            resultado = resultado.replace(/border-left-width/g, "<span class='bs-prop'>border-left-width</span>")
            resultado = resultado.replace(/border-bottom-width/g, "<span class='bs-prop'>border-bottom-width</span>")
            resultado = resultado.replace(/border-right-width/g, "<span class='bs-prop'>border-right-width</span>")
            resultado = resultado.replace(/border-width/g, "<span class='bs-prop'>border-width</span>")


            resultado = resultado.replace(/border-top-color/g, "<span class='bs-prop'>border-top-color</span>")
            resultado = resultado.replace(/border-left-color/g, "<span class='bs-prop'>border-left-color</span>")
            resultado = resultado.replace(/border-bottom-color/g, "<span class='bs-prop'>border-bottom-color</span>")
            resultado = resultado.replace(/border-right-color/g, "<span class='bs-prop'>border-right-color</span>")
            resultado = resultado.replace(/border-color/g, "<span class='bs-prop'>border-color</span>")

            resultado = resultado.replace(/border-top-style/g, "<span class='bs-prop'>border-top-style</span>")
            resultado = resultado.replace(/border-right-style/g, "<span class='bs-prop'>border-right-style</span>")
            resultado = resultado.replace(/border-bottom-style/g, "<span class='bs-prop'>border-bottom-style</span>")
            resultado = resultado.replace(/border-left-style/g, "<span class='bs-prop'>border-left-style</span>")
            resultado = resultado.replace(/border-style/g, "<span class='bs-prop'>border-style</span>")


            resultado = resultado.replace(/border-top/g, "<span class='bs-prop'>border-top</span>")
            resultado = resultado.replace(/border-right/g, "<span class='bs-prop'>border-right</span>")
            resultado = resultado.replace(/border-bottom/g, "<span class='bs-prop'>border-bottom</span>")
            resultado = resultado.replace(/border-left/g, "<span class='bs-prop'>border-left</span>")
            resultado = resultado.replace(/border/g, "<span class='bs-prop'>border-style</span>")

            resultado = resultado.replace(/border-radius/g, "<span class='bs-prop'>border-radius</span>")
            resultado = resultado.replace(/display/g, "<span class='bs-prop'>display</span>")
            resultado = resultado.replace(/position/g, "<span class='bs-prop'>position</span>")
            resultado = resultado.replace(/bottom/g, "<span class='bs-prop'>bottom</span>")
            resultado = resultado.replace(/letf/g, "<span class='bs-prop'>left</span>")
            resultado = resultado.replace(/top/g, "<span class='bs-prop'>top</span>")
            resultado = resultado.replace(/right/g, "<span class='bs-prop'>right</span>")

            resultado = resultado.replace(/box-sizing/g, "<span class='bs-prop'>box-sizing</span>")
            resultado = resultado.replace(/z-index/g, "<span class='bs-prop'>z-index</span>")
            resultado = resultado.replace(/float/g, "<span class='bs-prop'>float</span>")
            resultado = resultado.replace(/clear/g, "<span class='bs-prop'>clear</span>")
            resultado = resultado.replace(/z-index/g, "<span class='bs-prop'>z-index</span>")
            resultado = resultado.replace(/top/g, "<span class='bs-prop'>top</span>")
            resultado = resultado.replace(/right/g, "<span class='bs-prop'>right</span>")


            $(e).html(resultado)
        })
    }


    const CodigoCss = {
        iniciar: () => {
            inicializar()
            
        }
    }

    window.CodigoCss = CodigoCss
})()

export default CodigoCss

        

