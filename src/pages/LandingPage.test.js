import { MemoryRouter } from "react-router-dom";
import { LandingPage } from './LandingPage';

import { render, screen, cleanup } from "@testing-library/react";
import  ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";   


//test login page login "Bret" and password "Kulas Light"
test('login page login "Bret" and password "Kulas Light"', () => {
    const root = createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter>
            <LandingPage />
        </BrowserRouter>
    );
    const username = screen.getByPlaceholderText("username");
    const password = screen.getByPlaceholderText("password");
    const button = screen.getByRole('button', { name: /Login/i });
    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    userEvent.type(username, "Bret");
    userEvent.type(password, "Kulas Light");
    userEvent.click(button);
    expect(screen.getByText("Bret")).toBeInTheDocument();
    expect(screen.getByText("Kulas Light")).toBeInTheDocument();
});
