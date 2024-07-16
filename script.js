// For closing&opning navbar in mobile screeen

const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

// console.log(like);
if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove("active");
    })
}

// For adding the like button

const like = document.querySelectorAll(".like");

like.forEach(element => {
    element.addEventListener('click', () => {
        element.style.color = "red"
        // console.log(element);
        alert("You Like the Product ❤️")
    })
});

var namep = document.querySelector(".name")
var price = document.querySelector(".price")
var size = document.querySelector(".size")
var Quantity = document.querySelector(".qt")
var cartBtn = document.querySelector(".cart")
var image = document.querySelector(".pro-image")

// console.log(cartBtn);

var cartDetails = [];
// var userdata = [];

let sendData = () => {

    cartDetails.push({
        Name: namep.innerText,
        Price: price.innerText,
        Size: size.value,
        Quantity: Quantity.value,
        Image: image.getAttribute('src')
    })
    var userdata = JSON.stringify(cartDetails);
    // console.log(userdata);
    localStorage.setItem("userData", userdata)

    alert("You successfully added the product to the cart 🛒")
}

// console.log(cartDetails);

function buy() {
    alert("You successfully buy an item 🛍️")
}

var getdata = [];
function cart() {

    // For static product added to the cart
    // var Img = document.querySelector(".cimg");
    // var Name = document.querySelector(".cname");
    // var Price = document.querySelector(".cprice");
    // var Qtt = document.querySelector(".cqt");
    // var Csize = document.querySelector(".csize ")
    // var Buybtn = document.querySelector(".ccart ");
    // const arr = [{
    //     Image:"img/products/f1.jpg",
    //     Name:"Men's Fashion T-Shirt",
    //     Price:"$139.00",
    //     Quantity:"1",
    //     Size: "XXL",
    // }]
    // Img.setAttribute("src",getdata[0].Image)
    //     Name.innerHTML = getdata[0].Name;
    //     Price.innerHTML = getdata[0].Price;
    //     Qtt.setAttribute("value",getdata[0].Quantity)
    //    let op =  document.createElement("option")
    //    op.innerHTML = getdata[0].Size;
    //    Csize.append(op)

    let Listitem = document.querySelector(".listitem")
    if (localStorage.getItem("userData") !== null) {
        getdata = JSON.parse(localStorage.getItem("userData"))
        cartDetails = getdata
    }
    // console.log(getdata);


    getdata.forEach((e, index) => {
        let itemlist =
            `<div class="single-pro-image pg" data-id="${index}">
                    <img src="${e.Image}" width="100%" id="mainimg" class="cimg">
                <div class="single-pro-details cs">
                    <h6>Home / T-Shirt</h6>
                    <h4 class="cname">${e.Name}</h4>
                    <h2 class="cprice">Price:${e.Price}</h2>
                    <select class="size csize">
                    <option>${e.Size}</option>
                    </select>
                    <input type="number" value="${e.Quantity}" class="cqt">
                    </div>
                    <button class="ccart" onclick ="buy()">Buy Now</button>
                    <button class="remove-btn" onclick ="rvBtn(${index})" >Remove</button>
            </div>
            `
        Listitem.innerHTML += itemlist
    })
}
cart();

// For removing the item int the cart

function rvBtn(index) {
    if (confirm("Are you sure want to delete? ⚠️ ")) {
        getdata.splice(index, 1)
        localStorage.setItem("userData", JSON.stringify(cartDetails))
        cartDetails = getdata
        // console.log(cartDetails)
        // cart()
    }
}
