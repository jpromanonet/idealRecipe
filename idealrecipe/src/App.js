import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  // API auth
  const APP_ID = "d3fe2ead";
  const APP_KEY = "62f4a658cef756d9b125eec16d55db17";

  // Set states
  const [recipes, setRecipes] = useState([]);

  // API requests
  useEffect(async () => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;
