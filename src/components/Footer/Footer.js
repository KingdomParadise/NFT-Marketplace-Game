export default function Footer(props) {
  return (
    <>
      <div className="grid grid-cols-3 justify-items-center bg-black text-white p-6">
        <div className="">
          <a href="#">Whitepaper</a>
        </div>
        <div className="items-center">
          <img className="w-4/5 mx-auto" src={props.logo} />
        </div>
        <div>
          <p className="text-left mb-2 ml-1">Social</p>
          <div className="flex">
            <a href="#" className="flex items-center text-center w-6 h-6 bg-purple-400 rounded-3xl mr-3"><img className="p-1.5" src={props.telegram} /></a>
            <a href="#" className="flex items-center text-center w-6 h-6 bg-pink-300 rounded-3xl"><img className="p-1.5" src={props.discord} /></a>
          </div>
        </div>
      </div>
      <div className="text-white text-center text-sm bg-black-dark py-3">
        <p>2021 © Vaporblitz</p>
      </div>
    </>
  );
}