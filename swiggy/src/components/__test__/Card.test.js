import {act} from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockRestMenu.json";
import {Provider} from "react-redux";
import store from "../../utils/store";
import Header from "../Header";
import {BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
});

it('Should Load restaurant Menu component', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={store}>
                <Header />
                <RestaurantMenu/>
                <Cart />
            </Provider>
        </BrowserRouter>
    ));
    const accordionHeader = screen.getByText("Pot Rice");
    fireEvent.click(accordionHeader);

    const itemList = screen.getAllByTestId("itemList");
    expect(itemList).toHaveLength(1);

    const addBtn = screen.getAllByRole('button', { name: "Add"});
    fireEvent.click(addBtn[0]);

    expect(screen.getByText("1 Cart")).toBeInTheDocument();

    fireEvent.click(addBtn[0]);
    expect(screen.getByText("2 Cart")).toBeInTheDocument();

    expect(screen.getAllByTestId("itemList")).toHaveLength(1);

    fireEvent.click(screen.getByTestId("clearBtn"));

    expect(screen.getByText("No Items in the Cart")).toBeInTheDocument();
})
