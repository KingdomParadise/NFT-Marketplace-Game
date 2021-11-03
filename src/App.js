import React, {useState,useEffect} from 'react';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import './App.css';
import loader from "./assets/loading.gif"

function App() {
  // const [isLoading, setLoading] = useState(true);

  // function fakeRequest() {
  //   return new Promise(resolve => setTimeout(() => resolve(), 2500));
  // }

  // useEffect(() => {
  //   fakeRequest().then(() => {
  //     const el = document.querySelector(".loader-container");
  //     if (el) {
  //       el.remove();
  //       setLoading(!isLoading);
  //     }
  //   });
  // }, []);

  // if (isLoading) {
  //   return null;
  // }

  return (
    <div className="App">
      {/* <div className="loader-container"><img className="mx-auto w-9" src={loader} /></div> */}
      <Header />
      <Home />
    </div>
  );
}

export default App;
