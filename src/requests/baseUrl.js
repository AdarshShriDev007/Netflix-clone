import axios from "axios";

const apiAxios = axios.create({
    baseURL : "https://api.themoviedb.org/3/"
})

const photoURL = 'https://image.tmdb.org/t/p/original/';

export {
    apiAxios,
    photoURL
};