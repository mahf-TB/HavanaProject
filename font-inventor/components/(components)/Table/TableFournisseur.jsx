"use client";

import { BaggageClaim, SquareArrowOutUpRight, Trash2 } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "primereact/resources/themes/tailwind-light/theme.css";
import { AllFournisseur } from "@/service/fournisseur.service";
import ScaleLoader from "../Spinner/ScaleLoader";

export default function TableFournisseur({ lists }) {
  // const [first, setFirst] = useState(0);
  // const [rows, setRows] = useState(10);

  // const onPageChange = (event) => {
  //     setFirst(event.first);
  //     setRows(event.rows);
  // };

  return (
    <>
      <table className="min-w-full divide-y divide-gray-200 ">
        <thead className="bg-blue-600 uppercase ">
          <tr>
            <th
              scope="col"
              className="p-3 text-xs font-normal text-left rtl:text-right text-gray-100 dark:text-gray-400"
            >
              <div className="flex items-center gap-x-3">
                <span>ID</span>
              </div>
            </th>

            <th
              scope="col"
              className="px-4 py-2 text-xs font-normal text-left rtl:text-right text-gray-100 dark:text-gray-400"
            >
              Noms & Email
            </th>

            <th
              scope="col"
              className="px-4 py-2 text-xs font-normal text-left rtl:text-right text-gray-100 dark:text-gray-400"
            >
              Adresse
            </th>

            <th
              scope="col"
              className="px-4 py-2 text-xs font-normal text-left rtl:text-right text-gray-100 dark:text-gray-400"
            >
              Telephone
            </th>

            <th
              scope="col"
              className="px-4 py-2 text-xs font-normal text-left rtl:text-right text-gray-100 dark:text-gray-400"
            >
              Date de Création
            </th>

            <th
              scope="col"
              className="rtl:text-right py-2 px-3 text-gray-100  text-xs "
            >
              <span className="">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
          {lists &&
            lists.map((items, index) => (
              <TableBody key={index} items={items} />
            ))}
        </tbody>
      </table>
      <div className="bg-slate-50 text-center border-t p-2 border-gray-200 ">
        <ScaleLoader />
      </div>
    </>
  );
}

const TableBody = ({ items }) => {
  return (
    <tr className="hover:bg-slate-200">
      <td className="px-4 py-3 text-xs font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <span>F0/{items.id}</span>
        </div>
      </td>
      <td className="px-4 py-3 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <Image
            className="object-cover w-8 h-8 rounded-full"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
            width={50}
            height={50}
          />
          <div>
            <h2 className="text-xs font-medium text-gray-800 dark:text-white ">
              {items?.noms_fournisseur}
            </h2>
            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
              {items?.email}
            </p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {items?.adresse}
      </td>
      <td className="px-4 py-3 text-xs font-medium text-gray-700 whitespace-nowrap">
        {/* <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
          <Check className="w-4 h-4" />
          <h2 className="text-xs font-normal">Paid</h2>
        </div> */}
        {items?.telephone}
      </td>
      <td className="px-4 py-3 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {moment(items?.updatedAt).format("DD MMM YYYY")}
      </td>
      <td className="px-4 py-3 text-xs whitespace-nowrap ">
        <div className="flex items-center justify-center gap-2">

          <button className="flex items-center gap-1  text-blue-500 transition-colors duration-200 hover:text-blue-600 focus:outline-none">
            <SquareArrowOutUpRight className="w-4 h-4" /> Modifier
          </button>
          <button className="flex items-center gap-1 text-red-400 transition-colors duration-200 hover:text-red-500 focus:outline-none">
            <Trash2 className="w-4 h-4" /> Supprimer
          </button>
          <button className="flex items-center gap-1  text-yellow-500 transition-colors duration-200 hover:text-yellow-600 focus:outline-none">
            <BaggageClaim className="w-4 h-4" /> Commander
          </button>
        </div>
      </td>
    </tr>
  );
};
