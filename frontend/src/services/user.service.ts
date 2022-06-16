import axios from 'axios';
import {AxiosResponse} from 'axios'
import authHeader from './auth-header';
import { UserResponce } from '../models/UserResponce'; 
import { get } from 'http';
import { set } from 'mobx';

const API_URL = 'http://localhost:8080/account/';

// interface

class UserService {

  user = {} as UserResponce

  setUser(user : UserResponce){
    this.user = user;
  }

  getUserDetails(){
     return axios.get<UserResponce>(API_URL + "profile/info", { headers: authHeader() })
    //  .then((responce) => {
    //   this.setUser(responce.data);
    //  });
  }


  // async addUserData(){
  //   const responce = await this.getUserDetails();
  //   this.setUser(responce.data)
  //   console.log(responce.data)
  // }

}
export default new UserService();
