"use strict";

let basket = [];

if (JSON.parse(localStorage.getItem("basket")) == null) {
    localStorage.setItem("basket", JSON.stringify(basket));

} else {

    basket = JSON.parse(localStorage.getItem("basket"));
}


function checkCartForShowDatas(basket) {
    let cartAlert = document.querySelector(".cart-alert");
    let cartTable = document.querySelector(".basket-area");
    if (basket.length == 0) {
        cartAlert.classList.remove("d-none");
        cartTable.classList.add("d-none");

    } else {
        cartAlert.classList.add("d-none");
        cartTable.classList.remove("d-none");
    }
}

checkCartForShowDatas(basket);

getbasketCount(basket);

function getbasketCount(arr) {
    let basketCount = 0;
    if (arr.length != 0) {
        for (const item of arr) {
            basketCount += item.count;
        }
    }

    document.querySelector(".header-down-right .wish-count").innerText = basketCount;
}


function getbasketDatas() {
    let tableBody = document.querySelector("tbody");

    let datas = "";
    basket.forEach(product => {

        datas += `<tr>
        <td> <img src="${product.image}" style="width: 100px; height: 100px;" alt="">
        ${product.name}
        </td>
        <td>${product.price} $</td></span>
        <td><button>Add To Cart</button</td>
        <td><p class="delete-icon" data-id="${product.id}"><img src="./assets/images/del.svg" alt="">Remove<p></i></td>
        </tr>`
    });

    tableBody.innerHTML = datas;


    document.querySelectorAll(".delete-icon").forEach(deleteIcon => {
        deleteIcon.addEventListener("click", function () {
            basket = basket.filter(product => product.id != this.getAttribute("data-id"));
           
            localStorage.setItem("basket", JSON.stringify(basket));
            this.parentNode.parentNode.remove();

            checkCartForShowDatas(basket);
            getbasketCount(basket);
        })
    })
}

getbasketDatas();

