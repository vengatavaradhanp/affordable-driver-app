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

  // createSubscription: async (payload) => {
  //   const pp = {
  //     "transaction" : "ORD1111111",
  //     "slots"        : [
  //         {
  //             "id" : 1,
  //             "date" : "2025-03-18"
  //         },
  //         {
  //             "id" : 1,
  //             "date" : "2025-03-19"
  //         }
  //     ]
  // }
  //   console.log("payload", payload);
  //   const token = getToken();

  //   const response = await api.post(`subscription/add`, pp, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },

  //   });
  //   return response;
  // },

  createSubscription: async (payload) => {
    console.log("Payload sent to API:", payload);
  
    const token = getToken();
    if (!token) {
      console.error("No token found!");
      return;
    }
  
    try {
      const response = await api.post(`subscription/add`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
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
