"use strict";
/***************************************************
 *  A Collectorclass for several useful functions.
 *  Contains functions that are general and usable
 *  in different apps.
 *
 *  Neuwersch, 2020-03-15
 ***************************************************/
export default class Core_Utils {
    constructor() {

    }

    setCookies(name, value, days) {
        //TODO: set Cookie
        let d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    getCookie(name) {
        //TODO: get Cookie
        let name1 = name + "=";
        let cookieArray = document.cookie.split(';');
        for (let i = 0; i < cookieArray.length; i++) {
            let c = cookieArray[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name1) == 0) {
                return c.substring(name1.length, c.length);
            }
        }
        return "";
    }

    deleteCookie(name) {
        //TODO: delete Cookie
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';

    }

    isEmpty(variable){
        if(Array.isArray(variable))
            return(variable.length == 0);
        else if(typeof variable === "object")
            return(Object.entries(variable).length === 0 && variable.constructor === Object);
        else
            return (typeof variable === "undefined" || variable == null || variable === 0);
    }

}