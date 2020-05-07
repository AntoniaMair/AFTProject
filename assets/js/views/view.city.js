"use strict";
import Core_View from '../core/core.spa-view.js?v=0.11';

export default class CityView extends Core_View{
    constructor(slug, template){
        super(slug, template);
        this.city = undefined;
    }

    init(){
        super.init();
        //HERE COMES VIEW SPECIFIC JAVASCRIPT!!!
        if(window.Core.utils.isEmpty(window.Core.getParams["id"]) || window.Core.model.getCity(window.Core.getParams["id"]) == false)
            window.location.hash = "/";
        else {
            let self = this;
            window.Core.model.getCity(window.Core.getParams["id"]).then(function(response) {
                self.city = response;
                self.render();
            });
        }

    }

    async render(){

        $("#viewTitle").text(this.city.name);
        $("#city_description").html(this.city.getSingleMarkup());
        $("#cityhotelsheading").text("Hotels in "+this.city.name);


        console.log(this.city.name);
        let hotels = await window.Core.model.getHotelOfCity(this.city.name);
        console.log(hotels);
        for(let hotel of hotels){
            console.log("in der Hotelschleife");
            $("#cityhotels").append(hotel.getListMarkup());
        }

    }
}


