import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col relative h-80screen w-full">
        <div className="flex flex-col min-h-full w-full justify-center items-center gap-6 z-10">
          <h2 className="text-yellow-400 text-lg text-center">
            QUI SOMME NOUS ?
          </h2>
          <p className="italic text-5xl text-white mb-20 text-center">
            APPRENEZ À <span className="font-bold">NOUS CONNAÎTRE</span>
          </p>
        </div>
        <div className="z-0 min-h-full absolute top-0 left-0 w-full bg-cover bg-opacity-10 bg-top bg-[url('/images/aboutus-hero.jpg')] brightness-50"></div>
      </div>
      <div className="flex flex-col overflow-hidden">
        <div className="relative flex gap-10 lg:flex-row py-24 flex-col justify-center items-center px-8 md:px-[100px] xl:px-[450px]">
          <div className="absolute -right-24 top-0 z-0 w-1/2 bg-slate-50 -skew-x-12 min-h-full overflow-hidden"></div>
          <div className="z-20 absolute -bottom-0 left-0 leading-[0.82] space tracking-wider font-bold text-yellow-500 opacity-30 italic text-[200px] overflow-hidden">
            PASSION
          </div>
          <div className="z-10 flex flex-col gap-6">
            <h2 className="text-yellow-400 text-lg">NOS ENGAGEMENTS</h2>
            <p className="italic text-4xl">LA QUALITÉ</p>
            <p className="text-lg leading-loose">
              Chez Autobens, la qualité est bien plus qu'un engagement,{" "}
              <strong className="text-yellow-500">c'est une promesse</strong>.
              Chaque véhicule que nous proposons a été rigoureusement inspecté
              et certifié pour garantir une performance optimale et une
              fiabilité sans faille. Notre équipe d'experts passionnés veille à
              ce que chaque voiture réponde aux standards les plus élevés,
              offrant ainsi à nos clients une tranquillité d'esprit totale.
              Choisir Autobens, c'est choisir l'excellence et la durabilité,
              pour que chaque trajet soit une expérience unique et sécurisée.
              Avec Autobens, roulez en toute confiance, roulez vers l'avenir.
            </p>
          </div>
          <Image
            className="z-10"
            src={"/images/qualite-autobens.jpg"}
            alt="Qualité"
            height={600}
            width={400}
          />
        </div>
        <div className="relative flex gap-10 lg:flex-row-reverse py-24 flex-col-reverse justify-center items-center px-8 md:px-[100px] xl:px-[450px]">
          <div className="absolute -left-48 top-0 z-0 w-1/2 bg-zinc-900 -skew-x-12 min-h-full overflow-hidden"></div>
          <div className="z-20 absolute -bottom-0 right-0 leading-[0.82] space tracking-wider font-bold text-yellow-500 opacity-30 italic text-[200px] overflow-hidden">
            EXCELLENCE
          </div>
          <div className="z-10 flex flex-col gap-6">
            <h2 className="text-yellow-400 text-lg">NOS ENGAGEMENTS</h2>
            <p className="italic text-4xl">LE PRIX</p>
            <p className="text-lg leading-loose">
              Chez Autobens, nous croyons que la qualité ne doit jamais se faire au détriment
              du prix. Nous nous engageons à offrir à nos clients des véhicules
              à des tarifs compétitifs, transparents et sans surprise. Grâce à
              notre réseau et à notre expertise en négociation, nous sommes en
              mesure de vous proposer les meilleures offres du marché. Chaque
              prix chez Autobens est soigneusement étudié pour vous garantir{" "}
              <strong className="text-yellow-500">
                un excellent rapport qualité-prix
              </strong>
              . Faites confiance à Autobens pour des économies substantielles
              sans compromis sur l'excellence.
            </p>
          </div>
          <Image
            className="z-10"
            src={"/images/prix-autobens.jpg"}
            alt="Prix"
            height={600}
            width={400}
          />
        </div>
        <div className="relative flex gap-10 lg:flex-row py-24 flex-col justify-center items-center px-8 md:px-[100px] xl:px-[450px]">
          <div className="absolute -right-24 top-0 z-0 w-1/2 bg-slate-50 -skew-x-12 min-h-full overflow-hidden"></div>
          <div className="z-20 absolute -bottom-0 left-0 leading-[0.82] space tracking-wider font-bold text-yellow-500 opacity-30 italic text-[200px] overflow-hidden">
            SÉLECTION
          </div>
          <div className="z-10 flex flex-col gap-6">
            <h2 className="text-yellow-400 text-lg">NOS ENGAGEMENTS</h2>
            <p className="italic text-4xl">LE CHOIX</p>
            <p className="text-lg leading-loose">
              Chez Autobens, le choix est au cœur de notre engagement envers
              vous. Nous proposons une vaste gamme de véhicules, des citadines
              économiques aux SUV spacieux, en passant par des berlines
              élégantes et des voitures de sport performantes. Que vous
              recherchiez un modèle neuf ou d'occasion, notre inventaire
              diversifié répond à toutes les préférences et besoins. Notre
              équipe de spécialistes est à votre disposition pour vous guider et
              vous aider à trouver la voiture qui correspond parfaitement à
              votre style de vie. Avec Autobens, profitez de la liberté de
              choisir sans limites et{" "}
              <strong className="text-yellow-500">
                découvrez le véhicule de vos rêves
              </strong>
              .
            </p>
          </div>
          <Image
            className="z-10"
            src={"/images/choix-autobens.jpg"}
            alt="Choix"
            height={600}
            width={400}
          />
        </div>
      </div>
    </section>
  );
};

export default page;
