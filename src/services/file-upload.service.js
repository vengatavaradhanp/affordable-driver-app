import api from "./api";

import {store} from "../reducers/store";

const getToken = () => store.getState().auth?.token;
 

const FileUploadService = {
   
  uploadFile: async (payload) => {
    const response = await api.post(`service/file/upload/`, payload, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
    return response;
  },
 
};

export default FileUploadService;
