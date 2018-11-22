import axios from "axios";

let serverBase = axios.create({
    baseURL: "http://localhost:3001"
})

export default {
    userLogin: (username, password) => {
        return serverBase.post("/users/userlogin", {username, password})
    }
}