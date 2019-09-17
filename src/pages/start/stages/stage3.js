import React, { useState } from "react";
import _ from "lodash";
import { Button } from "antd";
import SelectList from "../../../components/selectList";
import groceries from "../../../data/groceries.json";

const Stage3 = ({ leftovers, onSubmit }) => {
  //   Stage 3 - Do you also have this ingredient?
  const [selectedItems, setSelectedItems] = useState([]);
  const leftoversTitles = leftovers.map(l => l.title);

  return (
    <div>
      <h1>Do you also have these items?</h1>
      <SelectList
        items={groceries.filter(g => !leftoversTitles.includes(g.title))}
        selectedItems={selectedItems}
        onSelect={item => setSelectedItems([...selectedItems, item])}
      />
      <Button block onClick={() => onSubmit(selectedItems)}>
        Submit
      </Button>
    </div>
  );
};

export default Stage3;
