import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Card, Col, Button, Row } from 'antd';

function App() {
  const [foodList, setFoodList] = useState(foods);

  return (
    <div className="App">
      <Row gutter={[16, 16]}>
        {foodList.map((food, index) => (
          <FoodBox
            key={index}
            food={{
              name: food.name,
              calories: food.calories,
              image: food.image,
              servings: food.servings,
            }}
          />
        ))}
      </Row>
    </div>
  );
}
export default App;
