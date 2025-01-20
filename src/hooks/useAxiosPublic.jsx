import axios from "axios";
// assignment12-silk.vercel.app
// http://localhost:5000

 const axiosPublic = axios.create({
    baseURL: 'https://assignment12-silk.vercel.app',
    withCredentials: true,
  })
  
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;