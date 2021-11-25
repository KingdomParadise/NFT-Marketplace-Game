import { useState } from "react";
import ItemList from "./ItemList/ItemList";
import Slider from "@mui/material/Slider";
import Card from "../MyAccount/Card";
import Pagination from "@mui/material/Pagination";
export default function Marketplace() {
  const [value, setValue] = useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const cardData = [
    {
      name: "Bluedrift Rifle",
      tagClass: "mythical-b",
      tags: [
        { class: "mythical", content: "Mythical" },
        { class: "loot-box ", content: "Lootbox Item" },
      ],
    },
    {
      name: "Bluedrift Rifle",
      tagClass: "mythical-b",
      tags: [
        { class: "mythical", content: "Mythical" },
        { class: "loot-box ", content: "Lootbox Item" },
      ],
    },
    {
      name: "Bluedrift Rifle",
      tagClass: "mythical-b",
      tags: [
        { class: "mythical", content: "Mythical" },
        { class: "loot-box ", content: "Lootbox Item" },
      ],
    },
    {
      name: "Bluedrift Rifle",
      tagClass: "mythical-b",
      tags: [
        { class: "mythical", content: "Mythical" },
        { class: "loot-box ", content: "Lootbox Item" },
      ],
    },
    {
      name: "Bluedrift Rifle",
      tagClass: "mythical-b",
      tags: [
        { class: "mythical", content: "Mythical" },
        { class: "loot-box ", content: "Lootbox Item" },
      ],
    },
    {
      name: "Bluedrift Rifle",
      tagClass: "mythical-b",
      tags: [
        { class: "mythical", content: "Mythical" },
        { class: "loot-box ", content: "Lootbox Item" },
      ],
    },
    {
      name: "Bluedrift Rifle",
      tagClass: "mythical-b",
      tags: [
        { class: "mythical", content: "Mythical" },
        { class: "loot-box ", content: "Lootbox Item" },
      ],
    },
    {
      name: "Bluedrift Rifle",
      tagClass: "mythical-b",
      tags: [
        { class: "mythical", content: "Mythical" },
        { class: "loot-box ", content: "Lootbox Item" },
      ],
    },
    {
      name: "Bluedrift Rifle",
      tagClass: "mythical-b",
      tags: [
        { class: "mythical", content: "Mythical" },
        { class: "loot-box ", content: "Lootbox Item" },
      ],
    },
    {
      name: "Bluedrift Rifle",
      tagClass: "mythical-b",
      tags: [
        { class: "mythical", content: "Mythical" },
        { class: "loot-box ", content: "Lootbox Item" },
      ],
    },
    {
      name: "Bluedrift Rifle",
      tagClass: "mythical-b",
      tags: [
        { class: "mythical", content: "Mythical" },
        { class: "loot-box ", content: "Lootbox Item" },
      ],
    },
    {
      name: "Bluedrift Rifle",
      tagClass: "mythical-b",
      tags: [
        { class: "mythical", content: "Mythical" },
        { class: "loot-box ", content: "Lootbox Item" },
      ],
    },
    {
      name: "Bluedrift Rifle",
      tagClass: "mythical-b",
      tags: [
        { class: "mythical", content: "Mythical" },
        { class: "loot-box ", content: "Lootbox Item" },
      ],
    },
    {
      name: "Bluedrift Rifle",
      tagClass: "mythical-b",
      tags: [
        { class: "mythical", content: "Mythical" },
        { class: "loot-box ", content: "Lootbox Item" },
      ],
    },
    {
      name: "Bluedrift Rifle",
      tagClass: "mythical-b",
      tags: [
        { class: "mythical", content: "Mythical" },
        { class: "loot-box ", content: "Lootbox Item" },
      ],
    },
  ];

  return (
    <div className="bg-black-500 p-4 md:p-10">
      <div className="py-5">
        <h1 className="text-3xl text-white">Vaporblitz Marketplace</h1>
        <p className="text-white text-opacity-50 pt-1">
          Buy, Sell and Trade in-game items.
        </p>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-12 gap-8 my-20 text-left">
        <div className="md:col-span-3 hidden md:block">
          <div className="rounded-lg bg-black-700 px-6 py-6">
            {/* <h6 className="text-gray border-b border-gray text-lg">Item Type</h6> */}
            <ItemList item="type" title="Item Type" />
            <ItemList item="rare" title="Item Rarity" />
            <p className="text-white text-opacity-50 border-gray border-b pb-1 mb-5 mt-4">
              Miscellaneous
            </p>
            <p className="text-white text-lg">Price</p>
            <div className=" px-2 slider">
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                // getAriaValueText={valuetext}
              />
            </div>
            <div className=" flex justify-between">
              {value.map((v, i) => (
                <span
                  className=" inline-block px-6 py-2 bg-black-500 text-white rounded-lg"
                  key={i}
                >
                  <span className="text-gray mr-2">$</span>
                  {v * 100}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="md:col-span-9">
          <div className="border-b border-gray pb-1  text-gray flex justify-between">
            <p className="text-lg sm:text-xl">Marketplace</p>
            <div className="flex items-center">
              <p className="text-sm sm:text-base">Sort by</p>
              <div className="ml-2 py-1 px-2 sm:px-4 bg-gray-700 rounded-lg cursor-pointer  flex items-center">
                <p className="mr-2 text-xs sm:text-base">Rarest</p>
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  gap-y-8 md:grid-cols-3 py-6 lg:gap-x-10 md:gap-y-10 text-white">
            {cardData.map((item, id) => (
              <Card item={item} key={id} />
            ))}
          </div>
          <div className="pb-14">
            <Pagination count={100} />
          </div>
        </div>
      </div>
    </div>
  );
}
