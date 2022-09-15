import React, { useState } from 'react';

const CartContext = React.createContext();

export const CartContextProvider = (props) => {
	const [items, setItems] = useState([]);

	const addItem = (name, price, quantity) => {
		const item = items.filter((x) => x.name === name)[0];
		if (item === undefined) {
			const newItem = {
				name: name,
				price: +price * +quantity,
				quantity: quantity,
			};
			setItems((prevState) => {
				prevState.push(newItem);
				return prevState.slice();
			});
			return;
		}
		setItems((prevState) => {
			const idx = prevState.findIndex((x) => x === item);
			prevState[idx].quantity = +prevState[idx].quantity + +quantity;
			prevState[idx].price += +quantity * +price;
			return prevState.slice();
		});
	};

	const removeOneItem = (name) => {
		const idx = items.findIndex((x) => x.name === name);
		if (idx > -1) {
			setItems((prevState) => {
				prevState[idx].price =
					prevState[idx].price - prevState[idx].price / prevState[idx].quantity;
				prevState[idx].quantity = +prevState[idx].quantity - 1;
				if (prevState[idx].quantity === 0) {
					prevState.splice(idx, 1);
				}
				return prevState.slice();
			});
		}
	};

	const addOneItem = (name) => {
		const idx = items.findIndex((x) => x.name === name);
		if (idx > -1) {
			setItems((prevState) => {
				prevState[idx].price =
					prevState[idx].price + prevState[idx].price / prevState[idx].quantity;
				prevState[idx].quantity = +prevState[idx].quantity + 1;
				return prevState.slice();
			});
		}
	};

	const removeAll = () => {
		setItems([]);
	};

	return (
		<CartContext.Provider
			value={{
				items: items,
				addItem: addItem,
				removeAll: removeAll,
				removeOneItem: removeOneItem,
				addOneItem: addOneItem,
			}}
		>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContext;
