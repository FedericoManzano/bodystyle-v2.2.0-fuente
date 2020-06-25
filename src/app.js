

/*!
 * BodyStyle v2.2.0
 * Copyright Federico Manzano
 * Licencia MIT
 * Repositorio (https://github.com/FedericoManzano/bodystyle-v2.2.0-fuente)
 */
import "jquery"
import Modal from "./modulos/Modal"
import Waves from  "./modulos/Waves"
import DropDown from "./modulos/Dropdown"
import BotonFlotante from "./modulos/BotonFlotante"
import Toast from "./modulos/Toast"
import ScrollSpy from "./modulos/ScrollSpy"
import ToolTips from "./modulos/ToolTips"
import Imagenes from "./modulos/Imagenes"
import Range from "./modulos/Range"
import Slider from "./modulos/Slider"
import Paralax from "./modulos/Paralax"
import BotonInicio from "./modulos/BotonInicio"
import Alerta from "./modulos/Alerta"
import Template from "./modulos/Template"
import Tab from "./modulos/Tabs"
import GruposInput from "./modulos/GruposInput"
import Desactivado from "./modulos/Desactivado"
import Coleccion from "./modulos/Colecciones"
import ColeccionFlotante from "./modulos/ColeccionFlotante"
import EfectoHoverBorde from "./modulos/EfectoHoverBorde"
import InputHandler from "./modulos/InputHandler"
import Select from "./modulos/Select"
import Contenedores from "./modulos/Contenedores"
import Nav from "./modulos/Nav"
import CodigoHtml from "./modulos/CodigoHtml"
import CodigoJs from "./modulos/CodigoJs"
import CodigoCss from "./modulos/CodigoCss"
import ComentarioDinamico from "./modulos/ComentarioDinamico"

(function(){
    Waves.iniciar()
    Range.iniciar()
    Alerta.iniciar()
    Template.iniciar()
    GruposInput.iniciar()
    Desactivado.iniciar();
    InputHandler.iniciar()
    CodigoJs.iniciar()
    CodigoCss.iniciar()
    ComentarioDinamico.iniciar()
    
    const CodigoHtmlInit = (config) => {
        CodigoHtml.iniciar(config)
    }


    const TemplateDestroy = () => {
        Template.destroy()
    }

    const NavInit = () => {
        Nav.iniciar()
    }

    const NavDestroy = () => {
        Nav.destroy()
    }


    var ContenedoresInit = () => Contenedores.iniciar()

    var Colecciones = () => {
        return new Coleccion
    } 

    var ParalaxInit = () => Paralax.iniciar()


    var BotonFlotanteInit = (config) => {
        BotonFlotante.iniciar(config)
    }

    var BotonFlotanteDestroy = () => {
        BotonFlotante.destroy()
    }

    var ScrollSpyInit = (config) => ScrollSpy.iniciar(config)
    var ScrollSpyDestroy = () => ScrollSpy.destroy()


    var ModalInit = function(conf){
        Modal.iniciar(conf)
    }

    var ModalDestroy = function(){
        Modal.destroy()
    }

    var ImagenesInit = ()=> {
        Imagenes.iniciar()
    }

    var ImagenesDestroy = ()=> {
        Imagenes.destroy()
    }


    var BotonInicioInit = () => {
        BotonInicio.iniciar()
    }

    var TabInit = () => {
        return new Tab
    }

    var ColeccionFlot = () => {
        return new ColeccionFlotante
    }

    var EfectoHoverBordeInit = () => {
        return new EfectoHoverBorde
    }

    var AutoInit = ()=> {
        ModalInit()
        DropDownInit({})
        ScrollSpyInit({})
        BotonFlotanteInit({})
        ImagenesInit()
        SliderInit({})
        ParalaxInit()
        ToolTipsInit()
        NavInit()
    }


    var SliderInit = (config) => {
        Slider.iniciar(config)
    }

    var Deshabilitar = () => {
        desactivar(".deshabilitado")
        desactivar(".input-cargando")
        desactivar(".input-cargando input")
        desactivar(".b-rojo-cargando")
        desactivar(".b-verde-cargando")
        desactivar(".b-azul-cargando")
        desactivar(".b-gris-cargando")
        desactivar(".b-negro-cargando")
        desactivar(".b-blanco-cargando")
    }
    
    var DropDownInit = (config) => {
        DropDown.iniciar(config)
    }

    var DropDownDestroy = (elemento) => {
        DropDown.destroy(elemento)
    }

    var ToolTipsInit = () => {
        ToolTips.iniciar()
    }

    var ToolTipsDestroy = () => {
        ToolTips.destroy()
    }

    var SelectInit = () => {
        return new Select
    }

    const BotonInicioDestroy = () => {
        BotonInicio.destroy()
    }



   var BS = {
        AutoInit: () => AutoInit(),

        // Modales
        ModalInit: (config) => ModalInit(config),
        ModalDestroy: () => ModalDestroy(),


        // Dropdown
        DropDownInit: (config) => DropDownInit(config),
        DropDownDestroy: (elemento) => DropDownDestroy(elemento),

        // Toast
        Toast: (html, clases, tiempo) => Toast.ejecutar(html, clases, tiempo),

        // ScrollSpy
        ScrollSpyInit: (config) => ScrollSpyInit(config),
        ScrollSpyDestroy: () => ScrollSpyDestroy(),

        // BotonFlotante
        BotonFlotanteInit: (config)=> BotonFlotanteInit(config),
        BotonFlotanteDestroy: () => BotonFlotanteDestroy(),

        // Imagenes
        ImagenesInit: () => ImagenesInit(),
        ImagenesDestroy: () => ImagenesDestroy(),

        // Deshabilitado
        Deshabilitar: () => Deshabilitar(),

        // Slider
        SliderInit: (config = {}) => SliderInit(config),

        // Paralax
        ParalaxInit: () => ParalaxInit(),

        // botonInicio
        BotonInicioInit: () => BotonInicioInit(),
        BotonInicioDestroy: () => BotonInicioDestroy(),


        // Tabs
        TabInit: () => TabInit(),

        // Tooltips
        ToolTipsInit: () =>  ToolTipsInit(),
        ToolTipsDestroy: () => ToolTipsDestroy(),


        // Colecciones
        Colecciones: () => Colecciones(),
        ColeccionFlot: () => ColeccionFlot(),

        // Efecti Hover Borde
        EfectoHoverBordeInit: () => EfectoHoverBordeInit(),

        // Select 
        SelectInit: () => SelectInit(),

        // Contenedores DEPRECATE
        ContenedoresInit: () => ContenedoresInit(),

        // Navs
        NavInit: () => NavInit(),
        NavDestroy: () => NavDestroy(),

        // Template
        TemplateDestroy: () => TemplateDestroy(),

        // Codigo 

        CodigoHtmlInit: (config) =>  CodigoHtmlInit(config)
    }
    
    window.BS = BS
})()

export default BS




