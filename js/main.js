'use strict';
let blockBody = document.querySelector('body');

$(document).ready(function(){
    $('.burger').click(function(event){
        $('.burger , .nav').toggleClass('active');
    });
    $('.scroll').click(function(event){
        window.scrollTo({
            top: 1000,
            lert: 0,
            behavior: "smooth"
        });
    });
    $('#ABOUT').click(function(event){
        window.scrollTo({
            top: 0,
            lert: 0,
            behavior: "smooth"
        });
    });
    $('#PROJECTS').click(function(event){
        window.scrollTo({
            top: 1000,
            lert: 0,
            behavior: "smooth"
        });
    });
    $('#NEWS').click(function(event){
        window.scrollTo({
            top: 2850,
            lert: 0,
            behavior: "smooth"
        });
    });
    $('#CONTACT').click(function(event){
        window.scrollTo({
            top: 10000,
            lert: 0,
            behavior: "smooth"
        });
    });
    $('#project-btn-1').click(function(event){
        $('.more-details-1').toggleClass('off');
        $('.more-details-1').toggleClass('on');
    });
    $('#project-btn-2').click(function(event){
        $('.more-details-2').toggleClass('off');
        $('.more-details-2').toggleClass('on');
    });
    $('#btn-3').click(function(event){
        $('#grid-items-more').toggleClass('grid-off');
        $('#grid-items-more').toggleClass('grid-on');
      });
    $('.wrap').click(function(event){
        $(this).parents(this).toggleClass('mod-double-column');
        $('#big-grid').toggleClass('grid-items__item_double-column');
        $('#big-grid').toggleClass('grid-items__item_double-row');
    });
})


let scrollNow;
window.addEventListener('scroll', function() {
    scrollNow = window.pageYOffset;
    if(scrollNow > 600 ){
        $('.header').addClass('heder_bg');
        $('.header').removeClass('container');
    } else{
        $('.header').removeClass('heder_bg');
        $('.header').addClass('container');
    }
  });

  let gridItem = document.querySelectorAll('#grid-item');
