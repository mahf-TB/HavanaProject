import Header from "@/components/admin/Header";
import HeaderUser from "@/components/user/HeaderUser";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <main className="w-full bg-[#F0F1F3] min-h-screen">
        <Header bgColor="bg-slate-950 text-slate-50" />
        <HeaderUser />
        {children}
      </main>
    </div>
  );
}
