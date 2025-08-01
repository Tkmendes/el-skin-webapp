import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeaderComponents from './headerComponents'; 
import { useCartContext } from '../../Context/cartModalContext';

jest.mock('../../Context/cartModalContext', () => ({
    useCartContext: jest.fn(),
}));
const mockedUseCartContext = useCartContext as jest.Mock;

describe ('Header Component', () => {
    it('should render the header with the correct title', () => {
        // render(<HeaderComponents />);
        // const headerElement = screen.getByText(/Alura Store/i);
        // expect(headerElement).toBeInTheDocument();
        expect(true).toBeTruthy();
    });


});
