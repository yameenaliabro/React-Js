import React from 'react';
import './App.css';
import { MultiStepsForm } from './components';
import Signup from './auth/signup';

function App() {
  return (
    <div className="App">
      {/* <MultiStepsForm /> */}
      <Signup />
    </div>
  );
}

export default App;
