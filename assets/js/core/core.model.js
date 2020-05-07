"use strict";
import City from "../classes/class.city.js?v=0.11";
import Hotel from "../classes/class.hotel.js?v=0.11";

const cities_json = "./cities.json";
const hotels_json = "./hotels.json";

export default class Core_Model {

    constructor() {

    }

    getCities() {
        return new Promise(resolve => {
            $.getJSON(cities_json, function (data) {
                let cities = [];
                for (let city of data) {
                    cities.push(new City(city));
                    resolve(cities);
                }
            });
        });
    }


    //TODO: Bekommen wir noch
    getCityBy(key, value) {
        return new Promise(resolve => {
            $.getJSON(cities_json, function (data) {
                for (let city of data) {
                    if (city[key] === value) {
                        resolve(new City(city));
                    }
                }
            });
        });
    }

    async getCity(id) {
        return (await this.getCityBy("_id", id));
    }

    getHotels() {
        return new Promise(resolve => {
            $.getJSON(hotels_json, function (data) {
                let hotels = [];
                for (let hotel of data) {
                    hotels.push(new Hotel(hotel));
                    resolve(hotels);
                }
            });
        });
    }

    getHotelOfCity(city) {
        return new Promise(resolve => {
            $.getJSON(hotels_json, function (data) {
                let hotels = [];
                for (let hotel of data) {
                    if (hotel.city === city)
                        hotels.push(new Hotel(hotel));
                    resolve(hotels);
                }
            });
        });
    }


    getHotel(id) {
        return new Promise(resolve => {
            $.getJSON(hotels_json, function (data) {
                for (let hotel of data) {
                    if (hotel["_id"] == id) {
                        resolve(new Hotel(hotel));
                    }
                }
            });
        });
    }
}