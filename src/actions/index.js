import axios from 'axios'

const API_KEY = 'f5cf06b16c0d3ed44a3d46af4b62e218';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

    const url = ROOT_URL + '&q=' + city + ',us'
    const request = axios.get(url);

    // console.log('Request: ', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}