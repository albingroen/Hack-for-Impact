import React, { useState } from "react";
import StageWrapper from "../../components/stageWrapper";
import Stage2 from "./stages/stage2";
import Stage3 from "./stages/stage3";
import recepies from "../../data/recipes.json";
import RecipeCard from "../../components/RecipeCard";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Plan = ({}) => {
  const [stages, setActiveStages] = useState([0]);
  const [ingredients, setIngredients] = useState([]);
  const [leftovers, setLeftovers] = useState([]);

  const setActiveStage = stage => {
    setActiveStages([...stages, stage]);
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        background: "white",
        minHeight: "100vh",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "20px"
      }}
    >
      <StageWrapper>
        <h1>What do you want to eat?</h1>
        <HeaderContainer>
          {recepies.map(r => (
            <RecipeCard recipe={r}></RecipeCard>
          ))}
        </HeaderContainer>
      </StageWrapper>

      {/* Stage 2 - Depending on the previous answer what do you have left over? */}
      {stages.includes(2) && (
        <StageWrapper>
          <Stage2
            previousMeal={0}
            onSubmit={chosenLeftOvers => {
              setLeftovers(chosenLeftOvers);
              setActiveStage(3);
            }}
          />
        </StageWrapper>
      )}

      {/* Stage 3 - Do you also have this ingredient? */}
      {stages.includes(3) && (
        <StageWrapper>
          <Stage3
            leftovers={leftovers}
            onSubmit={choseningredients => {
              setIngredients(choseningredients);
              setActiveStage(4);
            }}
          />
        </StageWrapper>
      )}
    </div>
  );
};

export default Plan;
