import api from "./api";
import { store } from "../reducers/store";

const getToken = () => store.getState().auth?.token;

const HomeBannersService = {
  getAllHomeBanners: async (query) => {
   

    const response = await api.get(
      `banners/list?page=${query.pageNumber}&pageSize=${query.perPage}&search=${query.search}`,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
    return response;
  },

  getHomeBannersById: async (id) => {
   

    const response = await api.get(`banners/${id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      }, 
    });
    return response;
  },

  createHomeBanners: async (payload) => {
    

    const response = await api.post(`banners/add`, payload, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response;
  },

  updateHomeBanners: async (id, payload) => {
    

    const response = await api.post(`banners/${id}`, payload, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response;
  },

  deleteHomeBanners: async (id) => {
 

    const response = await api.delete(`api/banners/${id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response;
  },
};

export default HomeBannersService;
