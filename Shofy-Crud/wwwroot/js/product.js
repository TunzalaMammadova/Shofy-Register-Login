"use strict"

let desc = document.querySelector(".description");
let info = document.querySelector(".information");
let rew = document.querySelector(".review");
let descList = document.querySelector(".desc-title ");
let infoList = document.querySelector(".info ");
let revList = document.querySelector(".rewievs ");
let leftLine = document.querySelector(".line-2");
let lineMenu = document.querySelector(".menu-line");
let rightLine = document.querySelector(".line-3");


desc.addEventListener("click", function () {
    descList.classList.remove("d-none");
    infoList.classList.add("d-none");
    revList.classList.add("d-none");
    this.style = "color:black";
    info.style = "color:#a0a2a4";
    rew.style = "color:#a0a2a4";
    leftLine.style = "display:block";
    lineMenu.style = "display:none";
    rightLine.style = "display:none";
})

info.addEventListener("click", function () {
    descList.classList.add("d-none");
    infoList.classList.remove("d-none");
    revList.classList.add("d-none");
    this.style = "color:black";
    desc.style = "color:#a0a2a4";
    rew.style = "color:#a0a2a4";
    lineMenu.style = "display:block";
    rightLine.style = "display:none";
    leftLine.style = "display:none";

})

rew.addEventListener("click", function () {
    descList.classList.add("d-none");
    infoList.classList.add("d-none");
    revList.classList.remove("d-none");
    this.style = "color:black";
    desc.style = "color:#a0a2a4";
    info.style = "color:#a0a2a4";
    rightLine.style = "display:block";
    leftLine.style = "display:none";
    lineMenu.style = "display:none";
})



let img1 = document.querySelector(".img-1");
let img2 = document.querySelector(".img-2");
let img3 = document.querySelector(".img-3");
let product1 = document.querySelector(".product-1");
let product2 = document.querySelector(".product-2");
let product3 = document.querySelector(".product-3");


img1.addEventListener("click", function () {
    product3.style = "display:block";
    product2.style = "display:none";
    product1.style = "display:none";
    this.style = "border: 1px solid black";
    img2.style = "border: none";
    img3.style = "border: none";
})

img2.addEventListener("click", function () {
    product2.style = "display:block";
    product1.style = "display:none";
    product3.style = "display:none";
    this.style = "border: 1px solid black";
    img3.style = "border: none";
    img1.style = "border: none";
})

img3.addEventListener("click", function () {
    product1.style = "display:block";
    product2.style = "display:none";
    product3.style = "display:none";
    img3.style = "border: 1px solid black";
    img2.style = "border: none";
    img1.style = "border: none";
})

img1.addEventListener("mouseover", function (){
    img1.style = "border: 1px solid black";
})

img2.addEventListener("mouseover", function (){
    img2.style = "border: 1px solid black";
})

img3.addEventListener("mouseover", function (){
    img3.style = "border: 1px solid black";
})







