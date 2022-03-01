import './App.css';
import { Provider } from 'react-redux';
import createReduxStore from './store/index.js';
import Categories from './components/storefront/categories.jsx';

function App() {
  return (
    <Provider store={createReduxStore()}>
      <div className="App">
        <Categories />
      </div>
    </Provider>
  );
}

export default App;
