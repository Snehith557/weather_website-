// accessing wheater api
let weather ={
    "apiKey": "6d898187d2efb97ad2940209d7dae725" //6d898187d2efb97ad2940209d7dae725
}
let city = ""

const searchButton = document.getElementById("search_butt-el")

// const inputValue = document.getElementById("search-el").value

searchButton.addEventListener("click",function(){
        
    city = document.getElementById("search-el").value

    if (city!=""){
        console.log(city)
        // if the city is entered make a request and fetch the weather details
        // invoking a function for doing the job
        searchWeather(city)
    }
    else{
       alert("enter the city name")

    }

    


})

let weatherData ;
 
// by default my location will be bangalore
//hence directly pass the city as bangalore
const defaultcity = "bangalore"
searchWeather(defaultcity)


function searchWeather(city){
    
    // the body of the response will have the data required
    // hence it has to be converted to json to be used 
   
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d898187d2efb97ad2940209d7dae725`) // api code can be made dynamic
//    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d898187d2efb97ad2940209d7dae725`) // by defalut making i
    .then(response =>  response.json())
    .then(data =>{weatherData = data
        console.log(data)
        toDoFunction(weatherData)// to do the required stuff
    })
}


function toDoFunction(string){
    weatherData = string
//    console.log(JSON.stringify(weatherData))

    // now update the inner text of the weather in ,temp, humidity ,wind

    const place = document.getElementById("weather-el")
    const humidity= document.getElementById("humidity-el")
    const wind = document.getElementById("wind-el")
    const temp = document.getElementById("temp-el")
    
    const searchplace =document.getElementById("search-el")
    place.innerHTML = `Weather in:`
    place.innerHTML = `${place.innerHTML}  ${weatherData.name}` 
    humidity.innerHTML = `Humidity :`
    humidity.innerHTML = `${humidity.innerHTML} ${weatherData.main.humidity}`
    wind.innerHTML =`wind :`
    wind.innerHTML = `${wind.innerHTML} ${weatherData.wind.speed}`

    let celsius = (weatherData.main.temp - 273.5).toPrecision(4)
    temp.innerHTML = `temp:`
    temp.innerHTML = `${temp.innerHTML} ${celsius} degree celsius`
    
    
}




// update the date and time dynamically

// document.getElementById("datetime-el").innerHTML = `  ${date} `
setInterval(function(){
    
    
    const date = new Date()
    document.getElementById("datetime-el").innerHTML = `  ${date} `
    //${date.getFullYear() } ` 
   // console.log("inside time")
    //console.log(date)
},1000)


const locationBut = document.getElementById("myLocation-el")
const currentLocation = document.getElementById("location-el")


locationBut.addEventListener('click',function()
{
    getLocation()
})
// console.log(navigator.geolocation.getCurrentPosition(showPosition))
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      currentLocation.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    currentLocation.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;

    console.log(position)
  }


  

  