import React from "react";

export default function Navbar() {
  return (
    <nav className=" drop-shadow-sm bg-white ">
      <div className="flex justify-between w-full items-center container mx-auto p-4">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
          Where in the world?
        </h1>

        <div className="flex items-center gap-2">
          <p className="text-lg font-medium">🌙</p>
          <p className="text-lg font-medium">Dark Mode</p>
        </div>
      </div>
    </nav>
  );
}
