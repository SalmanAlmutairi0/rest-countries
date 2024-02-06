import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Ui/Search";
import CountryList from "../components/CountryList";

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState("Filter by Region");

  return (
    <>
      <div className="h-screen w-full bg-gray-100 ">
        <Search
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <CountryList selectedFilter={selectedFilter} />
      </div>
    </>
  );
}
