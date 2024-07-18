import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import ProtectedLayouts from "../layouts/ProtectedLayout";

const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(() => import("../pages/Auth/Login"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

export default function AppRoutes() {
    return (
        <Routes>
          {/* public layout */}
          <Route path="/" element={<PublicLayout />}>
            <Route path="login" exact element={<Login />} />
          </Route>
          {/* protected layout */}
          <Route path="/" element={<ProtectedLayouts />}>
            <Route index exact element={<Home />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      );
}