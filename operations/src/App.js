import React, { useState } from 'react';
import './App.css';
import Name from './Components/Name';
import Age from './Components/Age';
import Admin from './Components/Admin';

function App() {
  return (
  <div>
    <Name name="Николь" />
    <Age age={20} />
    <Admin isAdmin={false} />
  </div>
  );
}

export default App;
