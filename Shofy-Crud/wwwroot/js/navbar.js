"use strict"

let lang = document.querySelector(".language");
let currency = document.querySelector(".currency");
let set = document.querySelector(".setting");
let langList = document.querySelector(".language-list");
let currencyList = document.querySelector(".currency-list");
let settingList = document.querySelector(".setting-list");
let mainArea = document.querySelector("main");


lang.addEventListener("click", function (e) {
    e.preventDefault();
    langList.classList.toggle("d-none");
    currencyList.classList.add("d-none");
    settingList.classList.add("d-none");
})

currency.addEventListener("click", function (e) {
    e.preventDefault();
    currencyList.classList.toggle("d-none");
    langList.classList.add("d-none");
    settingList.classList.add("d-none");
})

set.addEventListener("click", function (e) {
    e.preventDefault();
    settingList.classList.toggle("d-none");
    currencyList.classList.add("d-none");
    langList.classList.add("d-none");
})


let productList = document.querySelector(".product-list");
let productPage = document.querySelector(".product-page");

productList.addEventListener("mouseover", function () {
    productPage.classList.remove("d-none");
})

mainArea.addEventListener("mouseout", function () {
    productPage.classList.add("d-none");
})

