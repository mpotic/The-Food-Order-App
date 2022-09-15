import React, { useState } from 'react';

import styles from './OrderItem.module.css';

const OrderItem = (props) => {
	const [quantity, setQuantity] = useState('1');

	const AddItemHandler = () => {
		props.onAdd(props.name, props.price, quantity);
	};

	const ChangeQuantityHandler = (event) => {
		setQuantity(event.target.value);
	};

	return (
		<li className={styles['menu-item']}>
			<div className={styles.info}>
				<span className={styles['span-text']}>{props.name}</span>
				<span className={styles['span-text']}>{props.description}</span>
				<span className={styles['span-text']}>${props.price}</span>
			</div>
			<div className={styles.action}>
				<div>
					<label className={styles.amount}>Amount</label>
					<input
						className={styles.quantity}
						type="number"
						value={quantity}
						onChange={ChangeQuantityHandler}
					></input>
				</div>
				<button className={styles.add} onClick={AddItemHandler}>
					+Add
				</button>
			</div>
		</li>
	);
};

export default OrderItem;
