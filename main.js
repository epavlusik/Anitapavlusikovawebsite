$(document).ready(function(){
    var classicb = true;
    var cssbo = true;
    var comicsb = true;
    var wineb = true;
    var csswine = true;
    $(window).scroll(function(){
        if ($(window).scrollTop() > 450) {
            if(classicb) {
            bobi();
            }
        }
        if ($(window).scrollTop() > 850) {
            if(comicsb) {
            zhora2();}
        }
        if ($(window).scrollTop() > 1400) {
            if(wineb) {
            robi(); }
        }
        if ($(window).scrollTop() > 1600) {
            if(csswine){
            cssback();  }
        }
      });
    function bobi() {
    $(".portfolio").animate({left: "1000px"},"slow");
    classicb = false;
}
    function zhora2() {
    $(".animate").animate({bottom: "-350px"},"slow"); 
    comicsb = false;
    }  
    function robi() {
    $(".wine-boxes").animate({left: "1000px"},"slow"); 
    wineb = false;
}
    function cssback() {
    $(".wine-boxes").css("margin", "0 auto");  
    $(".wine-boxes").css("padding", "3rem 2.4rem");  
    $(".wine-boxes").css("position", "static");
    $(".portfolio").css("margin", "0 auto");  
    $(".portfolio").css("padding", "3rem 2.4rem");  
    $(".portfolio").css("position", "static"); 
    cssbo = false;
    csswine = false;
    }
});

// Select Element function
const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');
let contact = selectElement('.nav-item-contact');

menuToggler.addEventListener('click', function() {
    body.classList.toggle('open');
});

contact.addEventListener('click', function() {
    body.classList.toggle('open');
});
function expandit(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }
