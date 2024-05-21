import Image from "next/image";
import React from "react";

const Avis = () => {
  return (
    <div id="avis" className="flex xl:w-3/5 px-8 md:flex-row flex-col gap-4 my-14">
      <div className="flex flex-col items-start gap-4">
        <h2 className="text-yellow-500">LES AVIS</h2>
        <p className="text-4xl italic mb-24">NOS CLIENTS</p>
        <Image
          src={"/images/auto-bens-avis-1.jpg"}
          layout="responsive"
          alt="Avis"
          width={500}
          height={300}
        />
        <div className="flex flex-col md:flex-row gap-4 justify-end items-center w-full">
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-end">
              <span className="text-6xl text-yellow-400 font-bold">4.8</span>
              <span className="text-xl">/5</span>
            </div>
            <span className="text-xs text-zinc-400 min-w-[150px]">
              Sur plus de 30 d'avis
            </span>
          </div>
          <Image
            src={"/images/auto-bens-avis-2.jpg"}
            alt="Avis"
            layout="responsive"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Image
          src={"/images/auto-bens-avis-3.jpg"}
          alt="Avis"
          layout="responsive"
          width={550}
          height={300}
        />
        <div className="flex flex-col md:flex-row gap-4">
          <Image
            src={"/images/auto-bens-avis-4.jpg"}
            alt="Avis"
            layout="responsive"
            width={300}
            height={400}
          />
          <div className="flex flex-col justify-center bg-slate-100 shadow-sm p-16 gap-4">
            <h3 className="text-2xl font-semibold italic">Guillaume</h3>
            <span className="text-zinc-600 text-md italic">
              Hafid a pris en charge mon véhicule et m'a proposé une recherche
              personnalisée à des prix attractifs.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avis;
