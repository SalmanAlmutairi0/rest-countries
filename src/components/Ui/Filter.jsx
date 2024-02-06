import React from "react";
import arrowIcon from "../../assets/icons/arrow.png";

export default function Filter({
  filterOpen,
  setFilterOpen,
  selectedFilter,
  setSelectedFilter,
}) {
  const handleSelectedFilter = (region) => {
    setSelectedFilter(region);
    setFilterOpen(false);
  };
  return (
    <div className="relative w-1/2 lg:w-1/6 ">
      <div
        className="flex cursor-pointer items-center justify-between rounded-lg bg-white px-4 py-4 shadow-md"
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
        <div className="absolute mt-2 w-full rounded-lg bg-white px-4 py-4 shadow-md">
          <div className="flex flex-col">
            <p
              className="cursor-pointer rounded p-2 text-base font-semibold hover:bg-gray-100"
              onClick={() => handleSelectedFilter("Africa")}
            >
              Africa
            </p>
            <p
              className="cursor-pointer rounded p-2 text-base font-semibold hover:bg-gray-100"
              onClick={() => handleSelectedFilter("America")}
            >
              America
            </p>
            <p
              className="cursor-pointer rounded p-2 text-base font-semibold hover:bg-gray-100"
              onClick={() => handleSelectedFilter("Asia")}
            >
              Asia
            </p>
            <p
              className="cursor-pointer rounded p-2 text-base font-semibold hover:bg-gray-100"
              onClick={() => handleSelectedFilter("Europe")}
            >
              Europe
            </p>
            <p
              className="cursor-pointer rounded p-2 text-base font-semibold hover:bg-gray-100"
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
