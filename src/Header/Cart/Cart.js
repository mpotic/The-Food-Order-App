import React, {
	useContext,
	Fragment,
	useEffect,
	useState,
	useRef,
} from 'react';

import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Cart.module.css';
import CartContext from '../store/cart-context';
import CartInfo from './CartInfo';

const Cart = (props) => {
	const ctx = useContext(CartContext);
	const [cartState, setCartState] = useState(false);
	const isMounted = useRef(false);

	const calculateQuantity = () => {
		let quantity = 0;
		ctx.items.forEach((element) => {
			quantity = quantity + +element.quantity;
		});
		return quantity;
	};

	useEffect(() => {
		let id
		if (isMounted.current) {
			setCartState(true);
			id = setTimeout(() => {
				setCartState(false);
			}, 300);
		} else {
			isMounted.current = true;
		}

		return () => {
			clearTimeout(id);
		};
	}, [ctx.items]);

	return (
		<Fragment>
			<button
				className={`${styles.cart} ${cartState ? styles.animateCart : styles.stopAnimation}`}
				onClick={props.showCart}
			>
				<FontAwesomeIcon className={styles.icon} icon={faCartShopping} />
				<span className={styles.text}>Your cart</span>
				<span className={styles.quantity}>{calculateQuantity()}</span>
			</button>
			<CartInfo display={props.display} hideCart={props.hideCart}></CartInfo>
		</Fragment>
	);
};

export default Cart;
