import {makeAutoObservable} from "mobx";
import AuthService from './../services/auth.service';

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
            this.setUsername(response.data.username);
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
            this.setUsername(response.data.username);
        } catch (e : any) {
            console.log(e.response?.data?.message);
        }
    }

    async logout(){
        try{
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUsername("");
        } catch (e : any) {
            console.log(e.response?.data?.message);
        }
    }
}