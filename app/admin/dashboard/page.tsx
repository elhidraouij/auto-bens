"use client";

import { CarCatalogue } from "@/components";
import AddCar from "@/components/AddCar";
import CarDialog from "@/components/CarDialog";
import { CarProps } from "@/types";
import React, { useState } from "react";

const Dashboard = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [car, setCar] = useState<CarProps | undefined>(undefined);

  return (
    <>
      {showDialog && (
        <div className="fixed inset-0 z-10 flex flex-col justify-center items-center bg-black bg-opacity-30 max-h-full min-h-screen w-full">
          <CarDialog car={car} setShowDialog={setShowDialog} />
        </div>
      )}
      <div className="flex flex-col bg-slate-100 p-10 text-zinc-700 gap-8">
        <h1 className="text-2xl font-bold">Bienvenue sur votre dashboard !</h1>
        <AddCar setShowDialog={setShowDialog} />
        <CarCatalogue
          hidden={0}
          solded={0}
          isAdmin={true}
          setCar={setCar}
          setShowDialog={setShowDialog}
        />
        <hr />
        <CarCatalogue
          hidden={1}
          solded={0}
          isAdmin={true}
          setCar={setCar}
          setShowDialog={setShowDialog}
        />
        <hr />
        <CarCatalogue
          hidden={0}
          solded={1}
          isAdmin={true}
          setCar={setCar}
          setShowDialog={setShowDialog}
        />
      </div>
    </>
  );
};

export default Dashboard;
