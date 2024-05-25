import { CarCatalogue } from "@/components";

const page = () => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col justify-center relative h-80screen w-full">
        <div className="slideIn flex flex-col w-full justify-center items-center gap-6 z-10">
          <h2 className="text-yellow-400 text-lg text-center">NOS VÉHICULES</h2>
          <p className="italic text-5xl text-white mb-20 text-center">
            TROUVEZ LE VÉHICULE{" "}
            <span className="font-bold">QUI VOUS CORRESPOND</span>
          </p>
        </div>
        <div className="z-0 min-h-full absolute top-0 left-0 w-full bg-cover bg-opacity-10 bg-center bg-[url('/images/shop-cars-hero.jpg')] brightness-50"></div>
      </div>
      <div className="py-14 2xl:px-52 xl:px-36">
        <CarCatalogue hidden={false} solded={false} isAdmin={false} />
      </div>
    </section>
  );
};

export default page;
