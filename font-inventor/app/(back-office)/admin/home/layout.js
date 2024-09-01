import DashNavBar from "@/components/admin/DashNavBar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div >
      <DashNavBar />
      {children}
    </div>
  );
}
