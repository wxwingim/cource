import axios from 'axios';
import {AxiosResponse} from 'axios'
import authHeader from './auth-header';
import { UserResponce } from '../models/UserResponce'; 
import { OrderRes } from '../models/OrderResponce'
import { get } from 'http';
import { set } from 'mobx';
import { isAwaitExpression } from 'typescript';

const API_URL = 'http://localhost:8080/';

// interface

class UserService {

  user = {} as UserResponce

  setUser(user : UserResponce){
    this.user = user;
  }

  getUserDetails(){
    return axios.get<UserResponce>(API_URL + "account/profile/info", { headers: authHeader() })
  }

  getUserOrdersAll(){
    return axios.post<OrderRes[]>(API_URL + "history/all", {data: null}, { headers: authHeader() })
  }

  async getOrder(id: string){
    return await axios.post<OrderRes>(API_URL + "history/appeal/" + id, {data: null}, {headers: authHeader()})
  }

}
export default new UserService();
