import api from "./api";

const slotBookingService = {
  getAvailableMonthlySlots: async (params) => {
    const response = await api.get("timeslots/monthly", {
      params: params,
    });
    return response.data;
  },
};

export default slotBookingService;
