import React from "react";
import recipes from "../../data/recipes";

const Stage4 = ({ ingredients }) => {
  //   Stage 4 - We suggest you make this meal
  let mealToMake;

  recipes.forEach(recipe => {
    ingredients.forEach(ingredient => {
      const recipeTitles = recipe.ingredients.map(i => i.title);

      if (recipeTitles.includes(ingredient.title)) {
        mealToMake = recipe.title;
      } else {
        mealToMake = undefined;
      }
    });
  });

  return (
    <div>
      <h1>We suggest you make this meal</h1>
      <h2>{mealToMake || "Could not find a meal"}</h2>
    </div>
  );
};

export default Stage4;
