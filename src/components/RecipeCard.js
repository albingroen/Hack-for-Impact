import React from 'react';
import { Card, List } from 'antd';

const { Meta } = Card;

const RecipeCard = ({ recipe, showIngredients = false }) => (
  <Card
    style={{ width: 240 }}
    cover={<img alt="example" src={recipe.imgUrl} />}
  >
    <Meta title={recipe.title} />
    {
      showIngredients && 
      <List
        itemLayout="horizontal"
        dataSource={recipe.ingredients}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={
                <div>{item.amount} {item.measure} {item.title}</div>
              }
            />
          </List.Item>
        )}
      />
    }
  </Card>
);

export default RecipeCard;
