import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../contexts/authentication";

export default function PrivateRoute() {
  const { user, token } = useAuth();

  return user && token ? <Outlet /> : <Navigate to="/" replace />;
}
