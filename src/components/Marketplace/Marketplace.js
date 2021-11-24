import React from "react";

export default function Marketplace() {
  return (
    <div className="bg-black-500 p-5">
      <div className="py-5">
        <h1 className="text-3xl text-white">Vaporblitz Marketplace</h1>
        <p className="text-white text-opacity-50 pt-1">
          Buy, Sell and Trade in-game items.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-1 rounded-lg bg-black-700 px-3 py-1"></div>

        <div className="col-span-11"></div>
      </div>
    </div>
  );
}
