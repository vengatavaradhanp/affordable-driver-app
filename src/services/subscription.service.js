import api from "./api";

const getToken = () => localStorage.getItem("token");

const token = getToken();

const subscriptionService = {
 getSubscriptionList: async (query) => {
  console.log ("Token", token);

  const response = await api.get(
    `subscription/user`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
 },

  getSubscribedTimeSlots: async (params) => {
    const response = await api.get("subscription/gettimeslots", {
      params: params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      
    });
    return response.data;
  },

  getAvailableTimeSlots: async (params) => {
    const response = await api.get("subscription/getremainingslots", {
      params: params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      
    });
    return response.data;
  },

  createSubscription: async (payload) => {
    console.log("payload", payload);
    const token = getToken();

    const response = await api.post(`subscription/add`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },

    });
    return response;
  },

  getRescheduledTimeSlot: async (id, payload) => {
    const token = getToken();

    const response = await api.put(`timeslot/reschedule/${id}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  },

  
};

export default subscriptionService;
