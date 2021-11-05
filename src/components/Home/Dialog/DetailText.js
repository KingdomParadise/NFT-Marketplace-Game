export default function DetailText(props) {
  let text;
  if (props.color === "green") {
    text = <p className="text-lg text-green text-opacity-50 text-shadow">{props.text}</p>;
  } else if (props.multi && !props.underline) {
    text = <p className="text-base text-white text-opacity-50 mb-2 leading-tight text-shadow">{props.text1}<br/>{props.text2}</p>;
  } else if (props.multi && props.underline) { 
    text = <p className="text-base text-white text-opacity-50 mb-2 leading-tight text-shadow">{props.text1}<br/><span className="underline">{props.text2}</span></p>;
  } else {
    text = <p className="text-base text-white text-opacity-50 text-shadow mb-2">{props.text}</p>;
  }

  return (
    <>
      {text}
    </>
  );
}