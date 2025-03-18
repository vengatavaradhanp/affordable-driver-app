import api from "./api";

const getToken =() => localStorage.getItem("token");

const LessonPackageService = {
  getAllLessons: async (query) => {
    const token = getToken();
    console.log("Token:" , token)

    const response = await api.get(
      `lesson-packages?page=${query.pageNumber}&pageSize=${query.perPage}&search=${query.search}&role=admin`,
      {
        headers:{
          Authorization: `Bearer ${token}`,
        }
      }
    );
    return response;
  },

  getLessonsById: async (id) => {
    const token = getToken();
 

    const response = await api.get( `lesson-packages/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  },

  createLesson: async (payload) => {
    const token= getToken();
     

    const response = await api.post(`lesson-packages`,payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
  });
    return response;
  },

  updateLesson: async (id, payload) => {
    const token = getToken();

    const response = await api.put(`lesson-packages/${id}`, payload,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  },

  deleteLesson: async (id) => {
    const token= getToken();

    const response = await api.delete(`lesson-packages/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  },
};

export default LessonPackageService;
