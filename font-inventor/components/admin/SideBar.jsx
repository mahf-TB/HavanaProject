import {
  BaggageClaim,
  ChartBar,
  ChevronLeft,
  ChevronRight,
  DockIcon,
  Home,
  ShoppingBag,
  ShoppingBasket,
  Store,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import SideBarDropdownLink from "../(components)/SideBarDropdownLink";

export default function SideBar() {
  const ItemsIventory = [
    { title: "Articles Stock", href: "" },
    { title: "Régularisation", href: "" },
    { title: "Mouvement Stock", href: "" },
  ];

  return (
    <div className="w-56 bg-slate-900 min-h-screen text-slate-50 flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="bg-slate-950 flex flex-col space-x-2 items-center py-4 px-2">
          <Store className="w-16 h-16"/> <span className="text-base font-semibold">Havana Quinca</span>
        </div>
        <nav className="flex flex-col gap-5 px-3 py-6">
          <Link
            href="#"
            className="text-[13px] flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md"
          >
            <Home className="w-4 h-4" /> <span>Home</span>
          </Link>
          
          <SideBarDropdownLink
            icon={BaggageClaim}
            title={"Inventory"}
            items={ItemsIventory}
          />

          <button className="text-[13px] flex items-center space-x-2 p-2">
            <ShoppingBasket className="w-4 h-4" />
            <span>Sales</span>
          </button>

          <button className="text-[13px] flex items-center space-x-2  p-2">
            <ShoppingBag className="w-4 h-4" /><span>Purchase</span>
          </button>

          <Link href="#" className="text-[13px] flex items-center space-x-2  p-2">
            <ChartBar className="w-4 h-4" /> <span>Report</span>
          </Link>

          <Link href="#" className="text-[13px] flex items-center space-x-2  p-2">
            <DockIcon className="w-4 h-4" /> <span>Documents</span>
          </Link>

        </nav>
      </div>
      <div className="flex flex-col">
        <div className="bg-slate-950 flex  items-center justify-center py-4 px-2">
          <ChevronLeft className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
