import api from "./api";
import { store } from "../reducers/store";


const getToken = () => store.getState().auth?.token;

const subscriptionService = {
 getSubscriptionList: async (query) => {


  const response = await api.get(
    `subscription/user`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );
  return response;
 },

  getSubscribedTimeSlots: async (params) => {
    const response = await api.get("subscription/gettimeslots", {
      params: params,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      
    });
    return response.data;
  },

  getAvailableTimeSlots: async (params) => {
    const response = await api.get("subscription/getremainingslots", {
      params: params,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      
    });
    return response.data;
  },

  
  createSubscription: async (payload) => {
    console.log("Payload sent to API:", payload);
  
    
    if (!getToken()) {
      
      return;
    }
  
    try {
      const response = await api.post(`subscription/add`, payload, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
          "Content-Type": "application/json", // Ensure correct content type
        },
      });
  
      console.log("Subscription Response:", response.data);
      return response;
    } catch (error) {
      console.error("Error creating subscription:", error);
      throw error;
    }
  },
  
  rescheduledTimeSlot: async (id, payload) => {
    

    const response = await api.put(`timeslots/reschedule/${id}`, payload, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response;
  },

  createOrder: async (payload) => {
    const response = await api.post(`paypal/create-order`, payload, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response;
  },

  confirmationEmail: async (payload) => {
    const response = await api.post(`paypal/payment-confirm-email`, payload, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response;
  },
  
};

export default subscriptionService;
