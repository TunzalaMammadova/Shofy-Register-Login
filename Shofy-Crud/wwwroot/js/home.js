"use strict";


let select = document.querySelector(".select-category");
let selectList = document.querySelector(".select-list");
let selectIcon = document.querySelector(".select-category i");

select.addEventListener("click", function () {
    selectList.classList.toggle("d-none");
    selectIcon.classList.toggle("open");
})

let category = document.querySelector(".all-category");
let categoryList = document.querySelector(".all-menu");
let categoryIcon = document.querySelector(".all-category i");

category.addEventListener("click", function () {
    categoryList.classList.toggle("d-none");
    categoryIcon.classList.toggle("open");
})


let newList = document.querySelector(".new");
let featuredList = document.querySelector(".featured");
let topList = document.querySelector(".top");
let newPage = document.querySelector(".page-1");
let featuredPage = document.querySelector(".page-2");
let topPage = document.querySelector(".page-3");
let newLine = document.querySelector(".line1");
let fLine = document.querySelector(".line2");
let topLine = document.querySelector(".line3");



newList.addEventListener("click", function () {
    newPage.classList.remove("d-none");
    topPage.classList.add("d-none");
    featuredPage.classList.add("d-none");
    newLine.classList.remove("d-none");
    fLine.classList.add("d-none");
    topLine.classList.add("d-none");
})

featuredList.addEventListener("click", function () {
    featuredPage.classList.remove("d-none");
    newPage.classList.add("d-none");
    topPage.classList.add("d-none");
    newLine.classList.add("d-none");
    fLine.classList.remove("d-none");
    topLine.classList.add("d-none");
})

topList.addEventListener("click", function () {
    newPage.classList.add("d-none");
    topPage.classList.remove("d-none");
    featuredPage.classList.add("d-none");
    newLine.classList.add("d-none");
    fLine.classList.add("d-none");
    topLine.classList.remove("d-none");
})



let leftIcon = document.querySelector(".left-right .left");
let rightIcon = document.querySelector(".left-right .right");
let leftPoint = document.querySelector(".point .left");
let centerPoint = document.querySelector(".point .center");
let rightPoint = document.querySelector(".point .right");
let slider1 = document.querySelector(".slider-1");
let slider2 = document.querySelector(".slider-2");
let slider3 = document.querySelector(".slider-3");




rightIcon.addEventListener("click", function () {
    
})