import './App.css';
import React, { useState, useEffect } from "react";
import Education from './components/education';
import Work from './components/work';
import Info from './components/info';

const App = () => {

  return (
    <div className="App">

      <Info></Info>
      <Education></Education>


    </div>
  );
}

export default App;
