function getWeatherData(location){
    const weatherData=[
        {
            location: 'Kolkata',
            tempC: 36,
            tempF: 96.8,
            isDay: 1,
            condition: {
                text: 'Mist',
                icon: '//cdn.weatherapi.com/weather/64x64/day/143.png',
                code: 1030
            },
            windMph: 6.9,
            windKph: 11.2,
            windDegree: 330,
            windDir: 'NNW',
            pressureMb: 1015,
            pressureIn: 29.97,
            precipMm: 0,
            precipIn: 0,
            humidity: 27,
            cloud: 0,
            feelsLikeC: 34.4,
            feelsLikeF: 94,
            visKm: 5,
            visMiles: 3,
            uv: 9,
            gustMph: 13.2,
            gustKph: 21.2
        },
        {
            location: 'Chennai',
            tempC: 32,
            tempF: 89.6,
            isDay: 1,
            condition: {
              text: 'Partly cloudy',
              icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
              code: 1003
            },
            windMph: 11.9,
            windKph: 19.1,
            windDegree: 90,
            windDir: 'E',
            pressureMb: 1016,
            pressureIn: 30,
            precipMm: 0,
            precipIn: 0,
            humidity: 49,
            cloud: 25,
            feelsLikeC: 34.5,
            feelsLikeF: 94.1,
            visKm: 7,
            visMiles: 4,
            uv: 8,
            gustMph: 15.2,
            gustKph: 24.5
        },
        {
            location: 'Mumbai',
            tempC: 34,
            tempF: 93.2,
            isDay: 1,
            condition: {
                text: 'Overcast',
                icon: '//cdn.weatherapi.com/weather/64x64/day/122.png',
                code: 1009
            },
            windMph: 11.9,
            windKph: 19.1,
            windDegree: 250,
            windDir: 'WSW',
            pressureMb: 1014,
            pressureIn: 29.94,
            precipMm: 0,
            precipIn: 0,
            humidity: 39,
            cloud: 0,
            feelsLikeC: 37.1,
            feelsLikeF: 98.7,
            visKm: 2.2,
            visMiles: 1,
            uv: 8,
            gustMph: 13.9,
            gustKph: 22.3
        },
        {
            location: 'Canada',
            tempC: 3,
            tempF: 37.4,
            isDay: 1,
            condition: {
                text: 'Fog',
                icon: '//cdn.weatherapi.com/weather/64x64/day/248.png',
                code: 1135
            },
            windMph: 2.2,
            windKph: 3.6,
            windDegree: 20,
            windDir: 'NNE',
            pressureMb: 1027,
            pressureIn: 30.33,
            precipMm: 0,
            precipIn: 0,
            humidity: 100,
            cloud: 50,
            feelsLikeC: 1,
            feelsLikeF: 33.8,
            visKm: 1.6,
            visMiles: 0,
            uv: 2,
            gustMph: 6.9,
            gustKph: 11.2
        },
        {
            location: 'Amsterdam',
            tempC: 3,
            tempF: 37.4,
            isDay: 1,
            condition: {
                text: 'Fog',
                icon: '//cdn.weatherapi.com/weather/64x64/day/248.png',
                code: 1135
            },
            windMph: 2.2,
            windKph: 3.6,
            windDegree: 20,
            windDir: 'NNE',
            pressureMb: 1027,
            pressureIn: 30.33,
            precipMm: 0,
            precipIn: 0,
            humidity: 100,
            cloud: 50,
            feelsLikeC: 1,
            feelsLikeF: 33.8,
            visKm: 1.6,
            visMiles: 0,
            uv: 2,
            gustMph: 6.9,
            gustKph: 11.2
            },
        
        {   
            location: 'London',
            tempC: 5,
            tempF: 41,
            isDay: 1,
            condition: {
                text: 'Overcast',
                icon: '//cdn.weatherapi.com/weather/64x64/day/122.png',
                code: 1009
            },
            windMph: 4.3,
            windKph: 6.8,
            windDegree: 30,
            windDir: 'NNE',
            pressureMb: 1029,
            pressureIn: 30.39,
            precipMm: 0,
            precipIn: 0,
            humidity: 75,
            cloud: 100,
            feelsLikeC: 2.4,
            feelsLikeF: 36.4,
            visKm: 10,
            visMiles: 6,
            uv: 1,
            gustMph: 10.3,
            gustKph: 16.6
        },
        {
            location: 'Bangalore', 
            tempC: 30,
            tempF: 86,
            isDay: 1,
            condition: {
              text: 'Sunny',
              icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
              code: 1000
            },
            windMph: 18.6,
            windKph: 29.9,
            windDegree: 90,
            windDir: 'E',
            pressureMb: 1020,
            pressureIn: 30.12,
            precipMm: 0,
            precipIn: 0,
            humidity: 17,
            cloud: 0,
            feelsLikeC: 27.8,
            feelsLikeF: 82,
            visKm: 10,
            visMiles: 6,
            uv: 8,
            gustMph: 19,
            gustKph: 30.6

        },
        {
            location:'Hyderabad',
            tempC: 33,
            tempF: 91.4,
            isDay: 1,
            condition: {
              text: 'Partly cloudy',
              icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
              code: 1003
            },
            windMph: 6.9,
            windKph: 11.2,
            windDegree: 50,
            windDir: 'NE',
            pressureMb: 1019,
            pressureIn: 30.09,
            precipMm: 0,
            precipIn: 0,
            humidity: 21,
            cloud: 50,
            feelsLikeC: 30.9,
            feelsLikeF: 87.5,
            visKm: 6,
            visMiles: 3,
            uv: 9,
            gustMph: 13,
            gustKph: 20.9
        },
        {
            location:'Kashmir',
            tempC: 27.5,
            tempF: 81.5,
            isDay: 1,
            condition: {
              text: 'Thundery outbreaks possible',
              icon: '//cdn.weatherapi.com/weather/64x64/day/200.png',
              code: 1087
            },
            windMph: 3.4,
            windKph: 5.4,
            windDegree: 251,
            windDir: 'WSW',
            pressureMb: 1020,
            pressureIn: 30.11,
            precipMm: 0,
            precipIn: 0,
            humidity: 35,
            cloud: 32,
            feelsLikeC: 26.9,
            feelsLikeF: 80.4,
            visKm: 9,
            visMiles: 5,
            uv: 6,
            gustMph: 3.8,
            gustKph: 6.1
        },
        {
            location:'Pune',
            tempC: 36.2,
            tempF: 97.2,
            isDay: 1,
            condition: {
              text: 'Sunny',
              icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
              code: 1000
            },
            windMph: 9.8,
            windKph: 15.8,
            windDegree: 91,
            windDir: 'E',
            pressureMb: 1015,
            pressureIn: 29.96,
            precipMm: 0,
            precipIn: 0,
            humidity: 14,
            cloud: 3,
            feelsLikeC: 34.7,
            feelsLikeF: 94.5,
            visKm: 10,
            visMiles: 6,
            uv: 9,
            gustMph: 11.4,
            gustKph: 18.4
        },
        {
            location:'Goa',
            tempC: 25.2,
            tempF: 77.4,
            isDay: 0,
            condition: {
              text: 'Clear',
              icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
              code: 1000
            },
            windMph: 5.4,
            windKph: 8.6,
            windDegree: 63,
            windDir: 'ENE',
            pressureMb: 1015,
            pressureIn: 29.97,
            precipMm: 0,
            precipIn: 0,
            humidity: 52,
            cloud: 0,
            feelsLikeC: 26.1,
            feelsLikeF: 79,
            visKm: 10,
            visMiles: 6,
            uv: 1,
            gustMph: 11.2,
            gustKph: 18
        }
    ]
    
    const result = weatherData.filter(item => item.location === search)
    const output= result.length==0? "Not Present":"Present";
    console.log(result)
    console.log(output)
}

const readline = require('readline-sync');
let search = readline.question("Hello user, what location do you want to search?");
// console.log(search);
getWeatherData(search)