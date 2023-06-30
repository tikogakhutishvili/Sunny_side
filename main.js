let show = document.getElementById("menu")
let btn = document.getElementById("menu1")
let hide = document.getElementById("hone")
let arrow = document.getElementById("arrow")
btn.onclick = function () {  
    show.classList.toggle('show')
    hide.classList.toggle('hide')
    arrow.classList.toggle("hide")
}

