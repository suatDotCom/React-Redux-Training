import axios from "axios";

let serverBase = axios.create({
    baseURL: "http://localhost:3001"
})

export default {
    userLogin: () => {
        return serverBase.get("/api/userlogin")
    }
}