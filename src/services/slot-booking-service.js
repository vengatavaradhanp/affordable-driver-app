import api from "./api";

import {store} from "../reducers/store";

const getToken = () => store.getState().auth?.token;
 

const slotBookingService = {
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


  getAvailableMonthlySlots: async (params) => {
    const response = await api.get("timeslots/monthly", {
      params: params,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      
    });
    console.log("response sent to client", response.data.data );  
    return response.data.data ? response.data.data : [];
  },

  getSubscribedSlotList: async (params) => {
    try {
      const response = await api.get("subscription/gettimeslots", {
        params: params,
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching subscribed slots:", error);
      return [];
    }
  },
};

export default slotBookingService;
