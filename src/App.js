import './App.css';
import { Provider } from 'react-redux';
import createReduxStore from './store/index.js';
import Categories from './components/storefront/categories.jsx';
import Cart from './components/storefront/cart.jsx';

function App() {
  return (
    <Provider store={createReduxStore()}>
      <div className="App">
        <Cart />
        <Categories />
      </div>
    </Provider>
  );
}

export default App;
