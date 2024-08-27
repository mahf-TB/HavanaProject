import { Bell, ChevronDown, History, Settings, Users } from "lucide-react";
import React from "react";
import SearchInput from "../(components)/SearchInput";
import Image from "next/image";

export default function Header() {
  return (
    <div className="text-[13px] bg-slate-100 h-14 flex items-center justify-between px-8 border-b border-slate-200 shadow-md">
      <div className="flex gap-3">
        <button>
          <History className="w-5 h-5" />
        </button>
        <SearchInput />
      </div>
      <div>
        {/* icon */}
        <div className="flex">
          {/* <!-- Show tooltip on bottom --> */}
          <div className="flex border-x border-gray-400 items-center gap-3 px-2">
            <button type="button" class="p-2 rounded-lg hover:bg-slate-200">
              <Users className="text-slate-800 w-4 h-4" />
            </button>
            <button type="button" class="p-2 rounded-lg hover:bg-slate-200">
              <Bell className="text-slate-800 w-4 h-4" />
            </button>
            <button type="button" class="p-2 rounded-lg hover:bg-slate-200">
              <Settings className="text-slate-800 w-4 h-4" />
            </button>
          </div>
          <div className="flex px-3">
            <button type="button" class="flex items-center p-2 rounded-lg hover:bg-slate-200">
              <span className="text-xs font-semibold">MAHEFA</span>
              <ChevronDown className="text-slate-800 w-4 h-4" />
            </button>
            <Image src="/images/user.jpg" width={40} height={40} className="w-10 h-10 rounded-full object-cover border border-slate-800 "/>
          </div>
        </div>
      </div>
    </div>
  );
}
