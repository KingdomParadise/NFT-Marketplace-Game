import Item from './Item';
export default function ItemList(props) {
  return(
    <div className="w-10/12 mx-auto py-2">
      <p className="text-sm text-white text-opacity-50 text-left pl-2 pb-1">{props.title}</p>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-11">
        <Item className="flex justify-center items-center relative" backSrc={props.backSrc} innerSrc={props.innerSrc1} />
        <Item className="flex justify-center items-center relative" backSrc={props.backSrc} innerSrc={props.innerSrc2} />
        <Item className="flex justify-center items-center relative" backSrc={props.backSrc} innerSrc={props.innerSrc3} />
        <Item className="flex justify-center items-center relative hidden md:flex" backSrc={props.backSrc} innerSrc={props.innerSrc4} />
      </div>
    </div>
  );
}