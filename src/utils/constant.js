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

export const EventsList = [
  {
    id: 1,
    title: "Driving Class 1",
    description: "Test",
    start: "2025-02-02T10:00:00",
    end: "2025-02-02T12:00:00",
  },
  {
    id: 2,
    title: "Driving Class 2",
    description: "Test",
    start: "2025-02-03T14:00:00",
    end: "2025-02-03T16:00:00",
  },
  {
    id: 3,
    title: "Driving Class 3",
    description: "Test",
    start: "2025-02-08T09:30:00",
    end: "2025-02-08T11:00:00",
  },
  {
    id: 4,
    title: "Driving Class 4",
    description: "Test",
    start: "2025-02-10T16:00:00",
    end: "2025-02-10T17:30:00",
  },
  {
    id: 5,
    title: "Driving Class 5",
    description: "Test",
    start: "2025-02-12T09:00:00",
    end: "2025-02-12T15:00:00",
  },
];

export const InstructorList = [
  {
    id: 1,
    name: "Micheal Lawson",
    image: "https://reqres.in/img/faces/7-image.jpg",
    min_price_per_hour: "63",
    max_price_per_hour: "70",
    rating: "21",
    lessons_completed: "205",
    availability: 1,
    is_verified: 0,
  },
  {
    id: 2,
    name: "Lindsay Ferguson",
    image: "https://reqres.in/img/faces/8-image.jpg",
    min_price_per_hour: "72",
    max_price_per_hour: "80",
    rating: "35",
    lessons_completed: "158",
    availability: 1,
    is_verified: 1,
  },
  {
    id: 3,
    name: "Byron Fields",
    image: "https://reqres.in/img/faces/10-image.jpg",
    min_price_per_hour: "65",
    max_price_per_hour: "75",
    rating: "17",
    lessons_completed: "93",
    availability: 0,
    is_verified: 1,
  },
];

export const DateList = [
  { id: 1, date: "2025-01-21" },
  { id: 2, date: "2025-01-22" },
  { id: 3, date: "2025-01-23" },
];

export const API_URL =
  "http://206.189.141.1/expert-driver/public/index.php/api";

export const AvailableSlots = [
  {
    id: 1,
    start_hour: "08:00 AM",
    end_hour: "09:00 AM",
    date: "2025-01-28",
    active: false,
  },
  {
    id: 2,
    start_hour: "09:15 AM",
    end_hour: "10:15 AM",
    date: "2025-01-28",
    active: false,
  },
  {
    id: 3,
    start_hour: "10:30 AM",
    end_hour: "11:30 AM",
    date: "2025-01-28",
    active: false,
  },
  {
    id: 5,
    start_hour: "12:45 PM",
    end_hour: "01:45 PM",
    date: "2025-01-28",
    active: false,
  },
  {
    id: 6,
    start_hour: "02:00 PM",
    end_hour: "03:00 PM",
    date: "2025-01-28",
    active: false,
  },
  {
    id: 7,
    start_hour: "03:15 PM",
    end_hour: "04:15 PM",
    date: "2025-01-28",
    active: false,
  },
  {
    id: 8,
    start_hour: "04:30 PM",
    end_hour: "05:30 PM",
    date: "2025-01-28",
    active: false,
  },
];

export const LoginResponse = {
  userDetails: {
    id: 1,
    name: "John ",
    lastName: "Doe",
    email: "john.doe@example",
    address: "123, Main St",
    role: "student",
    phone: "1234567890",
    is_active: true,
    is_verified: true,
    password: "12345678"
  },
  selectedSlot:{
    id: 1,
    start_hour: "08:00 AM",
    end_hour: "09:00 AM",
    date: "2025-01-28",
    active: false,
  }
};