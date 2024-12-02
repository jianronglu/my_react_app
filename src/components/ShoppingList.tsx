import React from 'react';
import './ShoppingList.css';

interface Product {
    id: number;
    name: string;
    price: number;
    isFruit: boolean;
}

interface ShoppingListProps {
    products: Product[];
}

function ShoppingList({ products }: ShoppingListProps): JSX.Element {
    return (
        <ul className='shopping-list'>
            {products.map((product) => (
                <li className='shopping-item' key={product.id} style={{ color: product.isFruit ? 'magenta' : 'darkgreen' }}>
                    {product.name}, ￥{product.price}
                </li>
            ))}
        </ul>
    );
}

const ShoppingList2 = ({ products }: ShoppingListProps) => (// 箭头函数
    <ul className='shopping-list'>
        {products.map((product) => (
            <li className='shopping-item' key={product.id} style={{ color: product.isFruit ? 'magenta' : 'darkgreen' }}>
                {product.name}, ￥{product.price}
            </li>
        ))}
    </ul>
);

export default ShoppingList;
export { ShoppingList2 };