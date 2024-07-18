import React from "react";
import AppRoutes from "./routes/Routes";
import Loader from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./UserContext";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

export default function App() {
  return (
    <UserProvider>
      <React.Fragment>
        <React.Suspense fallback={<Loader size="medium" color="primary" />}>
          <AppRoutes />
        </React.Suspense>
        <ToastContainer autoClose={3000} />
      </React.Fragment>
    </UserProvider>
  );
}
