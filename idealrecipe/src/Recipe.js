import React from "react";

const Recipe = ({ title, calories, image, ingredients, time }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h3>Estimated Time: {time}</h3>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
