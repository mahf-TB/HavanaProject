import React from 'react'
import { Search } from "lucide-react";


export default function SearchInput() {
  return (
    <form class="flex items-center max-w-sm mx-auto">
    <label for="simple-search" class="sr-only">
      Search
    </label>
    <div class="relative w-full">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <Search className="w-4 h-4 text-gray-500" />
      </div>
      <input
        type="text"
        id="simple-search"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-[13px]  rounded-lg  focus:outline-none  focus:border-blue-500 block w-full ps-10 p-2  "
        placeholder="Search in products..."
        required
      />
    </div>
    
  </form>
  )
}
