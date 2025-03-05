import api from "./api";

const ContactUsService = {
  submitContactForm: async (formData) => {
    return await api.post("contacts", {
      firstname: formData.firstName,
      lastname: formData.lastName,
      emailaddress: formData.email,
      contact_number: formData.contactNumber,
      inquiring_about: formData.inquiry,
      message: formData.message,
    });
  },
};

export default ContactUsService;
