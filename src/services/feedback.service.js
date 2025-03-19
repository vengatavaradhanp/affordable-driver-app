import api from "./api";
import { store } from "../reducers/store";

const getToken = () => store.getState().auth?.token;




const FeebackService = {
  getAllFeedback: async (query) => {


    const response = await api.get(`contacts?page=${query.pageNumber}&pageSize=${query.perPage}&search=${query.search}`,{
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    });
    return response;
  },

//   getLessonsById: async (id) => {
//     const response = await api.get(`lesson-packages/${id}`);
//     return response;
//   },

//   createLesson: async (payload) => {
//     const response = await api.post(`lesson-packages`, payload);
//     return response;
//   },

//   updateLesson: async (id, payload) => {
//     const response = await api.put(`lesson-packages/${id}/block`, payload);
//     return response;
//   },

//   deleteLesson: async (id) => {
//     const response = await api.delete(`lesson-packages/${id}`);
//     return response;
//   },
};

export default FeebackService;
