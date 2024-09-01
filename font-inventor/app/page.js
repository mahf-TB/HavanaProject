"use client";
import LoginScreen from "@/components/Auth/LoginScreen";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// import { useEffect } from 'react';
// import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/login");
  }, [router]);

  return (
    <div className="w-full h-screen flex bg-slate-900">
    <h1>Hello HomePage</h1>
    </div>
  );
}
