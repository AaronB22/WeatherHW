const userSearch =document.querySelector('.userInput')
const backBtn =document.querySelector("#backBtn");
const searchBtnSP=document.querySelector("#btnSearch")
searchBtnSP.addEventListener("click",getWeather)
const unitSwitch=document.querySelector('#unitButton')
unitSwitch.addEventListener("click",changeUnits)
const histArray=[histOne,histTwo,histThree,histFour,histFive,histSix,histSeven,histEight]
const fDate=[d0,d1,d2,d3,d4]
const fTemp=[t0,t1,t2,t3,t4]
const fImg=[i0,i1,i2,i3,i4]
const fHum=[hu0,hu1,hu2,hu3,hu4]
let nonFormatDate =moment();
$('').text(nonFormatDate.format("LT"));
const month=moment(nonFormatDate).format("MMM")
const day=moment(nonFormatDate).format("D")
const date=moment(nonFormatDate).format("MMM Do YYYY")
const dayParse = Number(day)
let mesUnits=null
let unitTemp=null
let unitSpeed=null

function changeUnits(){
    document.getElementById("test").classList.add("myClassTest")
    if (unitSwitch.textContent==="Metric"){
        unitSwitch.textContent="Imperial"
        if (userSearch.value!==null){
        getWeather()}
     }
    else if (unitSwitch.textContent=== "Imperial"){
        unitSwitch.textContent="Metric"
        if (userSearch.value!==null){
            getWeather()}
   }
    
}

function unitType(){
    if (unitSwitch.textContent=== "Imperial"){
        mesUnits="imperial"
        unitTemp="F"
        unitSpeed="mph"
    }
    else if (unitSwitch.textContent==="Metric"){
        mesUnits="metric"
        unitTemp="C"
        unitSpeed="m/s"
        
    }
    
}


histArray[0].textContent=localStorage.getItem("weStorage0")
histArray[1].textContent=localStorage.getItem("weStorage1")
histArray[2].textContent=localStorage.getItem("weStorage2")
histArray[3].textContent=localStorage.getItem("weStorage3")
histArray[4].textContent=localStorage.getItem("weStorage4")
histArray[5].textContent=localStorage.getItem("weStorage5")
histArray[6].textContent=localStorage.getItem("weStorage6")
histArray[7].textContent=localStorage.getItem("weStorage7")
function storage(){
    console.log(userSearch.value)
    if (userSearch.value===""){
        alert("Must enter valid City Name")
        return
    }
    localStorage.setItem("weStorage7",(histArray[6].textContent))
    localStorage.setItem("weStorage6",(histArray[5].textContent))
    localStorage.setItem("weStorage5",(histArray[4].textContent))
    localStorage.setItem("weStorage4",(histArray[3].textContent))
    localStorage.setItem("weStorage3",(histArray[2].textContent))
    localStorage.setItem("weStorage2",(histArray[1].textContent))
    localStorage.setItem("weStorage1",(histArray[0].textContent))
    localStorage.setItem("weStorage0",(userSearch.value))
    histArray[0].textContent=localStorage.getItem("weStorage0")
    histArray[1].textContent=localStorage.getItem("weStorage1")
    histArray[2].textContent=localStorage.getItem("weStorage2")
    histArray[3].textContent=localStorage.getItem("weStorage3")
    histArray[4].textContent=localStorage.getItem("weStorage4")
    histArray[5].textContent=localStorage.getItem("weStorage5")
    histArray[6].textContent=localStorage.getItem("weStorage6")
    histArray[7].textContent=localStorage.getItem("weStorage7")
}




fDate[0].textContent =month +" "+ (dayParse + 1)
fDate[1].textContent =month +" "+ (dayParse + 2)
fDate[2].textContent =month +" "+ (dayParse + 3)
fDate[3].textContent =month +" "+ (dayParse + 4)
fDate[4].textContent =month +" "+ (dayParse + 5)


function getWeather(){
    if (userSearch.value===""){
        alert("Must enter valid City Name")
        return
    }
    storage()
    unitType()
    const weatherKey="c80f9a4fde963804b68e5e32b0e539de";
    const geoCodingUrl='http://api.openweathermap.org/geo/1.0/direct?q='+userSearch.value+'&limit&appid='+ weatherKey 
    document.getElementById("mainCity").textContent= userSearch.value +" "+ date
    fetch(geoCodingUrl)
    .then(function (response){
        
        response.json()
        .then(function(data){
            console.log(data)
            
            let lat= data[0].lat;
            let lon= data[0].lon;
            
            const weatherURL = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units='+mesUnits+'&appid='+ weatherKey
            console.log(weatherURL)
            
            fetch(weatherURL)
            
            .then (function (weatherResponse){
                weatherResponse.json()
                .then(function(weatherData){
                    console.log(weatherData)
                    const temp = weatherData.daily[0].temp.day
                    document.getElementById('tempMain').textContent="temperature "+ temp+ unitTemp
                    document.getElementById('humMain').textContent='humidity '+ weatherData.daily[0].humidity +"%"
                    document.getElementById('windMain').textContent="Wind Speed " +weatherData.daily[0].wind_speed + unitSpeed
                    document.getElementById('uvMain').textContent="UVI =" +weatherData.daily[0].uvi
                    document.getElementById("uvMain").style.display="block"
                    console.log(weatherData.daily[0].clouds)
                        if (weatherData.daily[0].uvi<3){
                            console.log("testuv1")
                            document.getElementById('uvMain').style.backgroundColor="green"
                        }
                        if (weatherData.daily[0].uvi>3 && weatherData.daily[0].uvi<5){
                            console.log("testuv2")
                            document.getElementById('uvMain').style.backgroundColor="yellow"
                        }
                        if (weatherData.daily[0].uvi>5 && weatherData.daily[0].uvi<7){
                            console.log("testuv3")
                            document.getElementById('uvMain').style.backgroundColor="orange"
                        }
                        if (weatherData.daily[0].uvi>7 && weatherData.daily[0].uvi<10){
                            console.log("testuv4")
                            document.getElementById('uvMain').style.backgroundColor="red"
                        }
                        if (weatherData.daily[0].uvi>11){
                            console.log("testuv5")
                            document.getElementById('uvMain').style.backgroundColor="purple"
                        }
                     if (weatherData.daily[0].clouds<33){
                        document.getElementById("mainImg").classList.add("fa-sun")
                     }
                     if (weatherData.daily[0].clouds>33 && weatherData.daily[0].clouds<66 ){
                        document.getElementById("mainImg").classList.add("fa-cloud-sun")
                     }
                     if (weatherData.daily[0].clouds>66 ){
                         console.log("cloudTest")
                        document.getElementById("mainImg").classList.add("fa-cloud")
                    }

                    if (weatherData.daily[1].clouds<33){
                        fImg[0].classList.add("fa-sun")
                     }
                     if (weatherData.daily[1].clouds>33 && weatherData.daily[1].clouds<66 ){
                        fImg[0].classList.add("fa-cloud")
                     }
                     if (weatherData.daily[1].clouds>66 ){
                         console.log("cloudTest")
                        fImg[0].classList.add("fa-cloud-sun")
                    }

                    if (weatherData.daily[2].clouds<33){
                        fImg[1].classList.add("fa-sun")
                     }
                     if (weatherData.daily[2].clouds>33 && weatherData.daily[2].clouds<66 ){
                         
                        fImg[1].classList.add("fa-cloud-sun")
                     }
                     if (weatherData.daily[2].clouds>66 ){
                         console.log("cloudTest")
                        fImg[1].classList.add("fa-cloud")
                    }

                    if (weatherData.daily[3].clouds<33){
                        fImg[2].classList.add("fa-sun")
                     }
                     if (weatherData.daily[3].clouds>33 && weatherData.daily[3].clouds<66 ){
                        fImg[2].classList.add("fa-cloud-sun")
                     }
                     if (weatherData.daily[3].clouds>66 ){
                         console.log("cloudTest")
                        fImg[2].classList.add("fa-cloud")
                    }

                    if (weatherData.daily[4].clouds<33){
                        fImg[3].classList.add("fa-sun")
                     }
                     if (weatherData.daily[4].clouds>33 && weatherData.daily[4].clouds<66 ){
                        fImg[3].classList.add("fa-cloud-sun")
                
                     }
                     if (weatherData.daily[4].clouds>66 ){
                         console.log("cloudTest")
                        fImg[3].classList.add("fa-cloud")
                    }
                    if (weatherData.daily[5].clouds<33){
                        fImg[4].classList.add("fa-sun")
                     }
                     if (weatherData.daily[5].clouds>33 && weatherData.daily[5].clouds<66 ){
                        fImg[4].classList.add("fa-cloud-sun")
                     }
                     if (weatherData.daily[5].clouds>66 ){
                         console.log("cloudTest")
                        fImg[4].classList.add("fa-cloud")
                    }

                    fTemp[0].textContent="Temp: "+ weatherData.daily[1].temp.day + unitTemp;
                    fTemp[1].textContent= "Temp: "+ weatherData.daily[2].temp.day+ unitTemp;
                    fTemp[2].textContent="Temp: "+ weatherData.daily[3].temp.day+ unitTemp;
                    fTemp[3].textContent="Temp: "+ weatherData.daily[4].temp.day+ unitTemp ;
                    fTemp[4].textContent="Temp: "+  weatherData.daily[5].temp.day+ unitTemp;
                    
                    fHum[0].textContent= "Humidity: " +weatherData.daily[1].humidity +"%"
                    fHum[1].textContent= "Humidity: " +weatherData.daily[2].humidity +"%"
                    fHum[2].textContent= "Humidity: " +weatherData.daily[3].humidity +"%"
                    fHum[3].textContent= "Humidity: " +weatherData.daily[4].humidity +"%"
                    fHum[4].textContent= "Humidity: " +weatherData.daily[5].humidity +"%"
                    
                    
                    console.log(weatherURL)
                    
                    
                    
                })}
                )})})}
                

                