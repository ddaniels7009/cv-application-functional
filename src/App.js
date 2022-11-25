import './App.css';
import React, { useState, useEffect } from "react";
import Education from './components/education';
import Work from './components/work';

const App = () => {

  return (
    <div className="App">

      <div>
        <Education></Education>
      </div>

    </div>
  );
}

export default App;
