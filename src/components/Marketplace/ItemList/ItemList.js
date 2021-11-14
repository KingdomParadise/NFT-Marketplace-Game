const typeList = [
  { name: "Skins", status: "true" },
  { name: "Properties", status: "false" },
  { name: "Cars", status: "false" },
  { name: "Characters", status: "false" },
  { name: "Accessories", status: "false" },
  { name: "Pets", status: "false" },
];

const rarityList = [
  { name: "Common", status: "false" },
  { name: "Uncommon", status: "false" },
  { name: "Rare", status: "false" },
  { name: "Epic", status: "false" },
  { name: "Legendarys", status: "false" },
  { name: "Mythical", status: "false" },
];

export default function ItemList(props) {
  return (
    <div>
      <p className="text-white text-opacity-50 border-gray border-b pb-1 mb-3">{props.title}</p>
      {
        props.item === 'type' ? (
          <>
            
          </>
        ) : (
          <>
          </>
        )
      }
    </div>
  );
}
