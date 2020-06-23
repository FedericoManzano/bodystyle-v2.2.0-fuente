import $ from 'jquery'

(function(){

    var destroy = () => {
        $(".tem-input input").off()
        $(".tem-input select").off()
    }
    var inicializar = () => {
        $(".tem-input select").parent().children("label").css("top", 5)
        $(".tem-input select").parent().children("label").css("font-size", 10)
        $(".tem-input select").parent().append("<span class='flechas'></span>")
        
    }

    var focus = () => {
        $(".tem-input input").focus(function() {
            $(this).parent().css("border", "2px solid #1B94FF ")
            $(this).parent().children("label").css("top", 5)
            $(this).parent().children("label").css("font-size", 10)
            $(this).css("top", "calc(50% - 10px)")
        })

        $(".tem-input select").focus(function() {
            $(this).parent().css("border", "2px solid #1B94FF ")
        })

        $(".tem-input input").blur(function() {
            $(this).parent().css("border", "1px solid rgba(0, 0, 0, 0.171)")
            if($(this).val() === ""){
                $(this).parent().children("label").css("top", "calc(50% - 9px)")
                $(this).parent().children("label").css("font-size", 15)
                $(this).css("top", "calc(50% - 10px)")
            }
        })

        $(".tem-input select").blur(function() {
            $(this).parent().css("border", "1px solid rgba(0, 0, 0, 0.171)")
        })
    }


    var Template = {
        iniciar : () => {
            inicializar()
            focus()
        },

        destroy: ()=> destroy()
    }

    window.Template = Template
})()

export default Template