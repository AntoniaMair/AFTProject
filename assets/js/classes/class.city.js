"use strict";

export default class City{

    constructor(city){
        Object.assign(this, city);
    }

    getListMarkup(){
        let markup = "<div class='card' style='width:18rem;'>";
        markup +=  "<img class='card-img-top' src='"+this.image+"' alt='"+this.name+"'/>";
        markup += "<div class='card-body'>";
        markup += "<h5 class='card-title'><b>"+this.name+"</b></h5>";
        markup += "<p class='card-text'><p><b>Country: </b>"+this.country+"</p><p><b>Nickname: </b>"+this.nickname+"</p></p>";
        markup += "<a href='#/city?id="+this["_id"]+"' class='btn btn-dark city' data-id='"+this.id+"'>View City</a>";
        markup += "</div></div>";
        return markup;
    }

    getSingleMarkup(){
        let markup = "<div class='citysinglediv'><div class='flex'><img src='"+this.image+"' alt='"+this.name+"'/></div><div id='names'><h3>"+this.name+"</h3><h5>"+this.nickname+"</h5></div></div>";

        return markup;

    }


}