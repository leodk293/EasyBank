const imghbg = document.querySelector("img[alt='HBG']")
const nav = document.querySelector(".navigation")
const body = document.querySelector("body")
let index = true

imghbg.addEventListener("click",()=>{
    if(index){
        imghbg.src = "images/icon-close.svg"
        nav.classList.add("move")
        //nav.style.display = "block"
        body.style.backgroundColor = "rgba(0, 0, 0, 0.27)"
        index = false
    }
    else{
        imghbg.src = "images/icon-hamburger.svg"
        //nav.style.display = "none"
        nav.classList.remove("move")
        body.style.backgroundColor = "#fff"
        index = true
        
    }
})