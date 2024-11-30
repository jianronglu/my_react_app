import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'red' ,color: 'white'}}>
      <header className="App-header">
      <Welcome />
      <MyButton title="我是一个按钮" />
      <MyButtonDisabled title="我是一个被禁用的按钮" disabled={true} />
      <MyImg avatarUrl='https://avatars.githubusercontent.com/u/10347539?v=4' name='logo' width={100} height={100} />
      <AboutPage />
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

interface MyImgProps {
  avatarUrl: string;
  name: string;
  width?: number;
  height?: number;
}

function MyImg({ avatarUrl , name, width, height}: MyImgProps){
  return <img className="avatar" alt={name} src={avatarUrl} style={{width, height}}/>
}

function AboutPage() {//空标签-使用Fragment包裹-减少标签层级
  return (
    <>
      <h1>About Page</h1>
      <p>This is the about page.</p>
    </>
  );
}




export default App;
