import React, { useState } from 'react';
import './App.css';
import Home from './Widgets/Home/Home';
import Calculator from './Widgets/Calculator/calculator';
import WelcomeScreen from './Widgets/WelcomeScreen/WelcomeScreen';

export const currentYearContext = React.createContext();
function App() {
  return (
    <div className="App">
      <currentYearContext.Provider value={'2022'}>
        <WelcomeScreen userName={'Indrajit Nag'}/>
      </currentYearContext.Provider>
      <Calculator/>
      <Home />
    </div>
  );
}

export default App;
