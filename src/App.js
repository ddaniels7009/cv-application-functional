import './App.css';
import React, { useState, useEffect } from "react";
import Education from './components/education';
import Educations from './components/educations';

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

      <div>
        <Education saved={true} setSaved={saveHere}></Education>
      </div>

    </div>
  );
}

export default App;
