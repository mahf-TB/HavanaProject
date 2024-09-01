import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight, PlusCircle } from "lucide-react";
import { usePathname } from "next/navigation";

export default function SideBarDropdownLink({ title, items, icon }) {
  const pathname = usePathname();
  const Icon = icon;
  const [isOpen, setIsOpen] = useState(false);

 

  return (
    <Collapsible  open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger
        className={`${
          items.some((item) => pathname === item.href)
            ? "text-blue-600 w-full"
            : "w-full  hover:bg-slate-950 transition-all duration-100 "
        } text-[13px] flex items-center justify-between  rounded-md`}
      >
        <div className="flex items-center space-x-2 p-2 ">
          <Icon className="w-4 h-4" />
          <span>
            {title}
          </span>
        </div>
        <ChevronRight  className={`ml-auto w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-90" : ""
          }`}/>
      </CollapsibleTrigger>
      <CollapsibleContent className="flex flex-col gap-1">
        {items.map((item, i) => {
          return (
            <Link
              key={i}
              href={item.href}
              className={`${
                pathname === item.href
                  ? "bg-blue-600"
                  : "hover:bg-slate-950 transition-all duration-300  "
              } rounded-md text-[13px] flex items-center justify-between pl-6 pr-2 py-2 `}
            >
              <span className="whitespace-nowrap">{item.title}</span>
              <PlusCircle className="w-3 h-3" />
            </Link>
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
}
