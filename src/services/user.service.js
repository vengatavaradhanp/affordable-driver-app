import api from "./api";

const getToken = () => localStorage.getItem("token");

const userService = {
  getAllUsers: async (query) => {
    const token = getToken();
    console.log("Token:", token);
    
    const response = await api.get(
      `users?page=${query.pageNumber}&pageSize=${query.perPage}&search=${query.search}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  },

  getUsersById: async (id) => {
    const token = getToken();

    const response = await api.get(`users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  },

  createUser: async (payload) => {
    const token = getToken();

    const response = await api.post(`users`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  },

  updateUser: async (id, payload) => {
    const token = getToken();

    const response = await api.put(`users/${id}/block`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  },

  deleteUser: async (id) => {
    const token = getToken();

    const response = await api.delete(`users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  },
};

export default userService;
