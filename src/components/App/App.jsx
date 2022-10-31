import React from 'react';
import axios from 'axios';
import './App.css';
import { useSelector } from "react-redux";
import Feeling from './Feeling/Feeling';
import Understanding from '../Understanding/Understanding';

function App() {

  let count = useSelector((store) => {
    return store.count;
  })

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
      </header>
      <Feeling />
      <Understanding />
        <h4>Count: {count}</h4>
    </div>
  );
}

export default App;
