import {makeAutoObservable} from "mobx";
import AuthService from './../services/auth.service';
import axios from 'axios';
import {AxiosResponse} from 'axios'
import { AuthResponce } from '../models/AuthResponce';
import authHeader from '../services/auth-header';
import UserService from "../services/user.service";
import { UserResponce } from "../models/UserResponce";


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
            this.setAuth(true);
            UserService.getUserDetails().then((res) => {
                this.setUsername(res.data.username || "t");
            });
            console.log("login isAuth: " + this.isAuth);
            console.log("login username: "+ this.username);
        } catch (e : any) {
            console.log(e.response?.data?.message);
            console.log("login!?");
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

    logout(){
        try{
            AuthService.logout();
            this.setAuth(false);
            this.setUsername("");
        } catch (e : any) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth(){

        try{
            UserService.getUserDetails().then((res) => {
                this.setUsername(res.data.username);
            })
            this.setAuth(true);

        } catch(e: any) {
            this.setAuth(false);
            console.log(e.response?.data?.message);
        }
    }

    // async getUserDetails(){

    // }
}