const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const like = document.querySelectorAll(".like");

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

let sendData = () => {
    // event.preventDefault()
    cartDetails.push({
        Name: namep.innerText,
        Price: price.innerText,
        Size: size.value,
        Quantity: Quantity.value,
        Image: image.getAttribute('src')
    })
    var userdata = JSON.stringify(cartDetails);
    localStorage.setItem("userData", userdata)

    alert("You successfully added the product to cart")
}




// console.log(cartDetails);

function buy(){
    alert("You buy the item")
}
function cart() {
    var Img = document.querySelector(".cimg");
    var Name = document.querySelector(".cname");
    var Price = document.querySelector(".cprice");
    var Qtt = document.querySelector(".cqt");
    var Csize = document.querySelector(".csize ")
    var Buybtn = document.querySelector(".ccart ");
    let Listitem = document.querySelector(".listitem")
    if (localStorage.getItem("userData") !== null) {
        var getdata = JSON.parse(localStorage.getItem("userData"))
        
    }
    // console.log(getdata);
    // const arr = [{
    //     Image:"img/products/f1.jpg",
    //     Name:"Men's Fashion T-Shirt",
    //     Price:"$139.00",
    //     Quantity:"1",
    //     Size: "XXL",
    // }]
    
    // event.preventDefault()
    // let data = 0;
    getdata.forEach((e)=>{
        let itemlist =  
            `<div class="single-pro-image pg">
                    <img src="${e.Image}" width="100%" id="mainimg" class="cimg">
                <div class="single-pro-details cs">
                    <h6>Home / T-Shirt</h6>
                    <h4 class="cname">${e.Name}</h4>
                    <h2 class="cprice">Price:${e.Price}</h2>
                    <select class="size csize">
                    <option>${e.Size}</option>
                    </select>
                    <input type="number" value="${e.Quantity}" class="cqt">
                    <button class="normal ccart" onclick ="buy()">Buy Now</button>
                </div>
            </div>
            `
        Listitem.innerHTML += itemlist
    })
    // Img.setAttribute("src",getdata[0].Image)
//     Name.innerHTML = getdata[0].Name;
//     Price.innerHTML = getdata[0].Price;
//     Qtt.setAttribute("value",getdata[0].Quantity)
//    let op =  document.createElement("option")
//    op.innerHTML = getdata[0].Size;
//    Csize.append(op)
}
cart();

