const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const like = document.querySelectorAll(".like")

// console.log(like);
if (bar){
    bar.addEventListener("click", ()=>{
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove("active");
  })
}


like.forEach(element => {
    element.addEventListener('click',()=>{
        element.style.color = "red"
        // console.log(element);
        alert("You Like the Product ❤️")
    })
});
