import React, { useEffect, useState } from "react";

import leftArrowIcon from "../assets/icons/left-arrow.png";
import img from "../assets/nf.svg";
import { Link } from "react-router-dom";
import LoadingScreen from "../components/Ui/LoadingScreen";
export default function Details() {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const countryCcn3 = window.location.pathname.split("/").pop();
  useEffect(() => {
    console.log("useEffect called");
    const getCountry = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha/${countryCcn3}`
        );
        const data = await res.json();
        setCountry(data[0]);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
      setLoading(false);
    };

    getCountry();
  }, []);
  return (
    <div className="container flex flex-col gap-10 lg:mx-auto mt-10 h-screen  ">
      {loading && <LoadingScreen />}
      <Link to="/">
        <button className="flex ml-3 items-center gap-3 bg-white py-1 px-6 shadow-md w-fit">
          <img src={leftArrowIcon} alt="back" className="size-4" />
          <span>Back</span>
        </button>
      </Link>
      <div className="flex flex-col md:flex-row md:items-center  gap-10 lg:justify-around mx-3 ">
        <img
          src={country?.flags?.svg}
          alt={country?.name?.common}
          className="w-full md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-full xl:w-2/5 xl:h-full"
        />

        <div className="flex flex-col  gap-10  ">
          <div>
            <h2 className="text-2xl font-bold">{country?.name?.common}</h2>
          </div>

          <div className="lg:flex lg:gap-16 ">
            <div className="flex flex-col gap-2">
              <p className="font-semibold">
                Native Name:{" "}
                <span className="font-normal text-gray-700">
                  {country?.name?.official}
                </span>
              </p>
              <p className="font-semibold">
                Population:{" "}
                <span className="font-normal text-gray-700">
                  {country?.population}
                </span>
              </p>
              <p className="font-semibold">
                Region:{" "}
                <span className="font-normal text-gray-700">
                  {country?.region}
                </span>
              </p>
              <p className="font-semibold">
                Sub Region:{" "}
                <span className="font-normal text-gray-700">
                  {country?.subregion}
                </span>
              </p>
              <p className="font-semibold">
                Capital:{" "}
                <span className="font-normal text-gray-700">
                  {country?.capital}
                </span>
              </p>
            </div>

            <div className="flex flex-col  gap-2">
              <p className="font-semibold">
                Top Level Domain:{" "}
                <span className="font-normal text-gray-700">
                  {country?.tld}
                </span>
              </p>
              <p className="font-semibold">
                Curencies:{" "}
                <span className="font-normal text-gray-700">
                  {country?.currencies?.CAD?.name}
                </span>
              </p>
              <p className="font-semibold">
                Languages:{" "}
                <span className="font-normal text-gray-700">Dutch ,</span>
                {country?.languages?.dut
                  ? Object.entries(country.languages.dut).map(
                      ([code, name]) => (
                        <span key={code} className="font-normal text-gray-700">
                          {name} ({code})
                        </span>
                      )
                    )
                  : null}
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center gap-2">
            <p className="font-semibold">Border Countries:</p>
            <div className="flex items-center justify-center flex-wrap gap-3">
              {country.borders?.map((border) => (
                <p className="bg-white py-1 px-4 rounded shadow min-w-24 text-center text-sm">
                  {border}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
