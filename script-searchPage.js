const backBtn =document.querySelector("#backBtn");
backBtn.addEventListener("click",backFunction);
const searchBtnSP=document.querySelector("#btnSearch")
searchBtnSP.addEventListener("click",getWeather)

function backFunction(){
    window.location.href="homepage.html"
}
