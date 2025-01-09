export const EnvironmentEndpoint = process.env.REACT_APP_API_URL;

export const PaymentOptions = {
  clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID,
  currency: "USD",
  intent: "capture",
};

export const TimeData = [
  { value: "01:00", label: "1:00 AM" },
  { value: "02:00", label: "2:00 AM" },
  { value: "03:00", label: "3:00 AM" },
  { value: "04:00", label: "4:00 AM" },
  { value: "05:00", label: "5:00 AM" },
  { value: "06:00", label: "6:00 AM" },
  { value: "07:00", label: "7:00 AM" },
  { value: "08:00", label: "8:00 AM" },
  { value: "09:00", label: "9:00 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "12:00", label: "12:00 PM" },
  { value: "13:00", label: "1:00 PM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "15:00", label: "3:00 PM" },
  { value: "16:00", label: "4:00 PM" },
  { value: "17:00", label: "5:00 PM" },
  { value: "18:00", label: "6:00 PM" },
  { value: "19:00", label: "7:00 PM" },
  { value: "20:00", label: "8:00 PM" },
  { value: "21:00", label: "9:00 PM" },
  { value: "22:00", label: "10:00 PM" },
  { value: "23:00", label: "11:00 PM" },
  { value: "24:00", label: "12:00 PM" },
];

export const LessonsList = [
  {
    is_popular: 1,
    count: "3",
    time_per_lesson: "60",
    title: "An Affordable and Practical Start",
    validity_end: "01/01/2026",
    is_active: true,
  },
  {
    is_popular: 1,
    count: "5",
    time_per_lesson: "30",
    title: "An Affordable and Practical Start",
    validity_end: "01/01/2026",
    is_active: true,
  },
  {
    is_popular: 0,
    count: "7",
    time_per_lesson: "25",
    title: "Big Savings & Our Most Requested Package",
    validity_end: "01/06/2025",
    is_active: true,
  },
  {
    is_popular: 0,
    count: "10",
    time_per_lesson: "60",
    title: "This is the Ultimate Lesson Package",
    validity_end: "01/01/2026",
    is_active: true,
  },
];
