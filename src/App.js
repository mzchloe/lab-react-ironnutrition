import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';

function App() {
  const [foodList, setFoodList] = useState(foods);

  return (
    <div className="App">
      {foodList.map((food) => (
        <div>
          <p> {food.name} </p>
          <img src={food.image} alt={food.image} width={100} />
        </div>
      ))}
    </div>
  );
}
export default App;
