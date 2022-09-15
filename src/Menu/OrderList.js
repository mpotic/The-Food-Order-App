import React, { useContext, useState } from 'react';

import styles from './OrderList.module.css';
import OrderItem from './OrderItem';
import Card from '../UI/Card';
import CartContext from '../Header/store/cart-context';

const items = [
  { name: 'Sushi', description: 'Finest fish and veggies!', price: '22' },
  { name: 'Pizza', description: 'With four kinds of cheese!', price: '19' },
  { name: 'Hamburger', description: 'With double juicy burger!', price: '13' },
  { name: 'Soup', description: 'Perfect appetizer!', price: '7' },
];

const OrderList = (props) => {
  const ctx = useContext(CartContext);
  const [menuItems] = useState(items);

  return (
    <Card>
      <ul className={styles['menu-list']}>
        {menuItems.map((item) => (
          <OrderItem
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            onAdd={ctx.addItem}
          ></OrderItem>
        ))}
      </ul>
    </Card>
  );
};

export default OrderList;
