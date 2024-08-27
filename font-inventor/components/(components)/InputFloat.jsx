import React from "react";

export default function InputFloat() {
  return (
    <div class="relative">
      <input
        autocomplete="on"
        id="email"
        name="email"
        type="text"
        class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
        placeholder="Email address"
      />
      <label
        for="email"
        class="absolute left-0 -top-3.5 text-gray-500 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        Nom d'utilisateur ou Email
      </label>
    </div>
  );
}
