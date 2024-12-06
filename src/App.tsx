import React from 'react';
import ShoppingList, { ShoppingList2 } from './components/Shopping/ShoppingList.tsx';
import './App.css';
import { useTitle , useMouse, /*useWindowSize,*/ useGetInfo} from './hooks/Hooks.ts';

const productList = [
  { id: 1, name: 'Cabbage', price: 100, isFruit: false },
  { id: 2, name: 'Garlic', price: 200, isFruit: false },
  { id: 3, name: 'Apple', price: 300, isFruit: true },
];

function App() {
  useTitle('产品列表')
  // const { width, height } = useWindowSize();
  // console.log(width, height);


  const { loading, info } = useGetInfo();
  const position = useMouse();
  console.log(position.x, position.y);

  return (
    <div className='App'>
      <h1 className='list-title'>产品列表</h1>
      <ShoppingList products={productList} />
      <h1 className='list-title'>产品列表箭头函数</h1>
      <ShoppingList2 products={productList} />
      <div>{loading ? '加载中...' : info}</div>
    </div >
  );
}

export default App;
