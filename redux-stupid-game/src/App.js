import React from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import ScoreBoard from './components/ScoreBoard';

function App() {
  return (
    <div className="App">
        <GameBoard />
        <ScoreBoard />
    </div>
  );
}

export default App;
