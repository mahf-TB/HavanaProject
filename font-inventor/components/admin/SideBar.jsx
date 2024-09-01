"use client";

import {
  BaggageClaim,
  ChartBar,
  ChevronLeft,
  ChevronRight,
  DockIcon,
  Home,
  LogOut,
  ShoppingBag,
  ShoppingBasket,
  Store,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import SideBarDropdownLink from "../(components)/SideBarDropdownLink";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function SideBar() {
  const pathname = usePathname();
  const router = useRouter();

  const Logout = () => {
    Cookies.remove("token");
    Cookies.remove("role");
    router.push("/login");
  };
  const ItemsIventory = [
    { title: "Articles Stock", href: "/admin/inventory/articlesStock" },
    { title: "Régularisation", href: "/admin/inventory/regularisation" },
    { title: "Mouvement Stock", href: "/admin/inventory/mouvements" },
  ];

  const PurchaseItems = [
    { title: "Fournisseurs", href: "/admin/purchase/fournisseurs" },
    { title: "Commandes", href: "/admin/purchase/commandes" },
    {
      title: "Réception commandes",
      href: "/admin/purchase/receptions-commande",
    },
    {
      title: "Historique des achats",
      href: "/admin/purchase/historique-achat",
    },
  ];

  const SalesItems = [
    { title: "Ventes Produits", href: "/admin/sales/ventes-produits" },
    { title: "Historique de Ventes", href: "/admin/sales/historique" },
    { title: "Facturation", href: "/admin/sales/facturation" },
    { title: "Retours de produits", href: "/admin/sales/retour-produit" },
  ];

  return (
    <div className="w-64 bg-slate-900 min-h-screen text-slate-50 flex flex-col justify-between">
      <div className="flex-col">
        <div className="bg-slate-950 flex flex-col space-x-2 items-center py-4 px-2">
          <Store className="w-16 h-16" />{" "}
          <span className="text-base font-semibold">Havana Quinca</span>
        </div>
        <nav className="flex flex-col gap-3 px-3 py-6">
          <Link
            href="/admin/home/dashboard"
            className={`${
              pathname === "/admin/home/dashboard"
                ? "bg-blue-600"
                : "hover:bg-slate-950 transition-all duration-100  "
            } rounded-md text-[13px] flex items-center space-x-2  p-2`}
          >
            <Home className="w-4 h-4" /> <span>Home</span>
          </Link>

          <SideBarDropdownLink
            icon={BaggageClaim}
            title={"Stocks"}
            items={ItemsIventory}
          />

          <SideBarDropdownLink
            icon={ShoppingBasket}
            title={"Ventes"}
            items={SalesItems}
          />
          <Link
            href="/admin/clients"
            className={`${
              pathname === "/admin/clients"
                ? "bg-blue-600"
                : "hover:bg-slate-950 transition-all duration-100  "
            } rounded-md text-[13px] flex items-center space-x-2  p-2`}
          >
            <Users className="w-4 h-4" /> <span>Clients</span>
          </Link>

          <SideBarDropdownLink
            icon={ShoppingBag}
            title={"Achats Fournisseur"}
            items={PurchaseItems}
          />

          <Link
            href="/admin/raports"
            className={`${
              pathname === "/admin/raports"
                ? "bg-blue-600"
                : "hover:bg-slate-950 transition-all duration-100  "
            } rounded-md text-[13px] flex items-center space-x-2  p-2`}
          >
            <ChartBar className="w-4 h-4" /> <span>Report</span>
          </Link>
          <button
            onClick={Logout}
            className="rounded-md text-[13px] flex items-center space-x-2  p-2 hover:bg-slate-950 transition-all duration-100  "
          >
            <LogOut className="w-4 h-4" /> <span>Se déconnecter</span>
          </button>
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
