import React from "react";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight, PlusCircle } from "lucide-react";

export default function SideBarDropdownLink({ title, items, icon }) {
  const Icon = icon;
  return (
    <Collapsible>
      <CollapsibleTrigger className="text-[13px] flex items-center justify-between w-full">
        <div className="flex items-center space-x-2 p-2 ">
          <Icon className="w-4 h-4" />
          <span>{title}</span>
        </div>
        <ChevronRight className="w-4 h-4" />
        {/* <ChevronDown className="w-4 h-4" /> */}
      </CollapsibleTrigger>
      <CollapsibleContent>
        {items.map((item, i) => {
          return (
            <Link
              key={i}
              href={item.href}
              className="text-[13px] flex items-center justify-between pl-6 pr-2 py-2 rounded-md hover:bg-slate-950 transition-all duration-300"
            >
              <span>{item.title}</span>
              <PlusCircle className="w-3 h-3" />
            </Link>
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
}
