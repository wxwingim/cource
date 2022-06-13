import axios from 'axios'
import {AxiosResponse} from 'axios'
import { AuthResponce } from '../models/AuthResponce';

const API_URL = "http://localhost:8080/";

class AuthService {

    // async login(username : string, password : string){
    //     const response = await axios
    //     .post(API_URL + "login", {
    //       username,
    //       password
    //     });
    //   if (response.data.access_token) {
    //     localStorage.setItem("user", JSON.stringify(response.data));
    //   } 
    //   return response.data;
    // }

    async login(username : string, password : string): Promise<AxiosResponse<AuthResponce>>{
      return axios.post<AuthResponce>(API_URL + "login", {
        username,
        password
      });
    }

    // logout() {
    //     localStorage.removeItem("user");
    // }

    async logout(): Promise<void>{
      return axios.post(API_URL + "logout");
    }

    // register(lastName : string, firstName : string, middleName : string, username : string, password : string) {
    //   return axios.post(API_URL + "signup", {
    //       lastName,
    //       firstName,
    //       middleName,
    //       username,
    //       password
    //   });
    // }

    async register(username : string, password : string, lastName: string, firstName: string, middleName: string): Promise<AxiosResponse<AuthResponce>>{
      return axios.post<AuthResponce>(API_URL + "register", {
        username,
        password,
        lastName,
        firstName,
        middleName
      });
    }

    getCurrentUser() {
      return JSON.parse(localStorage.getItem('user') || '{}');
    }
}

export default new AuthService()