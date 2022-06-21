import axios from "axios";
import {defect, defectType} from '../models/ServiceModel';
import { DeviceType } from '../models/OrderResponce';

const SERVICE_API_BASE_URL = "http://localhost:8080/service";

class ServiceService {
    getServices(type : string){
        return axios.get(SERVICE_API_BASE_URL + "/type/" + type);
    }

    getfRequentDefects(type : string){
        return axios.get<defect[][]>(SERVICE_API_BASE_URL + "/defects/" + type);
    }

    getDefectTypes(type: string){
        return axios.get<defectType[]>(SERVICE_API_BASE_URL+ "/defectTypes/"+ type);
    }

    getDeviceTypes(){
        return axios.get<DeviceType[]>("http://localhost:8080/types/all");
    }
}

export default new ServiceService;