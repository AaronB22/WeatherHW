// const apiURLtest = 'https://api.github.com/users/AaronB22/repos'

// fetch(apiURLtest)
//     .then(function (response){
//         if (response.ok){
//             console.log(response);
//             response.json().then(function(data){
//                 console.log(data);
//             })
//         }
//     })

 const userSearch =document.querySelector('.userInput')
 
         const weatherKey="&appid=c80f9a4fde963804b68e5e32b0e539de";


    // class weatherFetch{
    //     async getWeather(userInput){
            
    //         const response= await fetch(
    //             // 'http://api.openweathermap.org/data/2.5/weather?q='+userInput,'&appid=c80f9a4fde963804b68e5e32b0e539de'
    //             'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c80f9a4fde963804b68e5e32b0e539de'
    //         );
    //             const data= await response.json();
    //             console.log(data);
    //             return data;



    //     }
    // }


// function getWeather(){
//     console.log(userSearch.value)
//     fetch(weahterURL)
//     .then(function(response){
//         if(response.ok){
//             console.log(response)
//             response.json().then(function(data){
//                 console.log(data)
//                 return data;
//             })
            
//         }
//     })}
    
    function getWeather(){
        const geoCodingUrl='http://api.openweathermap.org/geo/1.0/direct?q='+userSearch.value+'&limit&appid'+ weatherKey   
        fetch(geoCodingUrl)
        .then(function (response){
            
            response.json()
            .then(function(data){
                console.log(data)
                
               
                let lat= data[0].lat;
                let lon= data[0].lon
                console.log([lat, lon])
                const weatherURL= 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&appid='+ weatherKey
                console.log(weatherURL)
                .then(fetch(weatherURL).then (function (weatherResponse){
                    weatherResponse.json()
                    .then(function(weatherData){
                        console.log(weatherData)
                    })
                }))
            })
            
        }
        
            
        )}
   
   function testCords(){
   
  
}
