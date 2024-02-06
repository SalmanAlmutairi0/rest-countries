import React, { useEffect } from "react";

import testFlag from "../../assets/nf.svg";
import { Link } from "react-router-dom";
export default function CountryCard({ country }) {
  return (
    <div className="mx-auto flex min-w-[280px] max-w-[300px] cursor-pointer flex-col gap-4 rounded-lg bg-white  shadow-md ">
      <Link to={`/details/${country.ccn3}`}>
        <img src={country.flags.svg} className="w-full rounded-t-lg" alt="" />

        <div className="flex flex-col gap-2 p-3">
          <h2 className="text-xl font-bold">{country.name.common}</h2>
          <p className="font-semibold">
            Population:{" "}
            <span className="font-normal text-gray-700">
              {country.population.toLocaleString()}
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
