import React from 'react';
import './App.css';
import ScoreList from './container/ScoreList';
import ScoreProvider from './context/scoreContext';

function App() {

  return (
    <ScoreProvider>
      <div className="App">
        <h1>Score List</h1>
        <ScoreList />
      </div>
    </ScoreProvider>
  );
}

export default App;
