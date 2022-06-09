import axios from "axios";

const SERVICE_API_BASE_URL = "http://localhost:8080/service";

class ServiceService {
    getServices(type : string){
        return axios.get(SERVICE_API_BASE_URL + "/type/" +type);
    }

    getfRequentDefects(type : string){
        return axios.get(SERVICE_API_BASE_URL + "/defects/" + type);
    }

    getDefectTypes(type: string){
        return axios.get(SERVICE_API_BASE_URL+ "/defectTypes/"+ type);
    }
}

export default new ServiceService;