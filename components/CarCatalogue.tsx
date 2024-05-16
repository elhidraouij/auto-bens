"use client";

import { useEffect, useState } from "react";

import SearchBar from "./SearchBar";
import CarCard from "./CarCard";
import { CarCatalogueProps, CarProps } from "@/types";
import { getCars } from "@/services/carService";
import Pagination from "./Pagination";

const CarCatalogue = ({
  hidden,
  solded,
  isAdmin,
  setShowDialog,
  setCar,
}: CarCatalogueProps) => {
  const [page, setPage] = useState(1);
  const [elementPerPage, setElementPerPage] = useState(6);
  const [model, setModel] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [allCars, setAllCars] = useState<Array<CarProps>>([]);
  const [isDataEmpty, setIsDataEmpty] = useState(true);

  const getCatalogueCars = async () => {
    const cars = await getCars(
      page,
      elementPerPage,
      hidden,
      solded,
      manufacturer,
      model
    );

    setAllCars(cars);
  };

  useEffect(() => {
    setIsDataEmpty(!Array.isArray(allCars) || allCars.length < 1 || !allCars);
  }, [allCars]);

  useEffect(() => {
    getCatalogueCars();
  }, []);

  useEffect(() => {
    getCatalogueCars();
  }, [page, elementPerPage, model, manufacturer]);

  return (
    <div className="carcatalogue lg:w-4/5">
      <h1 className="text-4xl font-extrabold">Notre catalogue de voitures</h1>
      <p>Découvrez les voitures qui vous conviennent</p>

      <div className="carcatalogue__filters mt-5">
        <SearchBar
          setPage={setPage}
          setModel={setModel}
          setManufacturer={setManufacturer}
          hidden={hidden}
          solded={solded}
        />
      </div>

      {isDataEmpty ? (
        <div className="flex justify-center items-center mt-5">
          <h2 className="text-black text-xl font-bold text-center">
            Aucun voiture trouvée
          </h2>
        </div>
      ) : (
        <section className="flex flex-col my-8 gap-6">
          <div className="gap-6 flex md:flex-row flex-wrap flex-col md:items-center">
            {allCars.map((car: CarProps) => (
              <CarCard
                car={car}
                isAdmin={isAdmin}
                setCar={setCar}
                setShowModal={setShowDialog}
                key={car.id}
              />
            ))}
          </div>
          <div className="flex flex-col items-center">
            <Pagination page={page} setPage={setPage} />
          </div>
        </section>
      )}
    </div>
  );
};

export default CarCatalogue;
