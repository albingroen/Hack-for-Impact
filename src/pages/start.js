import React, { useState } from "react";
import { Button } from "antd";

const Start = ({}) => {
  const { stage, setStage } = useState(0);

  return (
    <div style={{ padding: "50px" }}>
      <h1>What do you want to do?</h1>
      <Button>I have leftovers</Button>
      <Button>I want to plan my meals</Button>

      {/* Stage 2 - Depending on the previous answer what do you have left over? */}

      {/* Stage 3 - Do you also have this ingredient? */}

      {/* Stage 4 - We suggest you make this meal */}

      {/* {stage === 2 && (
        // Leftovers
        <div>
          <h2>What do you have over?</h2>
          <div>Pasta</div>
          <div>Peso</div>
          <Button>Submit</Button>
        </div>
      )} */}
    </div>
  );
};

export default Start;
