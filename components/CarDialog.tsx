"use client";

import {
  ChangeEvent,
  FormEvent,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";

import { fuelList, transmissionList } from "@/constants";
import { CarDialogProps } from "@/types";
import { addCar, updateCar, deleteCar } from "@/services/carService";

const CarDialog = ({ car, setShowDialog, setRefreshEvent }: CarDialogProps) => {
  const [id, setId] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [fuel, setFuel] = useState(fuelList[0]);
  const [transmission, setTransmission] = useState(transmissionList[0]);
  const [image, setImage] = useState<File | null>(null);
  const [mileage, setMileage] = useState("");
  const [price, setPrice] = useState("");
  const [capacity, setCapacity] = useState("");
  const [solded, setSolded] = useState(false);
  const [hidden, setHidden] = useState(false);

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (car) {
      setEdit(true);
      setId(car.id!.toString());
      setBrand(car.brand);
      setModel(car.model);
      setYear(car.year.toString());
      setFuel(car.fuel.toString());
      setTransmission(car.transmission);
      setMileage(car.mileage.toString());
      setPrice(car.price.toString());
      setCapacity(car.capacity.toString());
      setSolded(car.solded);
      setHidden(car.hidden);
    }
  }, []);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleDelete = async () => {
    if (!edit || !car || !id || id === "") {
      return;
    }
    const form = new FormData();
    form.append("id", id);

    try {
      deleteCar(form);
    } catch (err) {
      console.error(err);
      return;
    }

    setShowDialog(false);
    setRefreshEvent((value) => !value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData();
    if (edit) form.append("id", id);
    form.append("brand", brand);
    form.append("model", model);
    form.append("year", year);
    form.append("fuel", fuel);
    form.append("transmission", transmission);
    if (image) {
      form.append("image", image);
    }
    form.append("mileage", mileage);
    form.append("price", price);
    form.append("capacity", capacity);
    form.append("hidden", hidden.toString());
    form.append("solded", solded.toString());

    try {
      if (edit) {
        await updateCar(form);
      } else {
        await addCar(form);
      }
    } catch (err) {
      console.error(err);
      return;
    }

    setShowDialog(false);
    setRefreshEvent((value) => !value);
  };

  return (
    <div className="relative bg-white rounded-lg shadow ">
      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
        <h3 className="text-lg font-semibold text-gray-900 ">
          {edit ? `Modifier ${brand} ${model}` : "Ajouter une voiture"}
        </h3>
        <button
          onClick={() => {
            setShowDialog(false);
          }}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">CFermer le dialog</span>
        </button>
      </div>
      <form className="p-4 md:p-5" onSubmit={handleSubmit}>
        <div className="grid gap-4 mb-4 grid-cols-2">
          <div className="col-span-2">
            <label
              htmlFor="brand"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Fabricant
            </label>
            <input
              type="text"
              name="brand"
              id="brand"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
              placeholder="Tape le nom du fabricant"
              value={brand}
              onChange={(e) => {
                setBrand(e.target.value);
              }}
              required
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="model"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Modèle
            </label>
            <input
              type="text"
              name="model"
              id="model"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none w-full p-2.5"
              placeholder="Tape le modèle de la voiture"
              value={model}
              onChange={(e) => {
                setModel(e.target.value);
              }}
              required
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="year"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Année
            </label>
            <input
              type="number"
              name="year"
              id="year"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="2006"
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
              required
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="mileage"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Kilométrage
            </label>
            <input
              type="number"
              name="mileage"
              id="mileage"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2."
              placeholder="200000"
              value={mileage}
              onChange={(e) => {
                setMileage(e.target.value);
              }}
              required
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="fuel"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Energie
            </label>
            <select
              id="fuel"
              value={fuel}
              onChange={(e) => {
                setFuel(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
            >
              {fuelList.map((fuel) => (
                <option key={fuel} value={fuel}>
                  {fuel}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="transmission"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Transmission
            </label>
            <select
              id="transmission"
              value={transmission}
              onChange={(e) => {
                setTransmission(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
            >
              {transmissionList.map((transmission) => (
                <option key={transmission} value={transmission}>
                  {transmission}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="capacity"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Réservoir {"("}en litres{")"}
            </label>
            <input
              type="number"
              name="capacity"
              id="capacity"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="200000"
              value={capacity}
              onChange={(e) => {
                setCapacity(e.target.value);
              }}
              required
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Prix {"("}en €{")"}
            </label>
            <input
              type="number"
              name="price"
              id="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="2006"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              required
            />
          </div>
          <div className="col-span-2 sm:col-span-2">
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Image
            </label>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="image"
                className="flex flex-col items-center justify-center w-full h-[120px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center">
                  {image ? (
                    <p className="mb-2 text-sm text-gray-500 ">
                      {image.name}
                    </p>
                  ) : (
                    <>
                      <svg
                        className="w-8 h-8 text-gray-500 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 ">
                        <span className="font-semibold">
                          Clique pour déposer
                        </span>{" "}
                        ou drag and drop
                      </p>
                      <p className="text-xs text-gray-500 ">
                        PNG (MAX. 800x400px)
                      </p>
                    </>
                  )}
                </div>
                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={solded}
                onChange={(e) => {
                  setSolded(e.target.checked);
                }}
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 ">
                Vendue
              </span>
            </label>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={hidden}
                onChange={(e) => {
                  setHidden(e.target.checked);
                }}
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300   peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 ">
                Désactivée
              </span>
            </label>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <button
            type="submit"
            className="text-white inline-flex items-center bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            <svg
              className="me-1 -ms-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"></path>
            </svg>
            {edit ? "Modifier la voiture" : "Ajouter la nouvelle voiture"}
          </button>
          {edit && car && (
            <button
              onClick={handleDelete}
              type="button"
              className="transition inline-flex items-center border text-red-700 border-red-700 bg-transparent hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <svg
                className="mr-2 w-2 h-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              Supprimer la voiture
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CarDialog;
