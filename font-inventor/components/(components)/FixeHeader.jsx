"use client";
import { LayoutGrid, List, MedalIcon, Plus } from "lucide-react";
import React, { useState } from "react";
import ModalButton from "./ModalButton";
import InputFloat from "./InputFloat";
import { CreateClient } from "@/service/client.service";
import SearchInput from "./SearchInput";

export default function FixeHeader({ fetchClients }) {
  const [client, setClient] = useState({
    nom_client: "",
    adresse: "",
    telephone: "",
  });
  const handleSave = async (e, onClose) => {
    e.preventDefault();

    try {
      const data = await CreateClient(client);
      if (data.status) {
        onClose();
        fetchClients();
        console.log(data);
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
          description={"Veuillez remplir les informations nécessaires"}
          titleModal={"Enregistrement d'un Client"}
        >
          {({ onClose }) => (
            <form onSubmit={(e) => handleSave(e, onClose)}>
              <div className="space-y-5">
                <InputFloat
                  id="noms"
                  title={"Entrer le noms du client"}
                  onChange={(e) =>
                    setClient({ ...client, nom_client: e.target.value })
                  }
                />
                <InputFloat
                  id="numero"
                  title={"Entrer le numéro télephone"}
                  onChange={(e) =>
                    setClient({ ...client, telephone: e.target.value })
                  }
                />
                <InputFloat
                  id="adress"
                  title={"Entrer l'adresse du client"}
                  onChange={(e) =>
                    setClient({ ...client, adresse: e.target.value })
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
            <LayoutGrid className=" w-5 h-5" />
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
