"use client";

import React, { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { LoginUser } from "@/service/auth.service";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function LoginScreen() {
  const router = useRouter();
  const [authState, setAuthState] = useState({
    identifiant: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null); // Ajouter un état pour gérer les erreurs

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(authState);
    try {
      const res = await LoginUser(authState);
      if (res.isActive) {
        Cookies.set("token", res.token, {
          path: "/",
          secure: true,
          sameSite: "Strict",
        });
        document.cookie = `role=${res.role}; path=/`;
        if (res.role === "admin") {
          router.push("/admin/home/dashboard");
        } else {
          router.push("/user/home");
        }
      }
    } catch (error) {
      if (error.response) {
        // Le serveur a répondu avec un code de statut qui ne se situe pas dans la plage des 2xx
        setError(
          `Erreur lors de la connexion : ${error.response.data.message}`
        ); // Afficher l'erreur
        console.log(error.response.data.message);
      } else if (error.request) {
        // La requête a été envoyée mais aucune réponse n'a été reçue
        setError(
          "Aucune réponse reçue du serveur. Veuillez vérifier votre connexion."
        );
        console.log(error.request);
      } else {
        // Quelque chose s'est mal passé lors de la configuration de la requête
        setError(`Erreur lors de la connexion : ${error.message}`);
        console.log(
          "Erreur lors de la configuration de la requête",
          error.message
        );
      }
    }
  };

  return (
    <div className="bg-slate-950 flex flex-col justify-center items-center w-5/12 shadow-lg">
      <div className="p-12 bg-slate-900 shadow-md mx-auto rounded-3xl w-9/12">
        <div className="mb-7 text-center">
          <h1 className="text-3xl font-bold text-slate-500 mb-2">
            Havana Quincaillerie
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="flex overflow-hidden bg-red-100 text-red-500 text-xs  rounded-sm text-center mb-4">
              <div className="bg-red-500 w-2"></div>
              <span className="p-2">{error}</span>
            </div> // Afficher le message d'erreur
          )}
          <div className="space-y-6">
            <input
              onChange={(e) =>
                setAuthState({ ...authState, identifiant: e.target.value })
              }
              type="text"
              placeholder="Nom d'utilisateur ou Email"
              className="w-full text-xs px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400"
            />
            <div className="relative">
              <input
                type={!showPassword ? "password" : "text"}
                onChange={(e) =>
                  setAuthState({ ...authState, password: e.target.value })
                }
                placeholder="Mot de passe"
                className="text-xs px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-yellow-400"
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
              <div className="">
                <button
                  type="submit"
                  className="w-full flex justify-center bg-blue-600 hover:bg-blue-700 text-gray-100 p-2 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500"
                >
                  Se connecter
                </button>
                <div className="flex items-center justify-center mt-1">
                  <div className="text-xs">
                    <a href="#" className="text-slate-200 hover:text-slate-400">
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
                className="text-blue-500 hover:text-blue-600 mx-3"
              >
                BabaCode
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
