console.log("Aditya Mishra");

const API_KEY = "bf36bb65863c52205400712b61d7ccf8";

function fetchWeatherInfo(data){
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
    document.body.appendChild(newPara);
}

async function fetchWeatherDetails(){
    try{
        let city = "goa";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        console.log("Weather data:-> ", data);
        fetchWeatherInfo(data);
    }
    catch(err){
        console.log("Error Found",err);
    }
}

async function getCustomWeatherDetails(){
    try{
        let lat = 56.4556;
        let lon = 87.9545;
        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        let data = await result.json();
        console.log(data);
        fetchWeatherInfo(result);
    }
    catch(err){
        console.log("Error Found", err);
    }
}
