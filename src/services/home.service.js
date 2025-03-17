import api from "./api";

const getToken = () => localStorage.getItem("token");

const HomeBannersService = {
  getAllHomeBanners: async (query) => {
    const token = getToken();
    console.log("Token:", token);

    const response = await api.get(
      `banners/list?page=${query.pageNumber}&pageSize=${query.perPage}&search=${query.search}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  },

  getHomeBannersById: async (id) => {
    const token = getToken();

    const response = await api.get(`banners/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }, 
    });
    return response;
  },

  createHomeBanners: async (payload) => {
    const token = getToken();

    const response = await api.post(`banners/add`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  },

  updateHomeBanners: async (id, payload) => {
    const token = getToken();

    const response = await api.post(`banners/${id}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  },

  deleteHomeBanners: async (id) => {
    const token = getToken();

    const response = await api.delete(`api/banners/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  },
};

export default HomeBannersService;
