import React from "react";
import arrowIcon from "../../assets/icons/arrow.png";

export default function Filter({ filterOpen, setFilterOpen, selectedFilter, setSelectedFilter }) {
     const handleSelectedFilter = (region) => {
       setSelectedFilter(region);
       setFilterOpen(false);
     };
  return (
    <div className="relative w-1/2 lg:w-1/6 ">
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
              className="cursor-pointer text-base font-semibold p-2 rounded hover:bg-gray-100"
              onClick={() => handleSelectedFilter("Africa")}
            >
              Africa
            </p>
            <p
              className="cursor-pointer text-base font-semibold p-2 rounded hover:bg-gray-100"
              onClick={() => handleSelectedFilter("America")}
            >
              America
            </p>
            <p
              className="cursor-pointer text-base font-semibold p-2 rounded hover:bg-gray-100"
              onClick={() => handleSelectedFilter("Asia")}
            >
              Asia
            </p>
            <p
              className="cursor-pointer text-base font-semibold p-2 rounded hover:bg-gray-100"
              onClick={() => handleSelectedFilter("Europe")}
            >
              Europe
            </p>
            <p
              className="cursor-pointer text-base font-semibold p-2 rounded hover:bg-gray-100"
              onClick={() => handleSelectedFilter("Oceania")}
            >
              Oceania
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
