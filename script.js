const buttonFooter = document.querySelector("#buttonFooter");
buttonFooter.addEventListener("click", function(){
    return location.href = '#section1';
})

let toogle = document.querySelector(".foto");
toogle.addEventListener("click", function(){
    if (toogle.src == "https://eddyguarinello.github.io/Eddy-Project/foto%20eddy2.jpg"){
      return toogle.src = "https://eddyguarinello.github.io/Eddy-Project/eddy%20pixel.png";
    }else{
     return toogle.src = "https://eddyguarinello.github.io/Eddy-Project/foto%20eddy2.jpg";
    }
})
