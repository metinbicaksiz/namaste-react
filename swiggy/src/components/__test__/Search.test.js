import Body from '../Body';
import {fireEvent, render, screen} from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResData.json";
import {act} from "react";
import {BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
});

it('renders the Body component with search Res List with text Burger', async () => {

    await act(async () => render(
    <BrowserRouter>
        <Body />
    </BrowserRouter>
    ));

    const searchbar = screen.getByRole('button', { name: "Search" });

    const searchInput = screen.getByTestId('search-input');

    fireEvent.change(searchInput, {target: { value: "burger"}});

    fireEvent.click(searchbar);

    const cards = screen.getAllByTestId('resCard');

    expect(cards.length).toBe(1);
})

it('renders the Body component with Top Rated Restaurants', async () => {

    await act(async () => render(
    <BrowserRouter>
        <Body />
    </BrowserRouter>
    ));

    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(8);

    const topRatedButton = screen.getByRole('button', { name: "top rated restaurants" });
    fireEvent.click(topRatedButton);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(8);
})