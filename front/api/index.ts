import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5173",
    withCredentials: true
})

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if(error.response.status === 401) {
           try {
            await axios.post("http://localhost:3000/refresh", {}, {
                withCredentials:true 
            })

            return api(error.config)

           } catch(error) {
            window.location.href = "/login"
           }
        }
    }
)