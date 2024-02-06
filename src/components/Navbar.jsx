import React from "react";

export default function Navbar() {
  return (
    <nav className=" bg-white drop-shadow-sm ">
      <div className="container mx-auto flex w-full items-center justify-between p-4">
        <h1 className="text-xl font-bold sm:text-2xl lg:text-3xl">
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
