import {useState, useEffect} from 'react'
export default function Lootbox(props) {
  const [buyCount, setBuy] = useState(0);

  function handleClick() {
    setBuy(buyCount + 1);
  }

  return (
    <div>
      <div className="custom-box-shadow rounded-xl pt-2 pb-5 px-2">
        <img src={props.src} className="mx-auto p-5" />
        <p className="text-white text-base">{props.title}</p>
        <p className="text-white text-opacity-50 text-xs py-1">{props.desc}</p>
        <p className="text-white text-base">{props.price}</p>
        <button type="button" onClick={handleClick} className="border border-white rounded-lg text-white hover:opacity-70 py-1 px-5 mt-2">Buy Now</button>
      </div>
      <p className="text-white text-opacity-50 text-xs py-2">{props.count - buyCount}/{props.count} Left</p>
    </div>
  );
}
