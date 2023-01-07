import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/layouts/Footer';


describe("Test content Footer", () => {
    test("return string",() => {
        render(<Footer />);
        const by = screen.getByText(/Made By Angela Díaz/i);
        expect(by).toBeInTheDocument()
    });

    test("return if element exist",() => {
        render(<Footer />);
        const numberPhone = screen.getByText(/315-362-1841/i);
        expect(numberPhone).toBeInTheDocument()
    });

    test("image has src and text alt",() => {
        render(<Footer />);
        expect(screen.getByAltText(/logo de Fragaria/i)).toHaveAttribute("src")
    })

    test('if the image is in the DOM', () => {
        render(<Footer />);
        expect(screen.getByRole("img")).toBeInTheDocument()
    });

})

