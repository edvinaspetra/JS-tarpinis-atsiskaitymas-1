"use strict"


// NAV burger toggle
var burger = document.getElementById("burger");
var sideMenu = document.getElementById("side-menu");

burger.addEventListener("click", function(){
    sideMenu.classList.toggle("width");
    this.classList.toggle("rotateZ")
});

window.addEventListener("resize", function(){
    if(window.innerWidth > 860){
    sideMenu.classList.remove("width");
    burger.classList.remove("rotateZ")
}
});

window.addEventListener("click", function(e){
    if(e.target.id !== "burger" && e.target.id !== "side-menu"){
    sideMenu.classList.remove("width");
    burger.classList.remove("rotateZ")
}
});







// Section-3 buttons
function changeContent(index, id){
    var sections = document.querySelectorAll(".sec");
    var buttons = document.querySelectorAll("#section-3 .allButtons button");

    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove("display");  
        sections[i].classList.remove("transform");  
        buttons[i].classList.remove("active");
    
    }
    
    var element = document.getElementById(id)
    element.classList.add("display");
    buttons[index].classList.add("active");


    setTimeout(function(){
        element.classList.add("transform");
    }, 100)

}



// Section-3 pics bbuttons
// Add/remove button styles

var buttonOne = document.getElementsByClassName("pic")[0];
var buttonTwo = document.getElementsByClassName("pic")[1];
var buttonThree = document.getElementsByClassName("pic")[2];

// var overlays = document.getElementById("overlay");


buttonOne.addEventListener("click", function(){
    if(!overlay[0].classList.contains("buttonStyle1")){
        overlay[0].classList.add("buttonStyle1");
        overlay[1].classList.remove("buttonStyle2");
        overlay[2].classList.remove("buttonStyle3");
    } 
});

buttonTwo.addEventListener("click", function(){
    if(!overlay[1].classList.contains("buttonStyle2")){
        overlay[1].classList.add("buttonStyle2");
        overlay[0].classList.remove("buttonStyle1");
        overlay[2].classList.remove("buttonStyle3");
    } 
});


buttonThree.addEventListener("click", function(){
    if(!overlay[2].classList.contains("buttonStyle3")){
        overlay[2].classList.add("buttonStyle3");
        overlay[0].classList.remove("buttonStyle1");
        overlay[1].classList.remove("buttonStyle2");
    } 
});



