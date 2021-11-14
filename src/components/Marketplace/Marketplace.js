import React from 'react';
import Lootbox from './Lootbox/Lootbox';
import lootbox from "../../assets/marketplace/lootbox.png";

export default function Marketplace() {
  return(
    <div className="bg-black-500 p-5">
      <div className="py-5">
        <h1 className="text-3xl text-white">Vaporblitz Marketplace</h1>
        <p className="text-white text-opacity-50 pt-1">Buy, Sell and Trade in-game items.</p>
      </div>

      <div className="">
        <p className="text-left text-white text-opacity-50 pb-2 border-b border-gray mb-4">Exclusive Lootboxes</p>
        <div className="grid grid-cols-3 bg-black-700 rounded-xl p-3">
          <Lootbox img={lootbox} title="Regular Lootbox" subtitle="5 NFT items inside" background="purple-900" color="purple-600" />
          <Lootbox img={lootbox} title="Elite Lootbox" subtitle="10 NFT items inside" background="yellow-900" color="yellow-900" />
          <Lootbox img={lootbox} title="Ultimate Lootbox" subtitle="15 NFT items inside" background="red-900" color="red-900" />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-1 rounded-lg bg-black-700 px-3 py-1">

        </div>

        <div className="col-span-11">
        </div>
      </div>
    </div>
  );
}