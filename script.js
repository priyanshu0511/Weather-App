window.onload=function(){
    

    let inp = document.querySelector('.input-box');
    let searchbtn = document.getElementById('searchbtn');
    let weather_img = document.querySelector('.weather-img');
    let temp = document.querySelector('.temp');
    let des = document.querySelector('.desc');
    let humid = document.getElementById('humidity');
    let wind = document.getElementById('wind-speed');
    let lnf = document.querySelector(".location-not-found")
    let wb = document.querySelector(".weather-body")
    
    async function checkWeather(city)
    {
        const api_key = config.api_key;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    
        const weather_data = await fetch(`${url}`).then(response => response.json());
    
        if(weather_data.cod === '404')
        {
            lnf.style.display = "flex";
            wb.style.display = "none";
        }
        else
        {
            lnf.style.display = "none";
            wb.style.display = "flex";
            temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}`+'&#8451';
            des.innerHTML = `${weather_data.weather[0].description}`
            humid.innerHTML = `${weather_data.main.humidity}%`
            wind.innerHTML = `${weather_data.wind.speed}km/h`
    
            switch(weather_data.weather[0].main){
                case 'Clouds':
                    weather_img.src = "/assets/cloud.png";
                    break;
                case 'Clear':
                    weather_img.src = "/assets/clear.png";
                    break;
                case 'Rain':
                    weather_img.src = "/assets/rain.png";
                    break;
                case 'Mist':
                    weather_img.src = "/assets/mist.png";
                    break;
                case 'Snow':
                    weather_img.src = "/assets/snow.png";
                    break;
                case 'Haze':
                    weather_img.src = "/assets/mist.png";
                    break;
                default:
                    weather_img.src = "/assets/404.png";
            }
        }
    }
    
    searchbtn.addEventListener('click', () =>{
        checkWeather(inp.value);
    });
    
    }