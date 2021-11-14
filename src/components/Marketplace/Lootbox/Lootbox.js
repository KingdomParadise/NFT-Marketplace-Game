export default function Lootbox(props) {
  return (
    <div className="">
      <div className="p-5">
        <img src={props.img} alt="#" className="mx-auto" />
      </div>
      <p className="text-white text-lg">{props.title}</p>
      <p className="text-white text-opacity-50 text-xs pb-1.5">{props.subtitle}</p>
      <button className={`text-white text-sm bg-${props.background} rounded-lg py-1.5 px-5`}>Buy Now</button>
      <p className=""><a href="#" className={`underline text-${props.color} text-xs`}>What's Inside?</a></p>
    </div>
  );
}
