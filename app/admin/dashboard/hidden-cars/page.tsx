"use client";

import { CarCatalogue } from "@/components";
import AddCar from "@/components/AddCar";

const HiddenCars = () => {
  return (
    <div className="flex flex-col bg-slate-100 p-10 text-zinc-700 gap-8">
      <h1 className="text-2xl font-bold">Bienvenue sur votre dashboard !</h1>
      <CarCatalogue hidden={true} solded={false} isAdmin={true} /> 
    </div>
  );
};

export default HiddenCars;
