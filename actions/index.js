import axios from 'axios';
const ROOT_URL = `https://newsapi.org/v2/top-headlines?`;
const API_KEY = 'c11eaa6f63524aaeb20ace88ae522539';

export const FETCH_SEARCH_RESULTS = 'FETCH_SEARCH_RESULTS';
export const FETCH_TOP_BY_COUNTRY = 'FETCH_TOP_BY_COUNTRY';

export function fetchSearchResults(searchTerm) {
    const url = `${ROOT_URL}q=${searchTerm}&apiKey=${API_KEY}`;
    const request = axios.get(url);

    return {
        type: FETCH_SEARCH_RESULTS,
        payload: request
    }
}

export function getTopHeadlinesByLanguage(countryCode) {
    const url = `${ROOT_URL}language=${countryCode}&apiKey=${API_KEY}`;
    const request = axios.get(url);

    return {
        type: FETCH_TOP_BY_COUNTRY,
        payload: request
    }
}
