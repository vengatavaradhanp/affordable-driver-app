import api from "./api";

const getToken = () => localStorage.getItem("token");

const token = getToken();

const slotBookingService = {
 getAllUsers: async (query) => {
  console.log ("Token", token);

  const response = await api.get(
    `users?page=${query.pageNumber}&pageSize=${query.perPage}&search=${query.search}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
 },


  getAvailableMonthlySlots: async (params) => {
    const response = await api.get("timeslots/monthly", {
      params: params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      
    });
    console.log("response sent to client", response.data.data );  
    return response.data.data ? response.data.data : [];
  },
};

export default slotBookingService;
