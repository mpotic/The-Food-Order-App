import React from 'react';
import styles from './CartItem.module.css';

const CartItem = (props) => {
	const removeItemHandler = () => {
		props.onRemoveItem(props.item.name);
		props.onUpdate();
	};

	const addItemHandler = () =>{
		props.onAddItem(props.item.name)
		props.onUpdate()
	}

	return (
		<div className={styles.item}>
			<div className={styles.description}>
				<div className={styles.name}>{props.item.name}</div>
				<div className={styles.price}>${props.item.price}</div>
				<div className={styles.quantity}>x{props.item.quantity}</div>
			</div>
			<button className={styles['action']} onClick={removeItemHandler}>
				-
			</button>
			<button className={styles['action']} onClick={addItemHandler}>
				+
			</button>
		</div>
	);
};

export default CartItem;
