import { store } from "../reducers/store";
import api from "./api";

const getToken = () => store.getState().auth?.token;

const userService = {
  getAllUsers: async (query) => {
    
    const response = await api.get(
      `users?page=${query.pageNumber}&pageSize=${query.perPage}&search=${query.search}`,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
    return response;
  },

  getUsersById: async (id) => {
   

    const response = await api.get(`users/${id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response;
  },

  createUser: async (payload) => {
    

    const response = await api.post(`users`, payload, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response;
  },

  updateUser: async (id, payload) => {


    const response = await api.post(`users/${id}/update`, payload, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response;
  },

  blockUser: async (id, payload) => {


    const response = await api.put(`users/${id}/block`, payload, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response;
  },

  deleteUser: async (id) => {
    

    const response = await api.delete(`users/${id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response;
  },
};

export default userService;
