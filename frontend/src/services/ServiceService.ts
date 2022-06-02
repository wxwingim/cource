import axios from "axios";

const SERVICE_API_BASE_URL = "http://localhost:8080/service";

class ServiceService {
    getServices(type : string){
        return axios.get(SERVICE_API_BASE_URL + "/" +type);
    }

    getfRequentDefects(type : string){
        // return axios.get(SERVICE_API_BASE_URL + )
    }
}

export default new ServiceService;