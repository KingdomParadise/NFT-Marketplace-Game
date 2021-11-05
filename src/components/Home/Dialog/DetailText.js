export default function DetailText(props) {
  let text;
  if (props.color === "green") {
    text = <p className="text-lg text-green">{props.text}</p>;
  } else if (props.multi && !props.underline) {
    text = <p className="text-base text-white mb-2 leading-tight">{props.text1}<br/>{props.text2}</p>;
  } else if (props.multi && props.underline) { 
    text = <p className="text-base text-white mb-2 leading-tight">{props.text1}<br/><a href="#" className="underline">{props.text2}</a></p>;
  } else {
    text = <p className="text-base text-white mb-2">{props.text}</p>;
  }

  return (
    <>
      {text}
    </>
  );
}