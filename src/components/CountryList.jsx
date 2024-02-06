import React, { useEffect, useState } from "react";
import CountryCard from "./Ui/CountryCard";
import LoadingScreen from "./Ui/LoadingScreen";

export default function CountryList({ selectedFilter }) {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log("useEffect called");
    const getCountries = async () => {
      try {
        setLoading(true);
        let res;
        if (selectedFilter === "Filter by Region") {
          res = await fetch("https://restcountries.com/v3.1/all");
        } else {
          res = await fetch(
            `https://restcountries.com/v3.1/region/${selectedFilter}`,
          );
        }
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
      setLoading(false);
    };

    getCountries();
  }, [selectedFilter]);

  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {loading && <LoadingScreen />}
      {country.map((country, index) => (
        <CountryCard key={index} country={country} />
      ))}
    </div>
  );
}
