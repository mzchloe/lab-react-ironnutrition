import React from 'react';
import { useState } from 'react';
import { Divider, Input } from 'antd';

export default function AddFoodForm() {
  return (
    <form style={ {padding: '20px 45px 20px 45px'} } >
      <Divider plain>
        <h2>
          <b>Add Food Entry</b>
        </h2>
      </Divider>
      
      <label>Name</label>
      <br></br>
      <Input />
      <br></br>
      <label>Image</label>
      <br></br>
      <Input />
      <br></br>
      <label>Calories</label>
      <br></br>
      <Input />
      <br></br>
      <label>Servings</label>
      <br></br>
      <Input />
      <br></br>
      <button>Create</button>
      
    </form>
  );
}
