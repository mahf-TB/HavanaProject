'use client'
import FournisseurHeader from "@/components/(components)/FournisseurHeader";
import TableFournisseur from "@/components/(components)/Table/TableFournisseur";
import { AllFournisseur } from "@/service/fournisseur.service";
import React, { useEffect, useState } from "react";

export default function Fournisseurs() {
  const [lists, setListFournisseur] = useState([]);

  useEffect(() => {
    getAllFournisseur();
  }, []);

  const getAllFournisseur = async () => {
    const data = await AllFournisseur();
    setListFournisseur(data);
  };

  return (
    <>
      <FournisseurHeader fetchFournisseur={getAllFournisseur} />
      <section className="px-4 mx-5 mt-5">
        <div className="flex flex-col my-5">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <TableFournisseur lists={lists}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
