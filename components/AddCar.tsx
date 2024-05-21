"use client";

import { useState } from "react";
import CarDialog from "./CarDialog";

interface AddCarProps {
  setRefreshEvent: (fn: (value: boolean) => boolean) => void;
}

const AddCar = ({ setRefreshEvent }: AddCarProps) => {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <>
      {showDialog && (
        <div className="fixed inset-0 z-10 flex flex-col justify-center items-center bg-black bg-opacity-30 max-h-full min-h-screen w-full">
          <CarDialog car={undefined} setShowDialog={setShowDialog} setRefreshEvent={setRefreshEvent}/>
        </div>
      )}
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
    </>
  );
};

export default AddCar;
