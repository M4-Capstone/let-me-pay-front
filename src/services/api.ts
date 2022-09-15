import axios from "axios" 

const BASE_URL = "https://letmepaycapstone.herokuapp.com"

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 15000
})

export default api