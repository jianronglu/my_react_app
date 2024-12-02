import React from 'react';
import ShoppingList, { ShoppingList2 } from './components/ShoppingList.tsx';
import './App.css';

const productList = [
  { id: 1, name: 'Cabbage', price: 100, isFruit: false },
  { id: 2, name: 'Garlic', price: 200, isFruit: false },
  { id: 3, name: 'Apple', price: 300, isFruit: true },
];

function App() {
  return (
    <div className='App'>
      <h1 className='list-title'>产品列表</h1>
      <ShoppingList products={productList} />
      <h1 className='list-title'>产品列表箭头函数</h1>
      <ShoppingList2 products={productList} />
    </div >
  );
}

export default App;
