
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '731dce526amsh939f3c3b9555ebdp12a4ddjsnb66e3682552e',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};
function capitalize(str) {
  return str.toLowerCase().replace(/\b\w/g, function(l) {
    return l.toUpperCase();
  });
}


function showWeather(city) {
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML=response.cloud_pct+"%"
      feels_like.innerHTML=response.feels_like+"°C"
      humidity.innerHTML=response.humidity+"%"
      max_temp.innerHTML=response.max_temp+"°C"
      min_temp.innerHTML=response.min_temp+"°C" 
      // sunrise: 1683290760
      // sunset: 1683343558
      temp.innerHTML= response.temp + "°C"
      // wind_degrees: 200
      
     if(Mumbai.innerHTML==="undefined°C"){
  alert("Sorry for inconvenience Currently API is not working")
}
if(temp.innerHTML==="undefined°C"){
  alert("Please enter Correct city Name")
}
      wind_speed.innerHTML=response.wind_speed + " Km/h"
      let w_img=document.getElementById('w_img');
      let c_bg=document.getElementById('c_bg');
      if(response.cloud_pct>70){
        w_img.src="rainy.svg";        c_bg.style.backgroundImage= "linear-gradient(to right, #505050, #636363, #777777, #8b8b8b, #a0a0a0)"
      }
      else if(response.cloud_pct>50){        w_img.src="thunderstorm.svg";     c_bg.style.backgroundImage="linear-gradient(0deg, rgba(49,49,49,1) 5%, rgba(137,159,232,1) 54%, rgba(132,132,133,1) 94%)"
      }
      else if(response.cloud_pct>15){     w_img.src="partlyCloudy.svg";     c_bg.style.backgroundImage="linear-gradient(0deg, rgba(244,238,248,1) 10%, rgba(86,116,133,1) 51%, rgba(242,237,237,1) 100%)"}
      else{
w_img.src="sunny.svg";      c_bg.style.backgroundImage=" linear-gradient(to top, #fdcf74, #cde493, #abefc3, #a9f3ec, #c7f2ff)"
      }
    })
    .catch(err => console.error(err));
}
let submit = document.getElementById('submit');
//console.log(submit);
let s_city=document.querySelector('#searchCity');
let c_name=document.getElementById('cityName');
submit.addEventListener('click',(e)=>{
  e.preventDefault();
  showWeather(capitalize(s_city.value));
  c_name.innerHTML=capitalize(s_city.value);
});
showWeather("Delhi");

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
  .then(response => response.json())
  .then((response) => {
  Mumbai.innerHTML=response.temp+"°C"
  })
  .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shimla', options)
  .then(response => response.json())
  .then((response) => {
  Shimla.innerHTML=response.temp+"°C"
  })
  .catch(err => console.error(err));
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
  .then(response => response.json())
  .then((response) => {
  Newyork.innerHTML=response.temp+"°C"
  })
  .catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
  .then(response => response.json())
  .then((response) => {
  London.innerHTML=response.temp+"°C"
  })
  .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo', options)
  .then(response => response.json())
  .then((response) => {
  Tokyo.innerHTML=response.temp+"°C"
  })
  .catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris', options)
  .then(response => response.json())
  .then((response) => {
  Paris.innerHTML=response.temp+"°C"
  })
  .catch(err => console.error(err));

