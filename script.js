const buttonFooter = document.querySelector("#buttonFooter");
buttonFooter.addEventListener("click", function(){
    return location.href = '#section1';
})

let cardGame = document.querySelector("#cardGuess");
cardGame.addEventListener('click', function(){
   return location.href = 'https://eddyguarinello.github.io/ProjetoCardGuess/'
})



function pixelEddy(){
    pixel.src="pixel.png"
    pixel.id="pixel"
    pixel.classList="toggle"
    pixel.alt="Eddy Pixel"
    pixel.title="Eddy Pixel"
    fotos.appendChild(pixel);
}
let pixel = document.createElement("img");
let fotos = document.querySelector(".wrapFotos");

pixelEddy()


let eddy = document.querySelector('#foto')


eddy.addEventListener("click", function(){
    pixel.classList.remove("toggle")
    pixel.classList="foto"
    eddy.classList="toggle"
})

pixel.addEventListener("click", function(){
    eddy.classList.remove("toggle")
    eddy.classList="foto"
    pixel.classList="toggle"
})  


