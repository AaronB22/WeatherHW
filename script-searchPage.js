const backBtn =document.querySelector("#backBtn");
backBtn.addEventListener("click",backFunction);

function backFunction(){
    window.location.href="homepage.html"
}
getWeather()