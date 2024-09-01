"use client"
import FixeHeader from "@/components/(components)/FixeHeader";
import TableClient from "@/components/(components)/Table/TableClient";
import { AllClients } from "@/service/client.service";
import React, { useEffect, useState } from "react";

export default function Clients() {
  
  const [listClient, setListClient] = useState([]);

  const getAllClients = async () => {
    const data = await AllClients();
    console.log(data);
    setListClient(data);
  };

  useEffect(() => {
    getAllClients();
  }, []);


  return (
    <>
        <FixeHeader fetchClients={getAllClients}/>
      <section className="px-4 mx-5 mt-5">
        <div className="flex flex-col my-5">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <TableClient listClient={listClient}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
