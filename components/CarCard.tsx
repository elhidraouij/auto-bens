"use client";

import Image from "next/image";

import { CarProps } from "@/types";

interface CarCardProps {
  car: CarProps;
  isAdmin?: boolean;
  setShowModal?: (showModal: boolean) => void;
  setCar?: (car: CarProps) => void;
}

const CarCard = ({ car, isAdmin, setShowModal, setCar }: CarCardProps) => {
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
    <div
      className={
        "p-8 rounded-md bg-zinc-50 hover:bg-zinc-100 hover:shadow-md" +
        (isAdmin ? " cursor-pointer" : "")
      }
      onClick={() => {
        if (isAdmin && setCar && setShowModal) {
          setCar(car);
          setShowModal(true);
        }
      }}
    >
      <div className="flex flex-row justify-between relative">
        <h2 className="font-bold">
          {brand} {model} {year}
        </h2>
        <div className="flex flex-col items-end gap-2 absolute right-0">
          {solded === 1 && (
            <h2 className="text-xs text-zinc-800 px-2 py-1 rounded-md bg-yellow-500 font-semibold -skew-x-12">
              Vendue
            </h2>
          )}
          {hidden === 1 && (
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
  );
};

export default CarCard;
