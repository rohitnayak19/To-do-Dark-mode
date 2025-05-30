let searchInput = document.getElementById('searchInput')
let city = document.getElementById('city')
let temperature = document.getElementById('temperature')
let description= document.getElementById('description')
let cloudes = document.getElementById('cloudes')
let humidity = document.getElementById('humidity')
let pressure = document.getElementById('pressure')
let form =  document.getElementById('form')

form.addEventListener('submit',(event) =>{
    event.preventDefault()  
    if(searchInput.value !== ''){
        searchWeather()
    }

    searchInput.value =""
})

let id = 'eae80a54dc637d9fbeca7590582b47dd'
let url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${id}`


function searchWeather(){
    fetch(url + '&q=' + searchInput.value)
    .then(res => res.json())
    .then(data => {
       if(data.cod == 200){
         document.querySelector('.result').style.display="block"
         document.querySelector('.error').style.display="none"
        city.querySelector('figcaption').innerText = data.name
        city.querySelector('img').src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`

        temperature.querySelector('img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
         temperature.querySelector('figcaption span').innerText = data.main.temp
         description.innerText = data.weather[0].description
          cloudes.innerText = data.clouds.all
           humidity.innerText = data.main.humidity
            pressure.innerText = data.main.pressure
       } else{
        document.querySelector('.result').style.display="none"
        document.querySelector('.error').innerText="city not found"
         document.querySelector('.error').style.display="block"
       }
    })
}
const intialApp = () =>{
    searchInput.value = 'bilaspur'
    searchWeather()
}

intialApp()
