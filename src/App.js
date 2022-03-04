import './App.css';
import { Provider } from 'react-redux';
import store from './store/index.js';
import Categories from './components/storefront/categories.jsx';
import Cart from './components/storefront/cart.jsx';
import Header from './components/header/header.jsx';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Cart />
        <Categories />
      </div>
    </Provider>
  );
}

export default App;
