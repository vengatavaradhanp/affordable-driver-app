import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LessonPackages from "../pages/lesson-packages";
import HomePage from "../pages/homepage";
import BookOnline from "../pages/book-online";
import GiftCard from "../pages/gift-card";
import ContactUs from "../pages/contact-us";
import Calendar from "../pages/calendar";

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lessons" element={<LessonPackages />} />
        <Route path="/booking" element={<BookOnline />} />
        <Route path="/gift-card" element={<GiftCard />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}
