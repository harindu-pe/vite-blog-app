import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <div className=" bg-slate-50 ">
      <Navbar />
      <Outlet />
    </div>
  );
}
