"use client";

import { CarCatalogue, MessagesDashboard } from "@/components";

const Dashboard = () => {
  return (
    <div className="flex flex-col bg-slate-100 p-10 text-zinc-700 gap-8">
      <h1 className="text-2xl font-bold">Bienvenue sur votre dashboard !</h1>
      <CarCatalogue hidden={false} solded={false} isAdmin={true} />
      <hr />
      <CarCatalogue hidden={true} solded={false} isAdmin={true} />
      <hr />
      <CarCatalogue hidden={false} solded={true} isAdmin={true} />
    </div>
  );
};

export default Dashboard;
