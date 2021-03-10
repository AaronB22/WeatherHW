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

 const userSearch =document.querySelector('#hmPageInput')
 
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

function getWeather(){
    console.log(userSearch.value)
const weahterURL= 'http://api.openweathermap.org/data/2.5/weather?q='+userSearch.value + weatherKey;
fetch(weahterURL)
    .then(function(response){
        if(response.ok){
            console.log(response)
            response.json().then(function(data){
                return data;
                console.log(data)
            })
            
        }
    })}
