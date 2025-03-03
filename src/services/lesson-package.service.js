import api from "./api";

const LessonPackageService = {
  getAllLessons: async (query) => {
    const response = await api.get(
      `lesson-packages?page=${query.pageNumber}&pageSize=${query.perPage}&search=${query.search}`
    );
    return response;
  },

  createLesson: async (payload) => {
    const response = await api.post(`lesson-packages`, payload);
    return response;
  },

  updateLesson: async (id, payload) => {
    const response = await api.put(`lesson-packages/${id}/block`, payload);
    return response;
  },

  deleteLesson: async (id) => {
    const response = await api.delete(`lesson-packages/${id}`);
    return response;
  },
};

export default LessonPackageService;
