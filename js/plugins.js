/*global $, console*/


$(document).ready(function () {
   
    'use strict';
    
    $('.carousel').carousel({
        
        interval: 3000
        /*
        pause: 'mouseenter',
        wrap: false,
        keyboard: false
        */
    });
    

    // Show Color Option Div When Click on The Gear
    // My Code
    
    $('.gear-check').click(function () {
        
        $('.option-box').toggleClass('hide-box').addClass('show-box');

    });
    
    
/////// Zero Code
    
    /**
    $('.gear-check').click(function () {
        
        $('.color-option').fadeToggle();
    });
    
    **/
    
   
    // Change Theme Color On Click
    
    var colorLi = $(".color-option ul li");
    
    colorLi.eq(0).css("backgroundColor", "#F24C27").end()
        .eq(1).css("backgroundColor", "#1a7acb").end()
        .eq(2).css("backgroundColor", "#dc9d2b").end()
        .eq(3).css("backgroundColor", "#8C4E06").end()
        .eq(4).css("backgroundColor", "#037E8C").end()
        .eq(5).css("backgroundColor", "#00A388");
    
    colorLi.click(function () {
        
        $("link[href*='them']").attr("href", $(this).attr('data-value'));
        
    });
    

    
    
// Loading Screen
    
    /*
    
    $('.loading-overlay .sk-circle').fadeOut(1000, function () {
        
        $('body').css('overflow', 'auto');
        
        $(this).parent().fadeOut(1000, function () {
            
            $(this).remove();
        });
    });

    */
    
    $('.loading-outer .loadr, .link').fadeOut(1000, function () {
        
        $('body').css('overflow', 'auto');
        $(this).parent().fadeOut(1000, function () {
            
            $(this).remove();
            
        });
    });
    
// Scroll To Top 

    var scrollButton = $('#scroll-top');
    
    $(window).scroll(function () {
        
        // IF (المختصرة)
        $(this).scrollTop() >= 800 ? scrollButton.fadeIn() : scrollButton.fadeOut();

        /*
        if ($(this).scrollTop() >= 800) {
            
            scrollButton.fadeIn();
            
        } else {
            
            scrollButton.fadeOut();
        }
        */
        
    });
        
    scrollButton.click(function () {
        
        $('html, body').animate({scrollTop: 0}, 900);
        
    });
    
    
    // Nice Scroll Plugins
    
    
    $("html").niceScroll();
         
});





