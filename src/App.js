import React from 'react';
import logo from './logo.svg';
import './App.css';
import Gradient from './components/Gradient'

function App() {
  return (
    <main
      style={{
        width: '100vw',
        height: '100vh'
      }}
    >
      <Gradient>
        <span>你想要我 对吧？</span>
      </Gradient>
    </main>
  );
}

export default App;
