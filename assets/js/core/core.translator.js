"use strict";
import Core_Utils from "./core.utils.js?v=0.11";
import Core_App from "./core.app.js?v=0.11";
let Core_Language = {};
export default class Core_Translator{
    constructor(...languages){
        this.allowedLanguages = languages;

        this.currentLanguage =  window.Core.utils.getCookie("language") || window.Core.system.defaultLanguage;
        console.log("current language: "+this.currentLanguage);


        // window.Core.utils.getCookie("language") || (gehört vor window.Core... in der vorherigen Zeile

       $(document).on("click", "#german", function () {
           window.Core.utils.setCookies("language", "de", 360);
           window.Core.translator.currentLanguage = 'de';
           window.dispatchEvent(new HashChangeEvent("hashchange"));
           console.log(window.Core.translator.currentLanguage);
           //window.Core.router.hasChanged();
           //location.reload(true);

        });

        $(document).on("click", "#english", function () {
            window.Core.utils.setCookies("language", "en", 360);
            window.Core.translator.currentLanguage = 'en';
            window.dispatchEvent(new HashChangeEvent("hashchange"));
            console.log(window.Core.translator.currentLanguage);
            //window.Core.router.hasChanged();
            //location.reload(true);
        });
    }


    t(key, language = this.currentLanguage){
        //TODO: Using disallowed Language?
        return(typeof Core_Language[language][key] === "undefined" ? "missing translation: "+key+" --" : Core_Language[language][key]);
    }
}

Core_Language.en = {
    logout : "logout",
    login : "login",
    username : "username",
    password : "password",
    citydescription : "Citydescription",
    hoteldescription : "Hoteldescription",
    Name : "Name",
    Country : "Country",
    Nickname : "Nickname",
    Price : "Price",
    Description : "Description",
    Adress : "Adress",
    Phone : "Phone",
    Website : "Website",
    Amenities : "Amenities"
};

Core_Language.de = {
    logout : "Ausloggen",
    login : "Einloggen",
    username : "Benutzername",
    password : "Passwort",
    citydescription : "Stadtbeschreibung",
    hoteldescription : "Hotelbeschreibung",
    Name : "Name",
    Country : "Land",
    Nickname : "Spitzname",
    Price : "Preis",
    Description: "Beschreibung",
    Adress: "Adresse",
    Phone : "Telefon",
    Website: "Webseite",
    Amenities: "Ausstattung"

};

Core_Language.fr = {
    logout : "Se deconnecter",
    login : "Se connecter",
    username : "nom d'utilisateur",
    password : "mot de passe",
    citydescription : "Description de la ville",
    hoteldescription : "Description de l'Hotel",
    Name : "Nom",
    Country : "Pays",
    Nickname : "Surnom",
    Price : "Prix",
    Description : "Description"
};