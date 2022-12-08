import { render, screen } from '@testing-library/react';
import Home from './pages/Home';
import Details from './pages/Details';
import App from './App';
test('renders Update Customer and related components', () => {
    render(<Home />)
    const linkElement = screen.getByTestId("add");
    expect(linkElement).toBeInTheDocument();
    expect(screen.getByRole("button", {name: "Add sponser"})).toBeInTheDocument;
    const inputNode = screen.getByPlaceholderText('Email');
    expect(inputNode).toBeInTheDocument;
    const inputNode2 = screen.getByPlaceholderText('Lastname');
    expect(inputNode2).toBeInTheDocument;
    const inputNode3 = screen.getByPlaceholderText('Firstname');
    expect(inputNode3).toBeInTheDocument;
    const inputNode4 = screen.getByPlaceholderText('Age');
    expect(inputNode4).toBeInTheDocument;
    const linkElement2 = screen.getByTestId("onDelete");
    expect(linkElement2).toBeInTheDocument();
});

test('renders Update Customer and related components', () => {
    render(<Details />)
    const linkElement = screen.getByTestId("add");
    expect(linkElement).toBeInTheDocument();
    expect(screen.getByRole("heading")).toHaveTextContent(/Sponser Panel/);
    expect(screen.getByRole("button", {name: "Add sponser"})).toBeInTheDocument;
    const inputNode = screen.getByPlaceholderText('Email');
    expect(inputNode).toBeInTheDocument;
    const inputNode2 = screen.getByPlaceholderText('Lastname');
    expect(inputNode2).toBeInTheDocument;
    const inputNode3 = screen.getByPlaceholderText('Firstname');
    expect(inputNode3).toBeInTheDocument;
    const inputNode4 = screen.getByPlaceholderText('Age');
    expect(inputNode4).toBeInTheDocument;
});