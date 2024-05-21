"use client";

import { useEffect, useState } from "react";

import SearchBar from "./SearchBar";
import CarCard from "./CarCard";
import { CarCatalogueProps, CarProps } from "@/types";
import { getCars } from "@/services/carService";
import Pagination from "./Pagination";
import SkeletonCard from "./SkeletonCard";
import AddCar from "./AddCar";

const CarCatalogue = ({
  title,
  subtitle,
  hidden,
  solded,
  isAdmin,
}: CarCatalogueProps) => {
  const [page, setPage] = useState(1);
  const [elementPerPage, setElementPerPage] = useState(12);
  const [model, setModel] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [allCars, setAllCars] = useState<Array<CarProps>>([]);
  const [isDataEmpty, setIsDataEmpty] = useState(true);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [refreshEvent, setRefreshEvent] = useState<boolean>(false);

  const getCatalogueCars = async () => {
    const data = await getCars(
      page,
      elementPerPage,
      hidden,
      solded,
      manufacturer,
      model
    );

    setLoading(false);

    const totalPage = Math.ceil(data.totalCars / elementPerPage);
    setTotalPage(totalPage);

    setAllCars(data.cars);
  };

  useEffect(() => {
    setIsDataEmpty(!Array.isArray(allCars) || allCars.length < 1 || !allCars);
  }, [allCars]);

  useEffect(() => {
    getCatalogueCars();
  }, []);

  useEffect(() => {
    getCatalogueCars();
  }, [page, elementPerPage, model, manufacturer, refreshEvent]);

  return (
    <div className="carcatalogue px-8">
      <h1 className="text-4xl font-extrabold">
        {title ? title : "Notre catalogue de voitures"}
      </h1>
      <p>
        {subtitle ? subtitle : "Découvrez les voitures qui vous conviennent"}
      </p>

      {isAdmin && (
        <div className="my-5">
          <AddCar setRefreshEvent={setRefreshEvent} />
        </div>
      )}

      <div className="carcatalogue__filters mt-5">
        <SearchBar
          setPage={setPage}
          setModel={setModel}
          setManufacturer={setManufacturer}
          hidden={hidden}
          solded={solded}
        />
      </div>
      {loading ? (
        <section className="flex flex-col my-8 gap-6">
          <div className="gap-6 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {Array.from({ length: elementPerPage }, (_, i) => {
              return <SkeletonCard />;
            })}
          </div>
        </section>
      ) : isDataEmpty ? (
        <div className="flex justify-center items-center mt-5">
          <h2 className="text-black text-xl font-bold text-center">
            Aucun voiture trouvée
          </h2>
        </div>
      ) : (
        <section className="flex flex-col my-8 gap-6">
          <div className="gap-6 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {allCars.map((car: CarProps) => (
              <CarCard
                car={car}
                isAdmin={isAdmin}
                key={car.id}
                setRefreshEvent={isAdmin ? setRefreshEvent : undefined}
              />
            ))}
          </div>
          <div className="flex flex-col items-center">
            <Pagination page={page} setPage={setPage} totalPage={totalPage} />
          </div>
        </section>
      )}
    </div>
  );
};

export default CarCatalogue;
