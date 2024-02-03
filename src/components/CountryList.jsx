import React, { useEffect, useState } from "react";
import CountryCard from "./Ui/CountryCard";

export default function CountryList() {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    console.log('useEffect called');
    const getCountries = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountry(data);
    };

    getCountries();
  }, []);

  

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {country.map((country, index) => (
        <CountryCard
          key={index}
          country={country}
        />
      ))}
    </div>
  );
}
