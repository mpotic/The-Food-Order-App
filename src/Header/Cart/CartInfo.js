import React, { useContext, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './CartInfo.module.css';
import CartContext from '../store/cart-context';
import CartItem from './CartItem.js';

const CartInfo = (props) => {
	const ctx = useContext(CartContext);
	const [, setUpdate] = useState(false);
	const [ordered, setOrdered] = useState(false);

	const updated = () => {
		setUpdate((prevState) => {
			return !prevState;
		});
		setOrdered(false);
	};

	const totalPrice = () => {
		let total = 0;
		for (const element in ctx.items) {
			total += ctx.items[element].price;
		}
		return total;
	};

	const closeHandler = () => {
		props.hideCart();
		setOrdered(false);
	};

	const placeOrder = () => {
		setUpdate((prevState) => {
			return !prevState;
		});
		setOrdered(true);
		ctx.removeAll();
	};

	const component = (
		<div
			className={`${styles.container} ${
				!props.display ? styles['container-none'] : ''
			}`}
			onClick={closeHandler}
		>
			<div
				className={styles.info}
				onClick={(event) => {
					event.stopPropagation();
				}}
			>
				<div className={styles.scrollable}>
					{ctx.items.length > 0 ? (
						ctx.items.map((item) => (
							<CartItem
								key={item.name}
								item={item}
								onRemoveItem={ctx.removeOneItem}
								onAddItem={ctx.addOneItem}
								onUpdate={updated}
							></CartItem>
						))
					) : (
						<p className={styles['message']}>
							{ordered ? 'Thank you for ordering!' : 'Cart is empty!'}
						</p>
					)}
				</div>
				<div>
					{ctx.items.length > 0 ? (
						<div className={styles['total-price']}>
							<span className={styles['span-price']}>Total price</span>
							<span className={styles['span-total']}>${totalPrice()}</span>
						</div>
					) : (
						''
					)}
					<div
						className={`${styles.buttons} ${
							ctx.items.length === 0 ? styles.center : ''
						}`}
					>
						<button onClick={closeHandler} className={styles.action}>
							Close
						</button>
						{ctx.items.length > 0 ? (
							<button className={styles.action} onClick={placeOrder}>
								Order
							</button>
						) : (
							''
						)}
					</div>
				</div>
			</div>
		</div>
	);

	return createPortal(component, document.getElementById('overlays'));
};

export default CartInfo;
