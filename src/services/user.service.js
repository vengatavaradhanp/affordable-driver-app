import api from "./api";

const UserService = {
  getAllUsers: async (query) => {
    const response = await api.get(`users?page=${query.pageNumber}&pageSize=${query.perPage}&search=${query.search}`);
    return response;
  },

  createUser: async (payload) => {
    const response = await api.post(`users`, payload);
    return response;
  },

  updateUser: async (id, payload) => {
    const response = await api.put(`users/${id}/block`, payload);
    return response;
  },

  deleteUser: async (id) => {
    const response = await api.delete(`users/${id}`);
    return response;
  },

};


export default UserService;
