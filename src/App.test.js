import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { LandingPage } from './pages/LandingPage';
import App from './App';

// test('renders the landing page', () => {
//     render(<App />);
//   });

// test("Should render page header and HomePage on default route", () => {

//     // Act
//     render(
//       <MemoryRouter>
//         initialEntries={["/LandingPage"]}
//         {/* <LandingPage /> */}
//       </MemoryRouter>
//     );

//     // test login page login "Bret" and password "Kulas Light"
//     const username = screen.getByTestId("username");
//     const password = screen.getByPlaceholderText("password");
//     const button = screen.getByRole('button', { name: /Login/i });
//     expect(username).toBeInTheDocument();
//     expect(password).toBeInTheDocument();
//     expect(button).toBeInTheDocument();
//     userEvent.type(username, "Bret");
//     userEvent.type(password, "Kulas Light");
//     userEvent.click(button);
//     expect(screen.getByText("Bret")).toBeInTheDocument();
//     expect(screen.getByText("Kulas Light")).toBeInTheDocument();

// })

//test route to registration page
test('route to registration page', () => {
    render(
        <MemoryRouter>
            initialEntries={["/RegistrationPage"]}
            {/* <RegistrationPage /> */}
        </MemoryRouter>
    );
    expect(screen.getByText("Registration Page")).toBeInTheDocument();
})
