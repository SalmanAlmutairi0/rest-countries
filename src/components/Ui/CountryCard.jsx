import React, { useEffect } from "react";

import testFlag from "../../assets/nf.svg";
import { Link } from "react-router-dom";
export default function CountryCard({ country }) {
  return (
    <div className="bg-white min-w-[280px] max-w-[300px] mx-auto cursor-pointer shadow-md rounded-lg flex flex-col  gap-4 ">
      <Link to={`/details/${country.ccn3}`}>
        <img src={country.flags.svg} className="w-full rounded-t-lg" alt="" />

        <div className="flex flex-col gap-2 p-3">
          <h2 className="text-xl font-bold">{country.name.common}</h2>
          <p className="font-semibold">
            Population:{" "}
            <span className="font-normal text-gray-700">
              {country.population}
            </span>
          </p>
          <p className="font-semibold">
            Region:{" "}
            <span className="font-normal text-gray-700">{country.region}</span>
          </p>
          <p className="font-semibold">
            Capital:{" "}
            <span className="font-normal text-gray-700">{country.capital}</span>
          </p>
        </div>
      </Link>
    </div>
  );
}
