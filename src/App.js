import React from "react";
import "./bootstrap.scss";
import "./custom.scss";
import AppRoute from "./routes";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store, persistor } from "./reducers/store";
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
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
        </BrowserRouter>
      </PersistGate>

    </Provider>
  );
}

export default App;
