import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const APP_ID = "d3fe2ead";
  const APP_KEY = "62f4a658cef756d9b125eec16d55db17";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
