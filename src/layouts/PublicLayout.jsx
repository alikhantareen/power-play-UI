import React, { Suspense, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { useUserData } from "../UserContext";

export default function PublicLayout() {
  const navigate = useNavigate();
  const { userData } = useUserData();
  
  useEffect(() => {
    if (userData.isLoggedIn) navigate("/");
  }, []);

  return (
    <React.Fragment>
      <Suspense fallback={<Loader size="medium" color="primary" />}>
        <Outlet />
      </Suspense>
    </React.Fragment>
  );
}
