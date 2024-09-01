"use client";
import {
  Apple,
  ChartBarStacked,
  CircleDollarSign,
  Hammer,
  LogOut,
  ShoppingCart,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

import ToolTip from "../(components)/ToolTip";
import Cookies from "js-cookie";

export default function HeaderUser() {
  const router = useRouter();
  const pathname = usePathname();
  const Logout = () => {
    Cookies.remove("token");
    Cookies.remove("role");
    router.push("/login");
  };
  const navLinks = [
    { title: "Dashboard", href: "/user/home", Icon: ChartBarStacked },
    { title: "Products", href: "/user/products", Icon: Hammer },
    { title: "Sales", href: "/user/sales", Icon: ShoppingCart },
    { title: "Clients", href: "/user/clients", Icon: Users },
    { title: "Caisse", href: "/user/cash", Icon: CircleDollarSign },
  ];
  return (
    <div className="h-10 bg-white flex items-center justify-around border-b border-slate-200">
      <nav className="sticky mt-1 flex space-x-5 text-[13px]">
        {navLinks.map((item, i) => {
          const { Icon, href, title } = item;
          return (
            <div
              key={i}
              className={`flex items-center gap-2 uppercase ${
                pathname === item.href
                  ? "py-1 border-b-[4px] text-blue-600  border-blue-600  "
                  : "py-1 text-slate-600 hover:text-slate-800 px-2  rounded-lg hover:bg-slate-200 "
              }`}
            >
              <Icon className="w-4 h-4" />
              <Link href={item.href}>{item.title}</Link>
            </div>
          );
        })}
      </nav>
      <ToolTip tooltip={"Se déconnecter"} >
        <button
          onClick={Logout}
          className="p-2  rounded-lg hover:text-slate-800 hover:bg-slate-200 transition-all duration-300"
        >
          <LogOut className="w-5 h-5" />
        </button>
      </ToolTip>
    </div>
  );
}
