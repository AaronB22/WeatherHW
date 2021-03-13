
                    
                    const userSearch =document.querySelector('.userInput')
                    
                            const weatherKey="c80f9a4fde963804b68e5e32b0e539de";
    function getWeather(){
        const geoCodingUrl='http://api.openweathermap.org/geo/1.0/direct?q='+userSearch.value+'&limit&appid='+ weatherKey   
        fetch(geoCodingUrl)
        .then(function (response){
            
            response.json()
            .then(function(data){
                console.log(data)
                
               
                let lat= data[0].lat;
                let lon= data[0].lon;
               
                const weatherURL = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units=imperial'+'&appid='+ weatherKey
                console.log(weatherURL)
               
                fetch(weatherURL)
               
                    .then (function (weatherResponse){
                    weatherResponse.json()
                    .then(function(weatherData){
                        console.log(weatherData)
                        const temp = weatherData.daily[0].temp.day
                        document.getElementById('tempMain').textContent= temp + "F"
                        document.getElementById('humMain').textContent='humidity '+ weatherData.daily[0].humidity +"%"
                        document.getElementById('windMain').textContent="Wind Speed " +weatherData.daily[0].wind_speed +"mph"
                        document.getElementById('uvMain').textContent="UVI =" +weatherData.daily[0].uvi
                       
                        console.log(weatherURL)
                        
                        
               
    })}
        )})})}
           