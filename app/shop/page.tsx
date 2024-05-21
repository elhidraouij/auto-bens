"use client";

import { Avis, CarCatalogue, Hero, NosForces } from "@/components";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Shop() {
  const expertiseRef = useRef(null)
  const isExpertiseInView = useInView(expertiseRef, {once: true, margin: "25% 0px 0px 0px"})
  const fiabiliteRef = useRef(null)
  const isFiabiliteInView = useInView(fiabiliteRef, {once: true, margin: "25% 0px 0px 0px"})

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 flex flex-col items-center">
        <Avis />
        <div className="relative flex flex-row justify-end w-full">
          <div className="absolute top-0 right-0 min-h-full bg-slate-50 w-2/5 -skew-x-12"></div>
          <div ref={expertiseRef} className={`z-10 relative top-0 r-0 text-yellow-500 opacity-40 text-[200px] leading-none font-bold italic ${isExpertiseInView && 'slide-left-to-right'}`}>
            EXPERTISE
          </div>
        </div>
        <NosForces />
        <div className="relative flex flex-row justify-start w-full mb-10">
          <div className="absolute top-0 left-0 min-h-full bg-slate-50 w-2/5 -skew-x-12"></div>
          <div ref={fiabiliteRef} className={`z-10 relative top-0 text-yellow-500 opacity-40 text-[220px] leading-none font-bold italic ${isFiabiliteInView && 'slide-right-to-left'}`}>
            FIABILITE
          </div>
        </div>
        <CarCatalogue hidden={0} solded={0} isAdmin={false} title="RESERVEZ VOTRE VOITURE MAINTENANT"/>
      </div>
    </main>
  );
}
