'use strict';
import Core_Utils from "./core.utils.js?v=0.11";

/*******************************************************
 *     Hash-based Routes for Single Page Applications.
 *     Routes can are treated like Views. Each Route is
 *     therefore bound to one single (unique) View.
 *
 *     Neuwersch - 2020-03-15
 *******************************************************/

const app = document.getElementById('core_app');
export default class Core_View {
    constructor(slug, template) {
        this.slug = slug;
        this.template = template;
        window.addEventListener("templateChanged", this.listen.bind(this));
    }

    listen(e) {
        if (e.detail.slug == this.slug)
            this.init();
    }

    init() {
        if (window.Core.debugmode)
            console.log("View loaded: " + this.slug);
    }

    isActive() {
        //ist ein Get Parameter vorhanden
        if(window.Core.utils.isEmpty(Core_View.getGetParameters())) //Kein Fragezeichen vorhanden
            return (window.location.hash.substr(1).replace('#', '') === this.slug);
        else{
            let index = window.location.hash.substr(1).indexOf("?");
            return (window.location.hash.substr(1, index).replace('#', '') === this.slug);
        }
    }

    renderMarkup() {

        let self = this;
        Core_View.useTemplate(window.Core.system.webRoot + window.Core.system.templatesPath + "/" + this.template + ".tpl", app, this.slug);
    }


    static useTemplate(template, container, slug) {
        $.get(template, function (tpl) {
            let marker = /<%>/gi,
                result,
                indizes = [],
                word,
                oldword = [],
                newword = [];


            while ((result = marker.exec(tpl))) {
                indizes.push(result.index);
            }
            for (let i = 0; i < indizes.length; i = i+2) {
                oldword.push(tpl.substring(indizes[i],(indizes[i+1]+3)));
                word = tpl.substring(((indizes[i])+3),indizes[i+1]);
                newword.push(window.Core.translator.t(word));
            }
            for(let i = 0; i<oldword.length; i++){
                tpl = tpl.replace(oldword[i], newword[i]);
            }

            container.innerHTML = tpl;
            window.Core.getParams = Core_View.getGetParameters();
            window.dispatchEvent(new CustomEvent("templateChanged", {detail: {slug: slug}}));

        });

    }

    static getGetParameters(){
        let index = window.location.hash.substr(1).indexOf("?");
        if(index != -1){
            let parameters = window.location.hash.substr(index+2);
            let result = parameters.split("&").reduce(function(result, item){
                let parts = item.split("=");
                result[parts[0]] = parts[1];
                return result;
            }, {});
            return(result);
        } else
            return {};
    }
}


