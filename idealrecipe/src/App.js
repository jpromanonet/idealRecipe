import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  // API auth
  const APP_ID = "d3fe2ead";
  const APP_KEY = "62f4a658cef756d9b125eec16d55db17";

  // API Search
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  // States control
  const [counter, setCounter] = useState(0);

  // useEffect function
  useEffect(() => {
    console.log("Effect has been run");
  });

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
};

export default App;
