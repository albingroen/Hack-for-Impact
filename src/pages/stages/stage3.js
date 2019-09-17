import React from "react";
import { Button } from "antd";
import groceries from "../../data/groceries.json";

const Stage3 = ({ leftovers }) => (
  //   Stage 3 - Do you also have this ingredient?

  <div>
    <h1>Do you also have these items?</h1>
    {groceries.map(g => (
      <div>
        <h3>{g.title}</h3>
      </div>
    ))}
    <Button block>Submit</Button>
  </div>
);

export default Stage3;
