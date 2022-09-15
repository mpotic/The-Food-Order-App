import './App.css';
import Header from './Header/Header';
import { CartContextProvider } from './Header/store/cart-context';
import OrderList from './Menu/OrderList';

function App() {
	return (
		<CartContextProvider>
			<div className="App">
				<Header />
				<OrderList />
			</div>
		</CartContextProvider>
	);
}

export default App;
