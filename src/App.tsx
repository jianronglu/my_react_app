import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginView />
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

function MyImg({ avatarUrl, name, width, height }: MyImgProps) {
  return <img className="avatar" alt={name} src={avatarUrl} style={{ width, height }} />
}

function AboutPage() {//空标签-使用Fragment包裹-减少标签层级
  return (
    <>
      <h1>About Page</h1>
      <p>This is the about page.</p>
    </>
  );
}

function LoginView() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <h1>Login hook </h1>
      {isLogin ? <p>已登录</p> : <p>未登录</p>}
      <button onClick={() => setIsLogin(!isLogin)}>切换登录状态</button>
    </div>
  );
}

export default App;
