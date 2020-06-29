import $ from "jquery"

(function() {
    let indice = 0



    const colorearComentario = (codigo, resultado, i) => {
        resultado += "<span class='c-verde'>"+ codigo[i] + "</span>"
        i ++
        while (codigo[i] !== '/' && codigo.length !== i){
            resultado += "<span class='c-verde'>"+ codigo[i] + "</span>"
            i ++
        }
        if(codigo[i] === '/') {
            resultado += "<span class='c-verde'>"+ codigo[i] + "</span>"
        }
        codigo[i] === '\n'
        indice = i

        return resultado
    }

    const colorearCadenas = (codigo, resultado, i) => {
        resultado += "<span class='c-azul-c'>"+ codigo[i] + "</span>"
        i ++
        while (codigo[i] !== '"' && codigo[i] !== "'"  && codigo.length !== i){
            resultado += "<span class='c-azul-c'>"+ codigo[i] + "</span>"
            i ++
        }
        if(codigo[i] === '"' || codigo[i] === "'") {
            resultado += "<span class='c-azul-c'>"+ codigo[i] + "</span>"
        }
        indice = i
        return resultado
    }

    const colorearSelectores  = (codigo) =>  {

        let resultado = ""
        
        for(var i = 0; i < codigo.length; i ++) {
            if(codigo[i] === '{') {
                while (codigo[i] !== '}'){
                    if(codigo[i] === '/') {
                        resultado = colorearComentario(codigo, resultado, i)
                        i = indice
                    }
                    if(codigo[i] === "'" || codigo[i] === '"') {
                        resultado = colorearCadenas(codigo, resultado, i)
                        i = indice
                    }

                    if(codigo[i] === '/')
                        i ++
                    resultado += codigo[i]
                    i ++
                }
                if(codigo[i] === '}') {
                    resultado += codigo[i]
                    i ++
                }
            } 
            else if(codigo[i] === '@') {
                while (codigo[i] !== ' ' && codigo[i] !== '\n' && codigo.length !== i){
                    resultado += "<span class='c-violeta'>"+ codigo[i] + "</span>"
                    i ++
                }
                if(codigo[i] === ' ') 
                    resultado += codigo[i]
                
            }else if(codigo[i] === '/') {
                resultado = colorearComentario(codigo, resultado, i)
                i = indice
            }else if(codigo[i] === "'" || codigo[i] === '"') {
                resultado = colorearCadenas(codigo, resultado, i)
                i = indice
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
            
            
            resultado = resultado.replace(/max-width/g, "<span class='bs-prop'>max-width</span>")
            resultado = resultado.replace(/max-height/g, "<span class='bs-prop'>max-height</span>")
            resultado = resultado.replace(/min-width/g, "<span class='bs-prop'>min-width</span>")
            resultado = resultado.replace(/min-height/g, "<span class='bs-prop'>min-height</span>")
            resultado = resultado.replace(/width/g, "<span class='bs-prop'>width</span>")
            resultado = resultado.replace(/height/g, "<span class='bs-prop'>height</span>")

            /** Fuentes */
            resultado = resultado.replace(/font-family/g, "<span class='bs-prop'>font-family</span>")
            resultado = resultado.replace(/font-size/g, "<span class='bs-prop'>font-size</span>")
            resultado = resultado.replace(/font-weight/g, "<span class='bs-prop'>font-weight</span>")
            resultado = resultado.replace(/font-style/g, "<span class='bs-prop'>font-family</span>")
            resultado = resultado.replace(/font-variant/g, "<span class='bs-prop'>font-family</span>")
        


            // Colores
            
            resultado = resultado.replace(/background-color/g, "<span class='bs-prop'>background-color</span>")
            resultado = resultado.replace(/color/g, "<span class='bs-prop'>color</span>")
            resultado = resultado.replace(/background-image/g, "<span class='bs-prop'>background-image</span>")
            resultado = resultado.replace(/background-repeat/g, "<span class='bs-prop'>background-repeat</span>")
            resultado = resultado.replace(/background-attachment/g, "<span class='bs-prop'>background-attachment</span>")
            resultado = resultado.replace(/background-position/g, "<span class='bs-prop'>background-position</span>")
            resultado = resultado.replace(/opacity/g, "<span class='bs-prop'>opacity</span>")


            // Medidas 
            resultado = resultado.replace(/px/g, "<span class='bs-medidas'>px</span>")
            resultado = resultado.replace(/rem/g, "<span class='bs-medidas'>rem</span>")
            resultado = resultado.replace(/%/g, "<span class='bs-medidas'>%</span>")
           

            resultado = resultado.replace(/0/g, "<span class='bs-medidas'>0</span>")
            resultado = resultado.replace(/1/g, "<span class='bs-medidas'>1</span>")
            resultado = resultado.replace(/2/g, "<span class='bs-medidas'>2</span>")
            resultado = resultado.replace(/3/g, "<span class='bs-medidas'>3</span>")
            resultado = resultado.replace(/4/g, "<span class='bs-medidas'>4</span>")
            resultado = resultado.replace(/5/g, "<span class='bs-medidas'>5</span>")
            resultado = resultado.replace(/6/g, "<span class='bs-medidas'>6</span>")
            resultado = resultado.replace(/7/g, "<span class='bs-medidas'>7</span>")
            resultado = resultado.replace(/8/g, "<span class='bs-medidas'>8</span>")
            resultado = resultado.replace(/9/g, "<span class='bs-medidas'>9</span>")
            
            


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
            

            resultado = resultado.replace(/border-radius/g, "<span class='bs-prop'>border-radius</span>")
            resultado = resultado.replace(/border/g, "<span class='bs-prop'>border</span>")


            resultado = resultado.replace(/display/g, "<span class='bs-prop'>display</span>")
            resultado = resultado.replace(/position/g, "<span class='bs-prop'>position</span>")
            resultado = resultado.replace(/bottom/g, "<span class='bs-prop'>bottom</span>")
            resultado = resultado.replace(/letf/g, "<span class='bs-prop'>left</span>")
            resultado = resultado.replace(/top/g, "<span class='bs-prop'>top</span>")
            resultado = resultado.replace(/right/g, "<span class='bs-prop'>right</span>")


            resultado = resultado.replace(/justify-contenet/g, "<span class='bs-prop'>justify-contenet</span>")
            
            resultado = resultado.replace(/align-content/g, "<span class='bs-prop'>align-content</span>")
            resultado = resultado.replace(/flex-wrap/g, "<span class='bs-prop'>flex-wrap</span>")
            resultado = resultado.replace(/flex-direction/g, "<span class='bs-prop'>flex-direction</span>")
            resultado = resultado.replace(/align-item/g, "<span class='bs-prop'>align-item</span>")

            resultado = resultado.replace(/box-sizing/g, "<span class='bs-prop'>box-sizing</span>")
            resultado = resultado.replace(/float/g, "<span class='bs-prop'>float</span>")
            resultado = resultado.replace(/clear/g, "<span class='bs-prop'>clear</span>")
            resultado = resultado.replace(/z-index/g, "<span class='bs-prop'>z-index</span>")
            resultado = resultado.replace(/top/g, "<span class='bs-prop'>top</span>")
            resultado = resultado.replace(/right/g, "<span class='bs-prop'>right</span>")


            resultado = resultado.replace(/transform/g, "<span class='bs-prop'>transform</span>")
            resultado = resultado.replace(/transition/g, "<span class='bs-prop'>transition</span>")
            resultado = resultado.replace(/-moz-/g, "<span class='bs-prop'>-moz-</span>")
            resultado = resultado.replace(/-ms-/g, "<span class='bs-prop'>-ms-</span>")
            resultado = resultado.replace(/-o-/g, "<span class='bs-prop'>-o-</span>")
            resultado = resultado.replace(/-webkit-/g, "<span class='bs-prop'>-webkit-</span>")



            
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

        

