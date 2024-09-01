import Header from "@/components/admin/Header";
import SideBar from "@/components/admin/SideBar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <SideBar />
      <main className="w-full bg-slate-100 min-h-screen">
        <Header bgColor="bg-slate-50"/>
        {children}
      </main>
    </div>
  );
}
