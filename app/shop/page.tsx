"use client";

import { Avis, CarCatalogue, Hero, NosForces, Separateur } from "@/components";

export default function Shop() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 flex flex-col items-center">
        <Avis />
        <div className="relative flex flex-row justify-end w-full">
          <div className="absolute top-0 right-0 min-h-full bg-slate-50 w-2/5 -skew-x-12"></div>
          <div className="z-10 relative top-0 r-0 text-yellow-500 opacity-40 text-[200px] leading-none font-bold italic">
            EXPERTISE
          </div>
        </div>
        <NosForces />
        <div className="relative flex flex-row justify-start w-full mb-10">
          <div className="absolute top-0 left-0 min-h-full bg-slate-50 w-2/5 -skew-x-12"></div>
          <div className="z-10 relative top-0 r-0 text-yellow-500 opacity-40 text-[220px] leading-none font-bold italic">
            FIABILITE
          </div>
        </div>
        <CarCatalogue hidden={0} solded={0} isAdmin={false} title="RESERVEZ VOTRE VOITURE MAINTENANT"/>
      </div>
    </main>
  );
}
