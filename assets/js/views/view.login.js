"use strict";
import Core_View from '../core/core.spa-view.js?v=0.11';

export default class LoginView extends Core_View{
    constructor(slug, template){
        super(slug, template);
    }

    init(){
        super.init();
        //HERE COMES VIEW SPECIFIC JAVASCRIPT!!!
        $("#login-submit").unbind("click").on("click", function(e){
            e.preventDefault();
            window.location.hash = "/";
        });
    }
}