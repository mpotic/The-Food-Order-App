import React, { useState } from 'react';

import styles from './Header.module.css';
import Cart from './Cart/Cart.js';
const Header = () => {
	const [display, setDisplay] = useState(false);

	const HideCartItemsHandler = () => {
		setDisplay(false);
	};

	const ShowCartItemsHandler = () => {
		setDisplay(true);
	};

	return (
		<div className={styles.header}>
			<div className={styles.text}>ReactMeals</div>
			<Cart
				showCart={ShowCartItemsHandler}
				display={display}
				hideCart={HideCartItemsHandler}
			></Cart>
		</div>
	);
};

export default Header;
