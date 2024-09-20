import Header from '../Header';
import {fireEvent, render} from "@testing-library/react";
import { screen, configure } from '@testing-library/react'
import '@testing-library/jest-dom'
import {Provider} from "react-redux";
import store from "../../utils/store";
import { BrowserRouter} from 'react-router-dom';
import "@testing-library/jest-dom";

describe('Header', () => {
    it('renders Header correctly with a button', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </BrowserRouter>
    );
        const loginBtn = screen.getByRole('button', { name: /login/i });

        expect(loginBtn).toBeInTheDocument()
    })

    it('renders Header correctly with a logout button', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </BrowserRouter>
    );
        const loginBtn = screen.getByRole('button', { name: /Login/i });
        fireEvent.click(loginBtn);
        const logoutBtn = screen.getByRole('button', { name: /Logout/i });

        expect(loginBtn).toBeInTheDocument()
    })
})