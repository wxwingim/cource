import axios from 'axios';
import {AxiosResponse} from 'axios'
import authHeader from './auth-header';
import { UserResponce } from '../models/UserResponce'; 
import { OrderRes, Works } from '../models/OrderResponce'
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
    return axios.get<UserResponce>("/account/profile/info")
  }

  getUserOrdersAll(){
    return axios.post<OrderRes[]>("/history/all")
  }

  async getOrder(id: string){
    return await axios.post<OrderRes>("/history/appeal/" + id)
  }

  async getOrderAnonim(id: string){
    return await axios.get<OrderRes>(API_URL + "/history/search/" + id)
  }

  async getWorks(id: string){
    return await axios.post<Works[]>("/history/works/" + id);
  }

}
export default new UserService();
