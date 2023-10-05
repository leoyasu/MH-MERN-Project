import React from 'react';
import './styles/App.css';
import './styles/AppBarMUI.css';
import './styles/BottomAppBarMUI.css'
import Home from './components/home';
import AppBarMUI from './components/AppBarMUI';

import BottomAppBarMUI from './components/BottomAppBarMUI';

function App() {
  return (
    <div className="App">
      <AppBarMUI />
      <Home /> 
      <BottomAppBarMUI />
    </div>
  );
}

export default App;
