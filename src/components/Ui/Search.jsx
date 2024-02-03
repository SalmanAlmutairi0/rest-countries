import React, { useState } from "react";
import arrowIcon from "../../assets/icons/arrow.png";

export default function Search() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Filter by Region");

  const handleSelectedFilter = (region) => {
    setSelectedFilter(region);
    setFilterOpen(false);
  };

  return (
    <div className="py-8">
      <div className="container flex flex-col  w-[95%] mx-auto justify-center gap-16 lg:flex-row lg:justify-between lg:items-center">
        <form className="bg-white shadow-md rounded-lg flex items-center gap-4 px-4 py-4  md:w-1/2 lg:w-1/3 xl:w-1/4">
          <span role="img" aria-label="search-icon">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search for a country..."
            className="outline-none"
          />
        </form>

        <div className="relative w-1/2 lg:w-1/3 xl:w-1/4">
          <div
            className="flex justify-between items-center cursor-pointer bg-white shadow-md rounded-lg px-4 py-4"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <p className="text-base font-semibold">{selectedFilter}</p>
            <img
              src={arrowIcon}
              className={`transform ${filterOpen ? "rotate-180" : ""} size-4`}
              alt="arrow"
            />
          </div>

          {filterOpen && (
            <div className="absolute w-full bg-white shadow-md rounded-lg px-4 py-4 mt-2">
              <div className="flex flex-col">
                <p
                  className="cursor-pointer text-base font-semibold p-2 rounded hover:bg-gray-300"
                  onClick={() => handleSelectedFilter("Africa")}
                >
                  Africa
                </p>
                <p
                  className="cursor-pointer text-base font-semibold p-2 rounded hover:bg-gray-300"
                  onClick={() => handleSelectedFilter("America")}
                >
                  America
                </p>
                <p
                  className="cursor-pointer text-base font-semibold p-2 rounded hover:bg-gray-300"
                  onClick={() => handleSelectedFilter("Asia")}
                >
                  Asia
                </p>
                <p
                  className="cursor-pointer text-base font-semibold p-2 rounded hover:bg-gray-300"
                  onClick={() => handleSelectedFilter("Europe")}
                >
                  Europe
                </p>
                <p
                  className="cursor-pointer text-base font-semibold p-2 rounded hover:bg-gray-300"
                  onClick={() => handleSelectedFilter("Oceania")}
                >
                  Oceania
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
