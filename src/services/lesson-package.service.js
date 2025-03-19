import api from "./api";
import { store } from "../reducers/store";

const getToken = () => store.getState().auth?.token;



const LessonPackageService = {
  getAllLessons: async (query) => {
    
    console.log("Token:" , getToken())

    const response = await api.get(
      `lesson-packages?page=${query.pageNumber}&pageSize=${query.perPage}&search=${query.search}&role=admin`,
      {
        headers:{
          Authorization: `Bearer ${getToken()}`,
        }
      }
    );
    return response;
  },

  getLessonsById: async (id) => {
    
    const response = await api.get( `lesson-packages/${id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    });
    return response;
  },

  createLesson: async (payload) => {
    

    const response = await api.post(`lesson-packages`,payload, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
  });
    return response;
  },

  updateLesson: async (id, payload) => {


    const response = await api.put(`lesson-packages/${id}`, payload,{
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response;
  },

  deleteLesson: async (id) => {

    const response = await api.delete(`lesson-packages/${id}`,{
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response;
  },
};

export default LessonPackageService;
