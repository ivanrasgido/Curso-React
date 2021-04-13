import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoin = apiUrl + '/movies';


function movieUrl (id){
    return `${apiEndpoin}/${id}`;
}

export function getMovie(movieId) {
    return http.get(movieUrl(movieId));
}

export function getMovies() {
   return http.get(apiEndpoin);
}
export function deleteMovie(movieId) {
    return http.delete(movieUrl(movieId));
}

export function saveMovie(movie){
    if(movie._id){
        const  body = { ...movie};
        delete body._id;
        return http.put( movieUrl(movie._id) , body);
    }
    return http.post(apiEndpoin,movie);
}