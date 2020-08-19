import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeList({ recipes }) {
  return (
    <div>
      <h1 className="recipe-header">Recipe Search Results</h1>
      <div className="recipes">
        {recipes.map((recipe, index) => {
          return <RecipeCard key={index} recipe={recipe.recipe} />;
        })}
      </div>
    </div>
  );
}

export default RecipeList;
