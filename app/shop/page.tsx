"use client";

import { CarCatalogue, Hero } from "@/components";

export default function Shop() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 px-8 flex flex-col items-center">
        <CarCatalogue hidden={0} solded={0} isAdmin={false}/>
      </div>
    </main>
  );
}
