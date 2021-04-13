import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoin = apiUrl + '/users';

export function register(user){
    return http.post(apiEndpoin, {
        email: user.username,
        password: user.password,
        name: user.name
    });
}