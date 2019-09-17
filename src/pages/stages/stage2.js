import React from "react";
import { Button } from 'antd';

import SelectList from '../../components/selectList';
import _ from 'lodash';

import recipes from '../../data/recipes';

class Stage2 extends React.Component {
  state = {
    selectedItems: recipes[this.props.previousMeal].ingredients
  }

  selectItem(item) {
    if (this.state.selectedItems.indexOf(item) === -1) {
      this.setState({
        selectedItems: [...this.state.selectedItems, item],
      });
    } else {
      this.setState({
        selectedItems: _.pull(this.state.selectedItems, item),
      })
    }
    
  }

  render() {
    const { onSubmit, previousMeal } = this.props;
    const recipe = recipes[previousMeal];
    const { title, ingredients } = recipe;
    const {selectedItems} = this.state;
    console.log(selectedItems);
    return (
      <div>
        <h2>You've selected last time {title}</h2>
        <div>Tell us what has left over</div>
        <SelectList items={ingredients} selectedItems={selectedItems} onSelect={this.selectItem.bind(this)} />
        <Button onClick={() => onSubmit(selectedItems)} type="primary">Confirm</Button>
      </div>
    );
  }
}

export default Stage2;
