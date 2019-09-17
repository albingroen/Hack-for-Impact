import React from "react";
import { Button } from "antd";

import SelectList from "../../components/selectList";
import _ from "lodash";

import recipes from "../../data/recipes";
import RecipeCard from "../../components/RecipeCard";

class Stage2 extends React.Component {
  state = {
    selectedItems: []
  };

  selectItem(item) {
    if (this.state.selectedItems.indexOf(item) === -1) {
      this.setState({
        selectedItems: [...this.state.selectedItems, item]
      });
    } else {
      this.setState({
        selectedItems: _.pull(this.state.selectedItems, item)
      });
    }
  }

  render() {
    const { onSubmit, previousMeal } = this.props;
    const recipe = recipes[previousMeal];
    const { title, ingredients } = recipe;
    const { selectedItems } = this.state;
    return (
      <div>
        <h2>Previous meal you had</h2>
        <RecipeCard recipe={recipe} />
        <div>Tell us what leftovers you have:</div>
        <SelectList
          items={ingredients}
          selectedItems={selectedItems}
          onSelect={this.selectItem.bind(this)}
        />
        <Button onClick={() => onSubmit(selectedItems)} block>
          Confirm
        </Button>
      </div>
    );
  }
}

export default Stage2;
