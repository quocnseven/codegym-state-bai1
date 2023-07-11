import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import { useState } from 'react';

const ControlPage = () => {
  const [status, setStatus] = useState(false)

  const expandHandler = () => {
    setStatus(true)
  };
  const miniHandler = () => {
    setStatus(false)
  }

  return (
    <div style={{padding: 10, textAlign: "center"}}>
      <h1 style={{backgroundColor: "green", fontSize: 50}}>Conditional Rendering</h1>
      {status ? 
      <div>
        <p>Quoc Nguyen, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum atque quaerat cum voluptate unde nesciunt reprehenderit, qui repellat aperiam explicabo adipisci quo sunt molestiae accusantium, asperiores error quis! At, animi.</p>
        <button style={{padding: 10}} onClick={miniHandler}>Ẩn chi tiết</button>
      </div>
       : 
      
      <div>
        
        <button style={{padding: 10}} onClick={expandHandler}>Xem chi tiết</button>
      </div>
      }
      
      
    </div>
  )
}

export default ControlPage;
