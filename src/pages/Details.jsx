import React, { useEffect } from "react";

import leftArrowIcon from "../assets/icons/left-arrow.png";
import img from "../assets/nf.svg";
export default function Details() {
  const countryCcn3 = window.location.pathname.split("/").pop();
  useEffect(() => {
    console.log("useEffect called");
    const getCountry = async () => {
      const res = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryCcn3}`
      );
      const data = await res.json();
      console.log(data);
    };

    // getCountry();
  }, []);
  return (
    <div className="container flex flex-col gap-10 lg:mx-auto   mt-10  ">
      <button className="flex items-center gap-3 bg-white py-1 px-6 shadow-md w-fit">
        <img src={leftArrowIcon} alt="back" className="size-4" />
        <span>Back</span>
      </button>

      <div className="flex flex-col gap-10  ">
        <img src={img} alt="country name" className="w-full" />

        <div className="flex flex-col gap-10 ml-3">
          <h2 className="text-2xl font-bold">Country Name</h2>

          <div className="flex flex-col gap-2">
            <p className="font-semibold">
              Native Name:{" "}
              <span className="font-normal text-gray-700">belige</span>
            </p>
            <p className="font-semibold">
              Population: <span className="font-normal text-gray-700">1</span>
            </p>
            <p className="font-semibold">
              Region: <span className="font-normal text-gray-700">Europe</span>
            </p>
            <p className="font-semibold">
              Sub Region:{" "}
              <span className="font-normal text-gray-700">Europe</span>
            </p>
            <p className="font-semibold">
              Capital:{" "}
              <span className="font-normal text-gray-700">Belgium</span>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-semibold">
              Top Level Domain:{" "}
              <span className="font-normal text-gray-700">.be</span>
            </p>
            <p className="font-semibold">
              Curencies: <span className="font-normal text-gray-700">Euro</span>
            </p>
            <p className="font-semibold">
              Languages:{" "}
              <span className="font-normal text-gray-700">
                Dutch, French, German
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-semibold">Border Countries:</p>
            <div className="flex items-center justify-center gap-3">
              <p className="bg-white py-1 px-4 rounded shadow text-sm">France</p>
              <p className="bg-white py-1 px-4 rounded shadow text-sm">Germany</p>
              <p className="bg-white py-1 px-4 rounded shadow text-sm">Netherlands</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
