import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigation, useNavigate } from "react-router-dom";
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
import Settings from "../pages/admin/settings";
import Instructor from "../pages/admin/instructor";
import FeedBack from "../pages/admin/feedback";
import LessonsPackage from "../pages/admin/lessons-package";
import LessonsForm from "../pages/admin/lessons-package/LessonsForm";
import UserForm2 from "../pages/admin/users/UserForm2";
import Banner from "../pages/admin/banner/index";
import BannerForm from "../pages/admin/banner/BannerForm"; 
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/loginSlice";

const AuthorizeRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const loginSelector = useSelector((state) => state.auth);

  console.log('#################AuthorizeRedirect Triggered#################', loginSelector)

  useEffect(() => {
    // Extract token from query string
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      // Store token in sessionStorage
      sessionStorage.setItem("authTokenxx", token);
      dispatch(login({ token: token, user: null }));
      console.log("AuthorizeRedirect Triggering")
    }

    // Redirect to home page
    navigate("/");
  }, [navigate, location]);

  return null; // No UI needed
};
 
export default function AppRoute() {
 
  return (
    <Suspense>
      <LoaderProvider>
        <AuthProvider>

          <Routes>

            <Route element={<ProtectedRoute />}>
              <Route path="/login" element={<Loginpage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/api/authorize" element={<AuthorizeRedirect  to="/" />} />
              <Route path="/lessons" element={<LessonPackages />} />
              <Route path="/instructors" element={<Instructors />} />
              <Route path="/booking" element={<BookOnline />} />
              <Route path="/gift-card" element={<GiftCard />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/purchase" element={<PurchaseSteps />} />
              <Route path="/profile" element={<MyProfile />} />
            </Route>
            <Route element={<AdminRoute />}>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/users" element={<Users />} />
              <Route path="/admin/users/:type" element={<UserForm2 />} />
              <Route path="/admin/feedback" element={<FeedBack />} />
              <Route path="/admin/instructor" element={<Instructor />} />
              <Route path="/admin/settings" element={<Settings />} />
              <Route path="/admin/lessons" element={<LessonsPackage />} />
              <Route path="/admin/lessons/:type" element={<LessonsForm />} />
              <Route path="/admin/banner" element={<Banner />} />
              <Route path="/admin/banner/:type" element={<BannerForm />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>

        </AuthProvider>
      </LoaderProvider>
    </Suspense >
  );
}
