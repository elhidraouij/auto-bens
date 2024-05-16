"use client";

import Image from "next/image";
import { useState, Fragment, useEffect } from "react";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";

import { SearchModelProps } from "@/types";
import { getModels } from "@/services/carService";

const SearchModel = ({
  model,
  setModel,
}: SearchModelProps) => {
  const [query, setQuery] = useState("");
  const [models, setModels] = useState<Array<string>>([]);
  const [filteredModels, setFilteredModels] = useState<Array<string>>([]);

  const getAllModels = async () => {
    const allModels = await getModels()
    const allModelsString = allModels.map((car:any) => car.model)
    setModels(allModelsString)
  }

  useEffect(() => {
    getAllModels()
  }, [])

  useEffect(() => {
    const _filteredModels =
    query === ""
      ? models
      : models.filter((item) => {
          return item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        });

    setFilteredModels(_filteredModels)
  }, [query])

  return (
    <div className="search-model">
      <Combobox value={model} onChange={(value) => {setModel(value ? value : '')}}>
        <div className="relative w-full">
          <ComboboxInput
            className="bg-slate-50 rounded-md px-4 py-2 focus:outline-none w-full"
            placeholder="Modèle.."
            displayValue={(model: string) => model}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery(query)}
          >
            <ComboboxOptions className="relative mt-2 shadow-md rounded-md">
              {filteredModels.length === 0 && query !== "" ? (
                <ComboboxOption
                  value={query}
                  className="relative py-2 px-4 rounded-md data-[focus]:bg-yellow-500 data-[focus]:text-white text-gray-900"
                >
                  {query}
                </ComboboxOption>
              ) : (
                filteredModels.map((item) => (
                  <ComboboxOption
                    key={item}
                    className="rounded-md relative py-2 px-4 data-[focus]:bg-yellow-500 data-[focus]:text-white text-gray-900"
                    value={item}
                  >
                    {item}
                  </ComboboxOption>
                ))
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchModel;
