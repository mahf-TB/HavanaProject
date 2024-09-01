import axios from 'axios';
import Cookies from 'js-cookie';

const Axios = axios.create({
  baseURL: 'http://localhost:5000/',  
});

Axios.interceptors.request.use(request=>{
  const token = Cookies.get('token')
  if(token){
      request.headers.Authorization = 'Bearer '+ token
  }
  return request
})

export default Axios;



