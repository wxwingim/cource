import axios from "axios";

const SERVICE_API_BASE_URL = "http://localhost:8080/service";

class ServiceService {
    getServices(type : string){
        return axios.get(SERVICE_API_BASE_URL + "/type/" + type);
    }

    getServiceById(serviceId : number){
        return axios.get(SERVICE_API_BASE_URL + "/" + serviceId);
    }
}

export default new ServiceService;