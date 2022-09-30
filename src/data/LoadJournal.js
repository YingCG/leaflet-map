import countries from "./countries.json"
// import { features } from "./countries.json"

class LoadJournal {
    //papa parse to convert csv file to json
    // datUrl = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-datat/data/cases_country.csv"
    //dataUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}9aea4dcb1ddec26d9d8e0907f4beb784"
    setState = null
    load = (setState) => {
        const dataUrl = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
        setState(countries)
        console.log(dataUrl)
    }
}

export default LoadJournal
