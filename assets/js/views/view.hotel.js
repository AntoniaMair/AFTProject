"use strict";
import Core_View from '../core/core.spa-view.js?v=0.11';

export default class HotelView extends Core_View{
    constructor(slug, template){
        super(slug, template);
        this.hotel = undefined;
    }

    init(){
        super.init();
        //HERE COMES VIEW SPECIFIC JAVASCRIPT!!!
        if(window.Core.utils.isEmpty(window.Core.getParams["id"]) || window.Core.model.getHotel(window.Core.getParams["id"]) == false)
            window.location.hash = "/";
        else {
            let self = this;
            console.log("in der init Funktion der HotelView");
            window.Core.model.getHotel(window.Core.getParams["id"]).then(function(response) {
                self.hotel = response;
                self.render();
            });
        }


    }

    async render(){

        console.log("in der render Funktion der HotelView");

        $("#viewTitle").text(this.hotel.name);
        $("#hotel_description").html(this.hotel.getSingleMarkup());

    }
}