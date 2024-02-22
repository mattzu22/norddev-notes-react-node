import axios from "axios";

export const api = axios.create({
    baseURL: "https://node-project-notes-production.up.railway.app"
})