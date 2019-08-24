import React from "react";
import "./App.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  let caloriesFinal = Math.floor(calories);
  return (
    <div className="recipeContainer">
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>
        <b>Calories: </b>
        {caloriesFinal}
      </p>
      <img className="imgFood" src={image} alt="" />
    </div>
  );
};

export default Recipe;
