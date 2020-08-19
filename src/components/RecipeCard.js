import React from "react";

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <h2>{recipe.label}</h2>
      <img src={recipe.image} alt="" />
      <p>Calories: {Math.round(recipe.calories)}</p>
      <p>Source: {recipe.source}</p>
    </div>
  );
}

export default RecipeCard;
