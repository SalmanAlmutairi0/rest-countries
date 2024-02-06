import React, { useEffect, useState } from "react";

import leftArrowIcon from "../assets/icons/left-arrow.png";
import img from "../assets/nf.svg";
import { Link } from "react-router-dom";
import LoadingScreen from "../components/Ui/LoadingScreen";
export default function Details() {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currencies, setCurrencies] = useState();
  const countryCcn3 = window.location.pathname.split("/").pop();
  useEffect(() => {
    console.log("useEffect called");
    const getCountry = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha/${countryCcn3}`,
        );

        const data = await res.json();

        setCurrencies(
          data[0].currencies[Object.keys(data[0].currencies)[0]].name,
        );
        setCountry(data[0]);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }

      setLoading(false);
    };

    getCountry();
  }, [countryCcn3]);
  return (
    <div className="container my-10 flex flex-col gap-10 lg:mx-auto  ">
      {loading && <LoadingScreen />}
      <Link to="/">
        <button className="ml-3 flex w-fit items-center gap-3 bg-white px-6 py-1 shadow-md">
          <img src={leftArrowIcon} alt="back" className="size-4" />
          <span>Back</span>
        </button>
      </Link>
      <div className="mx-3 flex flex-col gap-10  md:flex-row md:items-center lg:justify-around ">
        <img
          src={country?.flags?.svg}
          alt={country?.name?.common}
          className="w-full md:h-1/2 md:w-1/2 lg:h-full lg:w-1/3 xl:h-full xl:w-2/5"
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
                  {country?.population?.toLocaleString()}
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
                <span className="font-normal text-gray-700">{currencies}</span>
              </p>
              <p className="font-semibold">
                Languages:{" "}
                {/* <span className="font-normal text-gray-700">Dutch ,</span> */}
                {country?.languages?.dut ? (
                  Object.entries(country.languages.dut).map(([code, name]) => (
                    <span key={code} className="font-normal text-gray-700">
                      {name} ({code})
                    </span>
                  ))
                ) : (
                  <span>N/A</span>
                )}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
            <p className="font-semibold">Border Countries:</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {country.borders?.map((border) => (
                <p className="min-w-24 rounded bg-white px-4 py-1 text-center text-sm shadow">
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
