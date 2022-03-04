import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Categories from './categories.jsx';
import { Provider } from 'react-redux';
import store from '../../store/index.js';

describe("Tests categories button", () => {
    it('Should display a categories button on initial render', () => {
        render(
            <Provider store={store}>
                <Categories />
            </Provider>
        );
        let categoryButton = screen.getByTestId("activeCategory");
        expect(categoryButton).toBeInTheDocument();
    });

    it('Should display a list of categories when categories button is clicked', () => {
        render(
            <Provider store={store}>
                <Categories />
            </Provider>
        );
        let categoryButton = screen.getByTestId("activeCategory");
        fireEvent.click(categoryButton);
        let categoryRender = screen.getByText("Food");
        expect(categoryRender).toBeInTheDocument();
    });

    it('Should render categorical components when a category is chosen', () => {
        render(
            <Provider store={store}>
                <Categories />
            </Provider>
        );
        let categoryButton = screen.getByTestId("activeCategory");
        fireEvent.click(categoryButton);
        let categoryRender = screen.getByText("Food");
        fireEvent.click(categoryRender);
        let categoryComponent = screen.getByText("Apple");
        expect(categoryComponent).toBeInTheDocument();
    });
});