"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function DashNavBar() {
  const pathname = usePathname();
   const navLinks = [
    { title: "Dashboard", href: "/admin/home/dashboard" },
    { title: "Recent Update", href: "/admin/home/update" },
    { title: "Announcement", href: "/admin/home/announcements" },
  ];
  return (
    <div className="h-16 bg-white flex items-center px-8 border-b border-slate-200">
      <nav className="sticky mt-5 flex space-x-5 text-[14px]">
        {navLinks.map((item, i) => {
          return (
            <Link
              key={i}
              href={item.href}
              className={`${
                pathname === item.href
                  ? "py-2 border-b-[4px] border-blue-600  "
                  : "py-2 text-slate-600"
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
