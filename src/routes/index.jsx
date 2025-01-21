import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LessonPackages from "../pages/lesson-packages";
import Homepage from "../pages/homepage";
import BookOnline from "../pages/book-online";
import GiftCard from "../pages/gift-card";
import ContactUs from "../pages/contact-us";
import Calendar from "../pages/calendar";
import AppLoader from "../components/app-layout/AppLoader";
import { LoaderProvider } from "../context/LoaderContext";
import Instructors from "../pages/instructors";

// const HomepageComponent = React.lazy(() => import("../pages/homepage"));
// const LessonPackagesComponent = React.lazy(() =>
//   import("../pages/lesson-packages")
// );
// const BookOnlineComponent = React.lazy(() => import("../pages/book-online"));
// const GiftCardComponent = React.lazy(() => import("../pages/gift-card"));
// const ContactUsComponent = React.lazy(() => import("../pages/contact-us"));
// const CalendarComponent = React.lazy(() => import("../pages/calendar"));

export default function AppRoute() {
  return (
    <Suspense>
      <LoaderProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/lessons" element={<LessonPackages />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/booking" element={<BookOnline />} />
            <Route path="/gift-card" element={<GiftCard />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </BrowserRouter>
      </LoaderProvider>
    </Suspense>
  );
}
