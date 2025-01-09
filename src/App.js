import React from "react";
import AppHeader from "./components/app-layout/AppHeader";
import "./bootstrap.scss";
import "./custom.scss";
import AppFooter from "./components/app-layout/AppFooter";
import HomePage from "./pages/homepage";
import AppRoute from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  console.log("##", process.env);
  return (
    <div>
      <AppHeader />
      <AppRoute />
      <AppFooter />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
