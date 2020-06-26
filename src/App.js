import React from 'react';
import './App.css';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      <p className="lead text-center">
        React Calendar
      </p>
      <Events />
    </div>
  );
}

export default App;
