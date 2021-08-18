const buttonFooter = document.querySelector("#buttonFooter");
buttonFooter.addEventListener("click", function(){
    return location.href = '#section1';
})

let toggle = document.querySelector(".foto");
let toggleb = document.querySelector("#pixel");

toggleb.classList.toggle("pixel");

toggle.addEventListener("click", function(){
   toggle.classList.remove("foto");
   toggle.classList.add("toggle");
   toggleb.classList.remove("pixel");
})
toggleb.addEventListener("click", function(){
    toggleb.classList.add("pixel");
    toggle.classList.remove("toggle");
    toggle.classList.add("foto");
})