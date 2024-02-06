import React, { useEffect, useState } from "react";
import img from "../../assets/nf.svg";
import { Link } from "react-router-dom";
import Filter from "./Filter";
export default function Search({ selectedFilter, setSelectedFilter }) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [closeSearch, setCloseSearch] = useState(false);
  const [error, setError] = useState(false);
  // const handleSelectedFilter = (region) => {
  //   setSelectedFilter(region);
  //   setFilterOpen(false);
  // };

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setSearchResult([]);
      setCloseSearch(false);
      return;
    }
    setSearchText(() => e.target.value);
  };

  useEffect(() => {
    const getCountryBySearch = async () => {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${searchText}`,
        );
        const data = await res.json();
        if (Array.isArray(data)) {
          // Check if data is an array
          setSearchResult(data);
          setCloseSearch(true);
          setError(false);
        } else {
          setSearchResult([]);
          // setCloseSearch(false);
          setError(true);
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };
    getCountryBySearch();
  }, [searchText]);

  return (
    <div className="py-8">
      <div className="container mx-auto flex  w-[95%] flex-col  justify-center  gap-16 lg:flex-row lg:items-center lg:justify-between">
        {/* search */}
        <div className="relative flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/3 ">
          <form
            className="flex w-full items-center gap-4 rounded-lg bg-white px-4 py-4  shadow-md"
            onChange={(e) => handleSearch(e)}
          >
            <span role="img" aria-label="search-icon">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search for a country..."
              className="w-full outline-none"
            />
          </form>

          {/* result */}
          {closeSearch && (
            <div className="absolute top-16 z-20 mt-2 w-full rounded-lg bg-white px-4 py-4 shadow-md">
              <div className="flex flex-col gap-5">
                {/* each row */}
                {searchResult.map(
                  (country, index) =>
                    index < 5 && (
                      <Link to={`/details/${country.ccn3}`}>
                        <div
                          key={index}
                          className="flex cursor-pointer gap-4 border p-1 hover:bg-slate-100"
                        >
                          <img
                            src={country?.flags?.svg || img}
                            className="w-24"
                            alt={country?.name?.common}
                          />
                          <p className="text-base font-semibold">
                            {country?.name?.common}
                          </p>
                        </div>
                      </Link>
                    ),
                )}

                {error && (
                  <p className="font-semibold">Country not found (404)</p>
                )}
              </div>
            </div>
          )}
        </div>

        {
          <Filter
            filterOpen={filterOpen}
            setFilterOpen={setFilterOpen}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        }
      </div>
    </div>
  );
}
