// @ts-ignore
import React from 'react';
import noComment from './noComment1.png';
import './App.css';
import LinkedInPage from './Login/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={noComment} className="App-logo" alt="logo" />
        <p>
          Linkedin reviewer extension
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInPage />
        </a>
      </header>
    </div>
  );
}

export default App;
