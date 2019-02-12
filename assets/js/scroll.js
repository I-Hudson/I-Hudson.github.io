"use strict"

$(document).ready( function() { 
    
    $('a[href*=#]:not([href=#])').click(function() {
        var target = $(this.hash);
        if(window.location.pathname != "/"){
            console.log(window.location.origin);
            var newUrl = window.location.origin + "/" + target.selector;
            window.location = newUrl;
            return;
        }
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 800);
            return false;
        }
    });
 });