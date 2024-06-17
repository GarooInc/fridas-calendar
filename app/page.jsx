import React from "react";
import Navbar from "@/components/NavBar/Navbar";
import Events from "@/components/Events/Events";
import { IoLogoWhatsapp } from "react-icons/io5";


export default function Home() {
  
  return (
    <main className="w-full isolate min-h-screen bg-white flex flex-col">
      <div className="flex-grow">
        <Navbar />
        <div className="flex flex-col">
          <div className="flex justify-between items-end p-4">
            <div className="flex flex-col">
              <h1 className="lg:text-6xl text-4xl font-bold text-purple m-0">AGOSTO</h1>
              <h2 className="lg:text-4xl text-2xl font-bold text-black">EN FRIDAS</h2>
            </div>
            <div className="flex justify-end items-center">
              <span className="lg:text-4xl text-2xl font-bold text-gray-500">2024</span>
            </div>
          </div>
          <Events />
        </div>
      </div>
      <div className="sticky bottom-0 w-full bg-purple flex flex-col justify-center items-center p-4 hover:bg-hotpink cursor-pointer">
        <h2 className="lg:text-xl text-lg font-bold text-white uppercase">Reservaciones</h2>
        <div className="flex justify-center items-center gap-2">
          <IoLogoWhatsapp className="lg:text-md text-sm text-white" />
          <span className="lg:text-md text-sm text-white">+502 1234 5678</span>
        </div>
      </div>
    </main>
  );
}
