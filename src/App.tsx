import React from 'react';
import './App.css';
import { MultiStepsForm } from './components';
import { Signup } from './auth';
import TodoApplication from './components/todo';
import SSoLogin from './components/sso';

// import dotenv from 'dotenv';
// dotenv.config();

function App() {
  return (
    <div className="App">
      {/* <MultiStepsForm /> */}
      {/* <Signup /> */}
      {/* <TodoApplication /> */}
      <SSoLogin />
    </div>
  );
}

export default App;
