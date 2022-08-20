import axios from 'axios';
const headers = {
    'Content-Type': 'application/json'
  } 
class UserService {
   
    getUsers(){
        return axios.get("https://localhost:7103/Token/GetUsers/");
    }

    createUser(user){
        return axios.post("https://localhost:7103/Token/Create/", user,{headers:headers});
    }

    getUser(userId){
        return axios.get("https://localhost:7103/Token/GetUser"+ '/' + userId);
    }

    deleteUser(userId){
        return axios.delete("https://localhost:7103/Token/DeleteUser"+ '/' + userId);
    }
    updateUser(user){
        return axios.put("https://localhost:7103/Token/UpdateUser", user,{headers:headers});
    }

}

export default new UserService()