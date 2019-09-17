import React from "react";
import { List } from "antd";
import groceries from "../../../data/groceries.json";

const Stage3 = ({ selectedItems, onSubmit, chosenRecipe }) => {
  //   Stage 3 - Do you also have this ingredient?
  const selectedAsTitle = selectedItems.map(_ => _.title);
  const ingredientsAsTitle = chosenRecipe.ingredients.map(_ => _.title);
  const itemsToBeShopped = groceries.filter(
    _ =>
      ingredientsAsTitle.includes(_.title) && !selectedAsTitle.includes(_.title)
  );

  return (
    <div>
      <h1>Your shopping list</h1>
      <List
        itemLayout="horizontal"
        dataSource={itemsToBeShopped}
        renderItem={item => <List.Item>{item.title}</List.Item>}
      />
    </div>
  );
};

export default Stage3;
