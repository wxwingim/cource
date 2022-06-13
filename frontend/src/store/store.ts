import {makeAutoObservable} from "mobx";
import AuthService from './../services/auth.service';
import axios from 'axios';
import {AxiosResponse} from 'axios'
import { AuthResponce } from '../models/AuthResponce';
import authHeader from '../services/auth-header';


const API_URL = "http://localhost:8080/";


export default class Store{
    username = "" as string;
    isAuth = false;

    constructor(){
        makeAutoObservable(this);
    }

    setAuth(bool: boolean){
        this.isAuth = bool;
    }

    setUsername(username: string){
        this.username = username;
    }

    async login(username : string, password : string){
        try{
            const response = await AuthService.login(username, password);
            console.log(response);
            localStorage.setItem('token', response.data.access_token);
            this.setAuth(true);
            localStorage.setItem('username', response.data.username)
            this.setUsername(localStorage.getItem('username') || '{}');
        } catch (e : any) {
            console.log(e.response?.data?.message);
        }
    }

    async register(username : string, password : string, lastName: string, firstName: string, middleName: string){
        try{
            const response = await AuthService.register(username, password, lastName, firstName, middleName);
            console.log(response);
            localStorage.setItem('token', response.data.access_token);
            this.setAuth(true);
            localStorage.setItem('username', response.data.username);
            this.setUsername(localStorage.getItem('username') || '{}');
        } catch (e : any) {
            console.log(e.response?.data?.message);
        }
    }

    async logout(){
        try{
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            localStorage.removeItem('username')
            this.setAuth(false);
            this.setUsername("");
        } catch (e : any) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth(){

        try{
            const response = await axios.get<AuthResponce>(API_URL + "messages", 
            { 
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                } 
            })
            console.log(response);
            console.log(this.username);
            console.log(this.isAuth);
            console.log(localStorage.getItem('username'));
            this.setAuth(true);
            this.setUsername(response.data.username)
        } catch(e: any) {
            console.log("error in store");
            console.log(e.response?.data?.message);
        }
    }
}