"use client";

import {
  Bell,
  BookmarkIcon,
  ChevronDown,
  Heart,
  History,
  Settings,
  Users,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import SearchInput from "../(components)/SearchInput";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { UserAuth } from "@/service/auth.service";
import LiveDateTime from "../(components)/LiveDateTime";

export default function Header({ bgColor, textColor }) {
  const router = useRouter();
  const [userData, setUserData] = useState(null); 


  useEffect(() => {
    const fetchUserAuth = async () => {
      try {
        const data = await UserAuth(); 
        setUserData(data) ;
      } catch (error) {
        console.error(
          "Erreur lors de l'authentification de l'utilisateur:",
          error
        );
      }
    };
    fetchUserAuth(); // Appelez votre fonction asynchrone ici
  }, []);

  return (
    <div
      className={
        "text-[13px] h-14 flex items-center justify-between px-8 border-b border-slate-200 shadow-md " +
        bgColor
      }
    >
      <div className="flex gap-3">
        <button>
          <History className="w-5 h-5" />
        </button>
        <SearchInput />
      </div>
      <div>
        {/* icon */}
        <div className="flex gap-2">
         {/* <!-- Show 3 bottom header --> */}
        <div className="flex items-center">
          <LiveDateTime />
        </div>
          {/* <!-- Show 3 bottom header --> */}
          <div
            className={
              "flex border-x  border-gray-400 items-center gap-3 px-2 " +
              textColor
            }
          >
            <button
              type="button"
              className="p-2 hover:text-slate-800 rounded-lg hover:bg-slate-200 transition-all duration-300"
            >
              <BookmarkIcon className=" w-4 h-4" />
            </button>
            <button
              type="button"
              className="p-2 hover:text-slate-800 rounded-lg hover:bg-slate-200 transition-all duration-300"
            >
              <Bell className=" w-4 h-4" />
            </button>
            <button
              type="button"
              className="p-2 hover:text-slate-800 rounded-lg hover:bg-slate-200 transition-all duration-300"
            >
              <Settings className=" w-4 h-4" />
            </button>
          </div>
           {/* <!-- User name and bottom profile --> */}
          <div className="flex px-3  gap-3">
            <button
              type="button"
              className="flex items-center p-2 rounded-lg hover:text-slate-800 hover:bg-slate-200 transition-all duration-300"
            >
              <span className="text-xs font-semibold">{userData?.noms}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <Image
              src="/images/user.jpg"
              width={40}
              height={40}
              alt="photo de profile mini"
              className="w-10 h-10 cursor-pointer hover:border-2 hover:border-blue-600 rounded-full object-cover border border-slate-800 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
