import React, { useState } from "react";
import _ from "lodash";
import { Button } from "antd";
import SelectList from "../../../components/selectList";
import groceries from "../../../data/groceries.json";

const Stage3 = ({ selectedItems, onSubmit, chosenRecipe }) => {
  
  //   Stage 3 - Do you also have this ingredient?
  const selectedAsTitle = selectedItems.map(_ => _.title);
  const ingredientsAsTitle = chosenRecipe.ingredients.map(_ => _.title);
  const itemsToBeShopped = groceries.filter(_ => ingredientsAsTitle.includes(_.title) && !selectedAsTitle.includes(_.title));
  const [shoppedProducts, setShoppedProducts] = useState([itemsToBeShopped]);

  return (
    <div>
      <h1>Your shopping list</h1>
      <SelectList
        items={itemsToBeShopped}
        selectedItems={itemsToBeShopped}
        onSelect={item => setShoppedProducts([...shoppedProducts, item])}
      />
    </div>
  );
};

export default Stage3;
