import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Header from '../components/Header/Header';

describe('Header component', () => {
  test('it will render header with logo and navigation text', () => {
    render(<Header />);
    
    // Check if the logo is present
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    
    // Check if the navigation is present
    expect(screen.getByText('Car insurance')).toBeInTheDocument();
  });
});
