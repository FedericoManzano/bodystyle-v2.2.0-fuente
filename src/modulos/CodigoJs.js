import $ from "jquery"

(function() {
    let arregloCodigos = new Array()
    let indice = 0


    const copiarCadena = (codigo, pos) => {
        let cadena = ""
        while( codigo[pos] != '"' && pos !== codigo.length ) {
            
            cadena += codigo[pos]
            pos ++
            indice = pos
        }
        
        return cadena
    }


    const copiarComentarioLinea = (codigo, pos) => {
        let cadena = ""
        while( codigo[pos] != '\n' && pos !== codigo.length ) {
            
            cadena += codigo[pos]
            pos ++
            indice = pos
        }
        
        return cadena
    }


    const copiarComentarioBloque = (codigo, pos) => {
        let cadena = ""
        while( (codigo[pos] != '*' || codigo[pos + 1] ==! '/')  && pos !== codigo.length ) {
            
            cadena += codigo[pos]
            pos ++
            indice = pos
        }
        
        return cadena
    }

    const buscarCadena = (codigo) => {
        let cadena = ""
        let resultado = ""
        for(let i = 0; i < codigo.length; i ++) {
            if(codigo[i] === '"') {
                cadena = copiarCadena(codigo, i + 1)
                resultado += '"' + "<span class='bs-js-cadena'>" + cadena + "</span>" + '"'
                i = indice
            } else {
                resultado += codigo[i]
            }
        }
        return resultado
    }


    const buscarComentarioLinea = (codigo) => {
        let cadena = ""
        let resultado = ""
        for(let i = 0; i < codigo.length; i ++) {
            if(codigo[i] === '/' && codigo[i + 1] === '/') {
                cadena = copiarComentarioLinea(codigo, i + 2)
                resultado += "//"+"<span class='bs-js-com'>" + cadena + "</span>" + "\n"
                i = indice
            } else {
                resultado += codigo[i]
            }
        }
        return resultado
    }

    const buscarComentarioBloque = (codigo) => {
        let cadena = ""
        let resultado = ""
        for(let i = 0; i < codigo.length; i ++) {
            if(codigo[i] === '/' && codigo[i + 1] === '*') {
                cadena = copiarComentarioBloque(codigo, i + 2)
                resultado += '/*'+"<span class='bs-js-com'>" + cadena + "</span>" + '*'
                i = indice
            } else {
                resultado += codigo[i]
            }
        }
        return resultado
    }


    const inicializar = () => {
        $(".cod-js").each((index, e) => {
            let codigo = $(e).html()
            $(e).text(codigo)
            codigo = $(e).text()
            arregloCodigos[index] = $(e).text()


            let resultado = buscarCadena(codigo)

            resultado = buscarComentarioLinea(resultado)
            
            resultado = buscarComentarioBloque(resultado)
            console.log(resultado)
            resultado = resultado.replace(/function/g, "<span class='bs-js-claves'>function</span>")
            resultado = resultado.replace(/let/g, "<span class='bs-js-bar'>let</span>")
            resultado = resultado.replace(/var/g, "<span class='bs-js-bar'>var</span>")
            resultado = resultado.replace(/constructor/g, "<span class='bs-js-claves'>constructor</span>")
            resultado = resultado.replace(/const/g, "<span class='bs-js-bar'>const</span>")
            resultado = resultado.replace(/typeof/g, "<span class='bs-js-claves'>typeof</span>")
            resultado = resultado.replace(/class\ /g, "<span class='bs-js-claves'>class </span>")
            resultado = resultado.replace(/return/g, "<span class='bs-js-claves'>return</span>")
            resultado = resultado.replace(/\"/g, '<span class="bs-js-cadena">"</span>')
            resultado = resultado.replace(/\(/g, "<span class='bs-js-parentesis'>(</span>")
            resultado = resultado.replace(/\)/g, "<span class='bs-js-parentesis'>)</span>")
            resultado = resultado.replace(/if/g, "<span class='bs-js-claves'>if</span>")
            resultado = resultado.replace(/else/g, "<span class='bs-js-claves'>else</span>")
            resultado = resultado.replace(/switch/g, "<span class='bs-js-claves'>switch</span>")
            resultado = resultado.replace(/case/g, "<span class='bs-js-claves'>case</span>")
            resultado = resultado.replace(/default/g, "<span class='bs-js-claves'>default</span>")
            resultado = resultado.replace(/for/g, "<span class='bs-js-claves'>for</span>")
            resultado = resultado.replace(/while/g, "<span class='bs-js-claves'>while</span>")
            resultado = resultado.replace(/console/g, "<span class='bs-js-func'>console</span>")
            resultado = resultado.replace(/new/g, "<span class='bs-js-new'>new</span>")
            resultado = resultado.replace(/this/g, "<span class='bs-js-new'>this</span>")
            resultado = resultado.replace(/Array/g, "<span class='bs-js-new'>Array</span>")
            resultado = resultado.replace(/,/g, "<span class='bs-js-new'>,</span>")
            resultado = resultado.replace(/\/\*/g, "<span class='bs-js-com'>/*</span>")
            resultado = resultado.replace(/\*\//g, "<span class='bs-js-com'>*/</span>")
            resultado = resultado.replace(/\/\//g, "<span class='bs-js-com'>//</span>")
            
            // Caracteres
            resultado = resultado.replace(/\=&gt;/g, "<span class='bs-js-claves'>=&gt;</span>")

          
            $(e).html(resultado)
            $(e).append("<div class='boton-copiar'>Copiar</div>")
            $(e).children(".boton-copiar").attr("id", index)
        })
    }


    const copiar = () => {
        $("pre .boton-copiar").click((e) => {
            let numero = Number.parseInt($(e.target).attr("id"))
            var $temp = $("<textarea></textarea>")
            $("body").append($temp)

            $temp.val(arregloCodigos[numero]).select()
            document.execCommand("copy")
            $temp.remove()
        })
    }

    const CodigoJs = {
        iniciar: () => {
            inicializar()
            copiar()
        }
    }

    window.CodigoJs = CodigoJs
})()

export default CodigoJs

        

