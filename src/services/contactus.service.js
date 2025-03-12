import api from "./api";

const getToken = () => localStorage.getItem("token")

const ContactUsService = {
  submitContactForm: async (formData) => {
    const token = getToken();
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
    Authorization: `Bearer ${token}`
  }
}
);
  },
};

export default ContactUsService;
