import axios from 'axios'; 


const axiosInstane = axios.create({
    baseURL:baseURL,
    timeout:5000, 
    headers:{
        Authorization:localStorage.getItem("access_token")?'JWT '+localStorage.getItem("access_token"):null, 
        'Content-Type':'application/json', 
        accept:'application/json'
    }
})