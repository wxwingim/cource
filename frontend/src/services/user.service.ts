import axios from 'axios';
import {AxiosResponse} from 'axios'
import authHeader from './auth-header';
import { UserResponce } from '../models/UserResponce'; 
import { OrderRes, Works, Consumption } from '../models/OrderResponce'
import { get } from 'http';
import { set } from 'mobx';
import { isAwaitExpression } from 'typescript';
import { DeviceType } from '../models/OrderResponce';

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

  getOrderAnonim(id: string){
    return axios.get<OrderRes>(API_URL + "history/search/" + id)
  }

  async getWorks(id: string){
    return await axios.post<Works[]>("/history/works/" + id);
  }

  async getConsumptions(id : string){
    return await axios.post<Consumption[]>("/history/consumptions/" + id);
  }

  async createOrder(model : string, defect: string, equipment: string, mechanicalDamage: string, deviceType: DeviceType){
    return await axios.post("/history/create", {
      model,
      defect,
      equipment,
      mechanicalDamage,
      deviceType
    })
  }

  async getMail(id: string){
    await axios.get("/mail/send/" + id);
  }

  async getPdf(id: string) {
    return await axios.get('/pdf/' + id, { responseType: 'blob' });
  }

}
export default new UserService();
