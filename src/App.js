// src/App.js
import React from 'react';
import PaginatedCardList from './Components/PaginatedCardList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='heading'>Card List with Pagination</h1>
      <PaginatedCardList />
    </div>
  );
}

export default App;
