let nav_list = document.getElementById("nav-lists");
let donut_img = document.getElementById("main-image")
let donut_container = document.getElementById("donut-container")


function show() {
    nav_list.classList.add("_Menus-show")
    donut_container.removeChild(donut_img)
    console.log(donut_img)
}

function hide(){
    nav_list.classList.remove("_Menus-show")
    donut_container.appendChild(donut_img)
}