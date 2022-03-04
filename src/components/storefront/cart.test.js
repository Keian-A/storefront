import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cart from './cart.jsx';
import Categories from './categories.jsx';
import { Provider } from 'react-redux';
import store from '../../store/index.js';

describe("Tests cart button", () => {
    it('Should show correct number of items in cart on initial render', () => {
        render(
            <Provider store={store}>
                <Cart />
            </Provider>
        );
        let categoryButton = screen.getByTestId("cartTestClass");
        expect(categoryButton).toHaveTextContent('0');
    });
});