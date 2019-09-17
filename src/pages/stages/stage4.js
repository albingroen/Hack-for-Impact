import React from "react";

import RecipeCard from '../../components/RecipeCard';
import recipes from "../../data/recipes";

const Stage4 = ({ ingredients }) => {
  //   Stage 4 - We suggest you make this meal
  let mealToMake;

  const ingredientsAsTitle = ingredients.map(_ => _.title);
  const recipe = recipes.find(recipe => {
    return recipe.ingredients.reduce((acc, ingredient) => {
      return acc && ingredientsAsTitle.includes(ingredient.title);
    }, true);
  });

/*  recipes.forEach(recipe => {
    ingredients.forEach(ingredient => {
      const recipeTitles = recipe.ingredients.map(i => i.title);

      if (recipeTitles.includes(ingredient.title)) {
        mealToMake = recipe.title;
      } else {
        mealToMake = undefined;
      }
    });
  });
*/

  return (
    <div>
      <h1>We suggest you make this meal</h1>
      {recipe ? <RecipeCard recipe={recipe}/> : <h2>"Could not find a meal"</h2>}
    </div>
  );
};

export default Stage4;
