import axios from "axios";

export const openWeatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/3.0/",
});

export const geoDBApi = axios.create({
  baseURL: "https://wft-geo-db.p.rapidapi.com/v1/geo/",
  headers: {
    "X-RapidAPI-Key": "a48c60cd82msh40297e08086f4abp1796dajsnc707fca5265a",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
});
