import React from 'react';
import './App.css';
import { MultiStepsForm } from './components';
import { Signup } from './auth';
import TodoApplication from './components/todo';

// import dotenv from 'dotenv';
// dotenv.config();

function App() {
  return (
    <div className="App">
      {/* <MultiStepsForm /> */}
      {/* <Signup /> */}
      <TodoApplication />
    </div>
  );
}

export default App;
