import './App.css';
import React, { useState, useEffect } from "react";
import Education from './components/education';

const App = () => {
  const [saved, setSaved] = useState(true);

  const saveHere = () => {
    if (saved) {
      setSaved(false);
    }
    else {
      setSaved(true);
    }
  }

  return (
    <div className="App">
      <Education saved={saved} setSaved={setSaved}></Education>
    </div>
  );
}

export default App;
