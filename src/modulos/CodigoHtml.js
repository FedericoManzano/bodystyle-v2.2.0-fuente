import $ from "jquery"


(function () {


    let indice = 0
    let arregloCodigos = new Array()

    const CARACTER = [
        '+', '/', '='
    ]

    const CADENAS = [
        '"'
    ]

    const APERTURA_CIERRE = [
        '<', '>'
    ]



    const esCaracter = (c) => {
        return CARACTER.indexOf(c) !== -1
    }

    const esCadena = (c) => {
        return CADENAS.indexOf(c) !== -1
    }

    const colorearEtiqueta = (codigo, resultado, pos) => {
        while(codigo[pos] !== ' ' && codigo[pos] !== '>') {
            resultado += "<span class='bs-html-etquetas'>" + codigo[pos] + "</span>"
            pos ++
        }
        if(codigo[pos] === ' ' ) 
            resultado += ' '
        indice = pos
        return resultado
    }

    const colorearAttr = (codigo, resultado, pos) => {
        while(!esCaracter(codigo[pos]) && codigo[pos] !== ' ' && codigo[pos] !== '>'){
            resultado += "<span class='bs-html-attr'>" + codigo[pos] + "</span>"
            pos ++
        }

        if(codigo[pos] === ' ' ) 
            resultado += ' '
        indice = pos
        return resultado
    }

    const colorearCadena = (codigo, resultado, pos) => {
        resultado += "<span class='bs-html-cadenas'>" + codigo[pos] + "</span>"
        pos ++ 
        while(!esCadena(codigo[pos])) {
            resultado += "<span class='bs-html-cadenas'>" + codigo[pos] + "</span>"
            pos ++ 
        } 
        resultado += "<span class='bs-html-cadenas'>" + codigo[pos] + "</span>"
        pos ++ 

        if(codigo[pos] === ' ' ) 
            resultado += ' '
        indice = pos
        return resultado
    }

    const esComentario = (codigo, pos) => {
        if(codigo[pos] === '<' && codigo[pos + 1] === '!' && codigo[pos + 2] === '-')
            return true 
        return false
    }

    const colorearComentario = (codigo, resultado, pos) => {
        let cadenaAux = codigo.trim().substring(pos, codigo.length)
        let tope = codigo.indexOf("-->")
        while(cadenaAux.trim() !== '-->' && pos < tope){
            resultado += "<span class='bs-html-comentarios'>" + codigo[pos] + "</span>"
            pos ++
            cadenaAux = codigo.substring(pos, codigo.length)
            
        }

        for(var i = pos; i < pos + 4; i ++) 
            resultado += "<span class='bs-html-comentarios'>" + codigo[i] + "</span>"
        pos = i
        indice = pos
        return resultado
    } 
    
    const colorearLinea = (codigo, resultado, pos) => {
        if(codigo[pos] === '<')
            resultado = colorearEtiqueta(codigo, resultado, pos)
        pos = indice 

        if(codigo[pos] === ' ') {
            resultado += ' '
            pos ++
            resultado = colorearAttr(codigo, resultado, pos)
        }
        pos = indice 

        if(esCaracter(codigo[pos])) {
            resultado += "<span class='c-negro'>" + codigo[pos] + "</span>"
            pos ++
        }
       
        if(esCadena(codigo[pos])) {
            resultado = colorearCadena(codigo, resultado, pos)
        }
        pos = indice
        if(codigo[pos] === '>') {
            resultado += "<span class='bs-html-etquetas'>" + codigo[pos] + "</span>"
        }
            
        pos = indice
        return resultado
    }

    
    const inicializar = () => {
        $(".cod-html").each((index, e) => {
            let codigo = $(e).html()
            $(e).text(codigo)
            codigo = $(e).text()
            arregloCodigos[index] = $(e).text()
            let resultado = ""
            for (let i = 0; i < codigo.length; i++) {
                if(codigo[i] === '<') {
                    while( !esComentario(codigo, i) && codigo[i] !== '>') {
                        resultado = colorearLinea(codigo, resultado, i)
                        i = indice
                    }
                    if(esComentario(codigo, i)){
                        resultado = colorearComentario(codigo, resultado, i)
                        i = indice
                    }
                }else {
                    resultado += codigo[i]
                }
            }

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

    const CodigoHtml = {
        iniciar: () => {
            inicializar()
            copiar()
        }
    }

    window.CodigoHtml = CodigoHtml
})()

export default CodigoHtml
