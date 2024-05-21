"use client";

import { CarCatalogue, MessagesDashboard } from "@/components";

const Dashboard = () => {
  return (
    <div className="flex flex-col bg-slate-100 p-10 text-zinc-700 gap-8">
      <h1 className="text-2xl font-bold">Bienvenue sur votre dashboard !</h1>
      <CarCatalogue hidden={0} solded={0} isAdmin={true} />
      <hr />
      <CarCatalogue hidden={1} solded={0} isAdmin={true} />
      <hr />
      <CarCatalogue hidden={0} solded={1} isAdmin={true} />
    </div>
  );
};

export default Dashboard;
