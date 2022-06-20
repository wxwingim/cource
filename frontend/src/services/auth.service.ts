import axios from 'axios'
import {AxiosResponse} from 'axios'
import { AuthResponce } from '../models/AuthResponce';
import react, {useState} from 'react'

const API_URL = "http://localhost:8080/";

class AuthService {

    async login(username : string, password : string): Promise<AxiosResponse<AuthResponce>>{
      return axios.post<AuthResponce>("/login", {
        username,
        password
      });
    }

    async logout(): Promise<void> {
      axios.post("/logout");
    }

    async register(username : string, password : string, lastName: string, firstName: string, middleName: string): Promise<AxiosResponse<AuthResponce>> {
      return axios.post<AuthResponce>(API_URL + "register", {
        username,
        password,
        lastName,
        firstName,
        middleName
      });
    }

    getCurrentUser() {
      return localStorage.getItem('username') || '{}';
    }
}

export default new AuthService();