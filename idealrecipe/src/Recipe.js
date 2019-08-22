import React from "react";
import "./App.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipeContainer">
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img className="imgFood" src={image} alt="" />
    </div>
  );
};

export default Recipe;
