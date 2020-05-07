"use strict";

export default class Hotel {

    constructor(hotel) {
        Object.assign(this, hotel);
    }

    getListMarkup() {
        let end = this.description.indexOf(".");
        let subdesc = this.description.substring(0, end + 1);


        let markup = "<div class='card' style='width:18rem;'>";
        markup += "<img class='card-img-top' src='" + this.images[0] + "' alt='" + this.name + "'/>";
        markup += "<div class='card-body'>";
        markup += "<h5 class='card-title'><b>" + this.name + "<span> " + this.stars + " Star Hotel</span><span> (" + this.city + ")</span></b></h5>";
        markup += "<p class='card-text'><p><b>Price: </b>" + this.price + "</p><p>" + subdesc + "</p></p>";
        markup += "<a href='#/hotel?id=" + this["_id"] + "' class='btn btn-dark hotel' data-id='" + this.id + "'>View Hotel</a>";
        markup += "</div></div>";
        return markup;


    }

    getSingleMarkup() {

        let markup = "<div class='hotelsinglediv'><h2>" + this.name + " " + this.stars + " Star Hotel (" + this.city + ")</h2>";
        markup += "<div class='hotelbody'><div id='description'><p>" + this.description + "</p><p><b>Price/Night: </b>" + this.price + "</p></div>";
        markup += "<div class='amenities'><div>";
        let count = 0;
        for (let amenity in this.amenities) {
            markup += "<p class='amenity'>" + amenity.toLocaleUpperCase();
            if (this.amenities[amenity] === true) {
                markup += " <span class='amenityspan'>&#10004</span>";
            } else {
                markup += " <span class='amenityspan'>&#10008;</span>";
            }
            markup += "</p>";
            if(count === 3){
                markup += "</div><div>";
            }
            count++;
        }
        markup += "</div></div>";
        markup += "<div class='contact'><h3>Contact</h3><p>"+this.country+ " - "+ this.address +"</p>";
        markup += "<p><b>E-Mail: </b>" + this.email + "</p>";
        markup += "<p><b>Phone: </b>" + this.phone + "</p>";
        markup += "<p><b>Website: </b>" + this.website + "</p></div>";
        markup += "</div>";
        markup += "<div class='imgs'><img width='250' src='"+this.images[0]+"' alt='"+this.name+"' />";
        markup += "<img width='250' src='"+this.images[1]+"' alt='"+this.name+"' />";
        markup += "<img width='250' src='"+this.images[2]+"' alt='"+this.name+"' /></div>";
        markup += "</div>";


        return markup;

    }
}