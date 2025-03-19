import React from "react";
import "./bootstrap.scss";
import "./custom.scss";
import AppRoute from "./routes";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store, persistor } from "./reducers/store";
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
}

export default App;
