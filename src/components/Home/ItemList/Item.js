import './Item.css'

export default function Item(props) {
  return(
    <div className={props.className}>
      <img src={props.backSrc} className="w-full" />
      <img src={props.innerSrc} className="absolute h-1/3" />
    </div>
  );
}