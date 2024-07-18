import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader/Loader";

export default function PublicLayout() {
  return (
    <React.Fragment>
      <Suspense fallback={<Loader size="medium" color="primary" />}>
        <Outlet />
      </Suspense>
    </React.Fragment>
  );
}
