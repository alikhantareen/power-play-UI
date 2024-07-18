import React, { Suspense, useEffect } from "react";
import Loader from "../components/Loader/Loader";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserData } from "../UserContext";

export default function ProtectedLayouts() {
  const navigate = useNavigate();
  const { userData } = useUserData();

  useEffect(() => {
    if (!userData.isLoggedIn) navigate("/login");
  }, []);
  return (
    <React.Fragment>
      <Suspense fallback={<Loader size="medium" color="primary" />}>
        <Outlet />
      </Suspense>
    </React.Fragment>
  );
}
