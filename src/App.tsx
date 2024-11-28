import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {Welcome()}
      <MyButton title="Click me" />
      </header>
    </div>
  );
}

function Welcome() {
  return <h1>Hello World !</h1>;
}

function MyButton({ title }: { title: string }) {
  return (
    <button>{title}</button>
  );
}
export default App;
