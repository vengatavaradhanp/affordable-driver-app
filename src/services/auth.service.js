import api from "./api";
import { store } from "../reducers/store";

const getToken = () => store.getState().auth?.token;
console.log('################', getToken())
const AuthService = {

  login: async (payload) => {
    const response = await api.post(`login`, payload, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response;
  },
   
  logout: async (payload) => {
    const response = await api.post(`logout`, payload, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response;
  },
 
};

export default AuthService;
