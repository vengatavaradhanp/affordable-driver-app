import React from "react";
import AppHeader from "./components/app-layout/AppHeader";
import "./bootstrap.scss";
import "./custom.scss";
import AppFooter from "./components/app-layout/AppFooter";
import HomePage from "./pages/homepage";
import AppRoute from "./routes";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./reducers/store";
import { LoginResponse } from "./utils/constant";

function App() {

  // React.useEffect(() => {
  //   localStorage.setItem("userInfo", JSON.stringify(LoginResponse));
  //   localStorage.setItem("isLoggedIn", true);
  // }, [])
  return (
    <Provider store={store}>

      <AppRoute />

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
    </Provider>
  );
}

export default App;
