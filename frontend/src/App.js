import React from 'react';
import BooksPage from './BooksPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Library Management System</h1>
      </header>
      <main>
        <BooksPage />
      </main>
    </div>
  );
}

export default App;
