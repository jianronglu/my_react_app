import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Welcome />
      <MyButton title="我是一个按钮" />
      <MyButtonDisabled title="我是一个被禁用的按钮" disabled={true} />
      <img className="avatar" alt="logo" src='https://avatars.githubusercontent.com/u/10347539?v=4' />
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

interface MyButtonProps {
  title: string;
  disabled?: boolean;
}

function MyButtonDisabled({ title, disabled }: MyButtonProps) {
  return (
    <button disabled={disabled}>{title}</button>
  );
}




export default App;
