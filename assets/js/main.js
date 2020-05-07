"use strict";
import Core_App from './core/core.app.js?v=0.11';
import LoginView from './views/view.login.js?v=0.11';
import StartpageView from './views/view.startpage.js?v=0.11';
import CityView from "./views/view.city.js?v=0.11";
import HotelView from "./views/view.hotel.js?v=0.11";

//First route is Startpage.
let routes = [
    new StartpageView("/", "startpage"),
    new LoginView("/login", "login"),
    new CityView("/city", "city"),
    new HotelView("/hotel", "hotel")
];

const C_Holidays_App = new Core_App("http://127.0.0.1/c-holidays_v4/", "assets/templates", routes, "de","en");

