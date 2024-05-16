"use client";

import { FormEvent, useState } from "react";

import SearchManufacturer from "./SearchManufacturer";
import SearchModel from "./SearchModel";
import { SearchBarProps } from "@/types";

const SearchBar = ({
  setPage,
  setModel,
  setManufacturer
}: SearchBarProps) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setPage(1)
    setModel(searchModel)
    setManufacturer(searchManufacturer)
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item flex flex-row items-start gap-2">
        <SearchManufacturer
          manufacturer={searchManufacturer}
          setManufacturer={setSearchManufacturer}
        />
        <SearchModel model={searchModel} setModel={setSearchModel} />
        <button 
        className={`transition-all ease-in-out border border-yellow-500 text-zinc-700 bg-yellow-500 px-4 py-2 rounded-md hover:bg-transparent hover:text-yellow-500 font-semibold`}
        type="submit">
          Rechercher
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
