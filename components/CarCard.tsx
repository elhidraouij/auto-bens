"use client";

import Image from "next/image";
import { useState } from "react";

import { CarProps } from "@/types";
import CarDialog from "./CarDialog";

interface CarCardProps {
  car: CarProps;
  isAdmin?: boolean;
  setRefreshEvent?: (fn: (value: boolean) => boolean) => void;
}

const CarCard = ({ car, isAdmin, setRefreshEvent }: CarCardProps) => {
  const [showDialog, setShowDialog] = useState(false);
  const {
    year,
    brand,
    model,
    transmission,
    fuel,
    mileage,
    price,
    image,
    capacity,
    hidden,
    solded,
  } = car;
  return (
    <>
      {isAdmin && showDialog && setRefreshEvent && (
        <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-black bg-opacity-30 max-h-full min-h-screen w-full">
          <CarDialog
            car={car}
            setShowDialog={setShowDialog}
            setRefreshEvent={setRefreshEvent}
          />
        </div>
      )}
      <div
        className={
          "p-8 rounded-md bg-zinc-50 hover:bg-zinc-100 hover:shadow-md" +
          (isAdmin ? " cursor-pointer" : "")
        }
        onClick={() => {
          if (isAdmin) {
            setShowDialog(true);
          }
        }}
      >
        <div className="flex flex-row justify-between relative">
          <h2 className="font-bold">
            {brand} {model} {year}
          </h2>
          <div className="flex flex-col items-end gap-2 absolute right-0">
            {solded && (
              <h2 className="text-xs text-zinc-800 px-2 py-1 rounded-md bg-yellow-500 font-semibold -skew-x-12">
                Vendue
              </h2>
            )}
            {hidden && (
              <h2 className="text-xs text-zinc-800 px-2 py-1 rounded-md bg-yellow-500 font-semibold -skew-x-12">
                Désactivée
              </h2>
            )}
          </div>
        </div>

        <p className="flex mt-2">
          <span className="text-2xl font-extrabold">{price}</span>
          <span className="text-md">€</span>
        </p>
        <p className="flex">
          <span className="text-md">{mileage} km</span>
        </p>

        <div className="relative w-full h-40 my-3 object-contain">
          <Image
            src={`/images/cars/${image}`}
            alt={`${brand} ${model}`}
            fill
            priority
            className="object-contain"
          />
        </div>

        <div className="flex w-full mt-2">
          <div className="flex flex-row gap-8 w-full justify-between text-gray">
            <div className="flex flex-col justify-center items-center gap-2">
              <Image
                src="/images/steering-wheel.svg"
                width={20}
                height={20}
                alt="steering wheel"
              />
              <p className="text-md text-center">{transmission}</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/images/tire.svg" width={20} height={20} alt="tire" />
              <p className="text-md text-center">{capacity}L</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/images/gas.svg" width={20} height={20} alt="gas" />
              <p className="text-md text-center">{fuel}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarCard;
