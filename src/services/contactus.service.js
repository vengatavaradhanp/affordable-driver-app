import api from "./api";
import { store } from "../reducers/store";

const getToken = () => store.getState().auth?.token;


const ContactUsService = {
  submitContactForm: async (formData) => {
   
    return await api.post("contacts", {
      firstname: formData.firstName,
      lastname: formData.lastName,
      emailaddress: formData.email,
      contact_number: formData.contactNumber,
      inquiring_about: formData.inquiry,
      message: formData.message,
    },
    {
  headers : {
    Authorization: `Bearer ${getToken()}`
  }
}
);
  },
};

export default ContactUsService;
