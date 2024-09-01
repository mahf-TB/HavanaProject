"use client";

import { LayoutGrid, List, Plus } from "lucide-react";

import React, { useState } from "react";
import ModalButton from "./ModalButton";
import InputFloat from "./InputFloat";
import SearchInput from "./SearchInput";

import { CreateFournisseur } from "@/service/fournisseur.service";
import { DialogClose } from "@radix-ui/react-dialog";

export default function FournisseurHeader({ fetchFournisseur }) {
  const [fournisseur, setFournisseur] = useState({
    noms_fournisseur: "",
    adresse: "",
    telephone: "",
    email: "",
  });
  const [error, setError] = useState(null);

  const handleSave = async (e, onClose) => {
    e.preventDefault();
    try {
      const data = await CreateFournisseur(fournisseur);
      if (data.status === 401) {
        console.log("data error", data);
        setError(data.message)
      } else {
        onClose();
        fetchFournisseur();
        console.log("dataaaaaaa", data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between bg-white  py-3 px-5 shadow">
      <div className="flex gap-3">
        {/* Nouveau add */}
        <ModalButton
          button={ButtonModal}
          titleModal={"Enregistrement d'un Fournisseur"}
        >
          {({ onClose }) => (
            <form onSubmit={(e) => handleSave(e, onClose)}>
              {error && (
                <div className="flex overflow-hidden bg-red-100 text-red-500 text-xs  rounded-sm text-center mb-4">
                  <div className="bg-red-500 w-2"></div>
                  <span className="p-2">{error}</span>
                </div> // Afficher le message d'erreur
              )}
              <div className="space-y-5">
                <InputFloat
                  id="noms_fournisseur"
                  title={"Entrer le noms du Entreprise"}
                  required={true}
                  onChange={(e) =>
                    setFournisseur({
                      ...fournisseur,
                      noms_fournisseur: e.target.value,
                    })
                  }
                />
                <InputFloat
                  id="numero"
                  title={"Entrer le numéro télephone"}
                  required={true}
                  onChange={(e) =>
                    setFournisseur({
                      ...fournisseur,
                      telephone: e.target.value,
                    })
                  }
                />
                <InputFloat
                  id="email"
                  title={"Entrer l' email du Entrepise/Fournisseur"}
                  onChange={(e) =>
                    setFournisseur({ ...fournisseur, email: e.target.value })
                  }
                />
                <InputFloat
                  id="adress"
                  title={"Entrer l'adresse du Entreprise"}
                  required={true}
                  onChange={(e) =>
                    setFournisseur({ ...fournisseur, adresse: e.target.value })
                  }
                />
              </div>
              <div className="flex mt-8">
                <div
                  onClick={onClose}
                  className=" cursor-pointer middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Annuler
                </div>

                <button
                  type="submit"
                  className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Enregistrer
                </button>
              </div>
            </form>
          )}
        </ModalButton>
        {/* Layout */}
        <div className="flex rounded-md overflow-hidden">
          <button
            type="button"
            className="p-2 hover:text-slate-800  bg-slate-400 transition-all duration-300"
          >
            <List className=" w-5 h-5" />
          </button>
          <button
            type="button"
            className="p-2 hover:text-slate-800  bg-slate-200 transition-all duration-300"
          >
            <LayoutGrid className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div>
        <SearchInput />
      </div>
    </div>
  );
}

const ButtonModal = () => {
  return (
    <div className="p-2 flex items-center gap-1 text-slate-50 bg-blue-600 rounded-md hover:bg-blue-700 transition-all duration-300">
      <Plus className=" w-4 h-4" />
      <span className="text-xs">Nouveaux</span>
    </div>
  );
};
