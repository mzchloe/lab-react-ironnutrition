import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Row } from 'antd';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foodList, setFoodList] = useState(foods);


  return (
    <div className="App">
    <AddFoodForm setFoodList={setFoodList} />
      <Row>
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
