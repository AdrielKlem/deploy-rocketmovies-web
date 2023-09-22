import axios from "axios"

export const api = axios.create({
    baseURL: "https://deploy-rocketmovies-api.onrender.com"
})