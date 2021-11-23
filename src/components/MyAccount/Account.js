import "./account.css";
import { Link } from "react-router-dom";
import Gun from "../../assets/marketplace/gun.png";
const linkList = [
  {
    name: "All",
    link: "/",
  },
  {
    name: "skins",
    link: "/skins",
  },
  {
    name: "properties",
    link: "/properties",
  },
  {
    name: "Characters",
    link: "/characters",
  },
];

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
    tagClass: "legendary-b",
    tags: [
      { class: "legendary", content: "Legendary" },
      { class: "loot-box ", content: "Lootbox Item" },
    ],
  },
  {
    name: "Bluedrift Rifle",
    tagClass: "epic-b",
    tags: [{ class: "epic", content: "Epic" }],
  },
  {
    name: "Bluedrift Rifle",
    tagClass: "rare-b",
    tags: [{ class: "rare", content: "Rare" }],
  },
  {
    name: "Bluedrift Rifle",
    tagClass: "uncommon-b",
    tags: [{ class: "uncommon", content: "Uncommon" }],
  },
  {
    name: "Bluedrift Rifle",
    tagClass: "common-b",
    tags: [{ class: "common", content: "uncommon" }],
  },
];

const Account = () => {
  return (
    <div className=" text-white text-left">
      <div className=" bg-black-700 pt-20 ">
        <div className="container custom-container">
          <div className=" flex items-center">
            <div className="w-20 h-20 bg-white rounded-full"></div>
            <div className="ml-2">
              <p className="text-2xl">User000</p>
              <p className=" text-gray text-sm">copy address</p>
            </div>
          </div>
          <ul className="flex items-center mt-6">
            {linkList.map((v, i) => (
              <li key={i}>
                <Link
                  to={`/account${v.link}`}
                  className="px-8 py-4 inline-block text-gray text-lg capitalize"
                >
                  {v.name}
                </Link>
              </li>
            ))}
            <li></li>
          </ul>
        </div>
      </div>
      <div className="bg-black-500">
        <div className="container custom-container">
          <h3 className="text-gray border-b-2 border-gray pt-10 pb-2 ">
            Most Valuable Assets
          </h3>
          <div className="grid grid-cols-3 py-6 gap-x-20 gap-y-10">
            {cardData.map((item, id) => (
              <div
                key={id}
                className={`${item.tagClass} pt-6 pb-2 rounded-2xl bg-black-700 `}
              >
                <div className="py-16 px-4 gun-bg">
                  <img src={Gun} alt="" />
                </div>
                <div>
                  <h6 className="text-xl pb-4 border-b border-gray pl-4">
                    {item.name}
                  </h6>
                  <div className=" px-4 py-2 flex justify-between items-center">
                    <div className="flex">
                      {item.tags.map((v, i) => (
                        <div className={`${v.class} mr-2`} key={i}>
                          {v.content}
                        </div>
                      ))}
                    </div>
                    <div className="bg-black-500 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer">
                      +
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
