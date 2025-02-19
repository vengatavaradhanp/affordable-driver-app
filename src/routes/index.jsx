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
import PurchaseSteps from "../pages/purchase-steps";
import MyProfile from "../pages/profile";
import Loginpage from "../pages/auth/Loginpage";
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../pages/homepage";
import Dashboard from "../pages/admin/dashboard";
import Users from "../pages/admin/users";
import AdminRoute from "./AdminRoute";
import NotFound from "../pages/not-found";
import UserForm from "../pages/admin/users/UserForm";

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
        <AuthProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={<Loginpage />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/lessons" element={<LessonPackages />} />
                  <Route path="/instructors" element={<Instructors />} />
                  <Route path="/booking" element={<BookOnline />} />
                  <Route path="/gift-card" element={<GiftCard />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/purchase-steps" element={<PurchaseSteps />} />
                  <Route path="/profile" element={<MyProfile />} />
                </Route>
                <Route element={<AdminRoute />}>
                  <Route path="/admin/dashboard" element={<Dashboard />} />
                  <Route path="/admin/users" element={<Users />} />
                  <Route path="/admin/addUser" element={<UserForm />} />

                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
        </AuthProvider>
      </LoaderProvider>
    </Suspense >
  );
}
