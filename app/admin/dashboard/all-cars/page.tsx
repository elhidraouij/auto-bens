"use client";

import { CarCatalogue } from "@/components";
import AddCar from "@/components/AddCar";

const AllCars = () => {
  const title = "Gérez vos voitures en ventes";
  const subtitle = "Ajoutez, modifier, supprimez des voitures";
  return (
    <div className="flex flex-col bg-slate-100 p-10 text-zinc-700 gap-8">
      <h1 className="text-2xl font-bold">Bienvenue sur votre dashboard !</h1>
      <CarCatalogue
        title={title}
        subtitle={subtitle}
        hidden={0}
        solded={0}
        isAdmin={true}
      />
    </div>
  );
};

export default AllCars;
