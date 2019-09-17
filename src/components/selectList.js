import React from "react";
import { List, Checkbox } from 'antd';


const SelectList = ({ items, selectedItems, onSelect }) => (
  <List
    itemLayout="horizontal"
    dataSource={items}
    renderItem={item => (
      <List.Item>
        <Checkbox
          key={item.title}
          checked={selectedItems.indexOf(item) !== -1}
          onChange={() => onSelect(item)}
        >
          {item.title}
        </Checkbox>

      </List.Item>
    )}
  />
);

export default SelectList;