import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const RecipeCard = ({ recipe }) => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={recipe.imgUrl} />}
  >
    <Meta title={recipe.title}/>
  </Card>
);

export default RecipeCard;