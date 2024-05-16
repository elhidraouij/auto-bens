"use client";

import { useState } from "react";
import CarDialog from "./CarDialog";

export interface AddCarProps {
  setShowDialog: (showDialog: boolean) => void
}

const AddCar = ({ setShowDialog }: AddCarProps) => {

  return (
    <div className="static">
      <button
        onClick={() => {
          setShowDialog(true);
        }}
        className="transition hover:bg-transparent hover:text-yellow-500 px-4 py-2 bg-yellow-500 border border-yellow-500 rounded-lg font-bold"
      >
        Nouvelle voiture
      </button>
    </div>
  );
};

export default AddCar;
