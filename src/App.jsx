import React from "react";
import AppRoutes from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import Loader from "./components/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

export default function App() {
  return (
    <React.Fragment>
      <React.Suspense fallback={<Loader size="medium" color="primary" />}>
        <AppRoutes />
      </React.Suspense>
      <ToastContainer autoClose={3000} />
    </React.Fragment>
  );
}
