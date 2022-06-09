import axios from 'axios'

const API_URL = "http://localhost:8080/";

class AuthService {

    async login(username : string, password : string){
        const response = await axios
        .post(API_URL + "login", {
          username,
          password
        });
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(lName : string, fName : string, mName : string, username : string, password : string) {
      return axios.post(API_URL + "signup", {
          lName,
          fName,
          mName,
          username,
          password
      });
    }

    getCurrentUser() {
    return JSON.parse(localStorage.getItem('user') || '{}');
    }
}

export default new AuthService()