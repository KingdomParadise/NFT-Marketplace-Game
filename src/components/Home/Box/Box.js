export default function Box(props) {
  return (
    <div className={props.className}>
      {props.sub ? (
        <>
          <p className="text-4xl text-white pt-6 text-shadow">{props.title}</p>
          <p className="text-lg text-white text-opacity-50 pt-1">{props.sub}</p>
        </>
      ) : (        
          <p className="text-4xl text-white pt-6 text-shadow">{props.title}</p>                  
      )}
      {props.children}
    </div>  
  );
}