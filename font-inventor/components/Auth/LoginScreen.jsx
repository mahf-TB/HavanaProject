"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-slate-50  flex flex-col justify-center items-center w-5/12 shadow-lg">
      <div className="p-12 bg-white shadow-md mx-auto rounded-3xl w-9/12">
        <div className="mb-7 text-center">
          <h1 className="text-3xl font-bold text-yellow-500 mb-2">
            Havana Quincaillerie
          </h1>
        </div>
        <div className="space-y-6">
          <div className="space-y-6">
            <input
              className=" w-full text-xs  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400"
              type=""
              placeholder="Nom d'utilisateur ou Email"
            />
            <div className="relative">
              <input
                placeholder="Mot de passe"
                type={!showPassword ? "password" : "text"}
                className="text-xs  px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-yellow-400"
              />
              <div className="flex items-center absolute inset-y-0 right-0 mr-3 text-gray-600 text-sm leading-5 cursor-pointer">
                {showPassword ? (
                  <EyeOff
                    onClick={() => setShowPassword(false)}
                    className="w-4 h-4"
                  />
                ) : (
                  <Eye
                    onClick={() => setShowPassword(true)}
                    className="w-4 h-4"
                  />
                )}
              </div>
            </div>

            <div>
              <div className="mx-8">
                <button
                  type="submit"
                  className="w-full flex justify-center bg-yellow-600  hover:bg-yellow-700 text-gray-100 p-2  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
                >
                  <Link href="/admin/home/dashboard">Se connecter</Link>
                </button>
                <div className="flex items-center justify-center mt-1">
                <div className="text-xs">
                  <a href="#" className="text-yellow-900  hover:text-yellow-600">
                    Mot de passe oublié?
                  </a>
                </div>
              </div>
              </div>
              
            </div>
          </div>
          <div className="mt-auto text-center text-gray-600 text-xs">
            <span>
              Copyright © 2023-2024
              <a
                href="https://codepen.io/uidesignhub"
                target="_blank"
                title="Codepen aji"
                className="text-purple-500 hover:text-purple-600 mx-3"
              >
                BabaCode
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
