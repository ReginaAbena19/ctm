import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer/Footer';

describe('Footer Component', () => {
  test('renders footer with the correct elements and attributes', () => {
    render(<Footer />);

    // Check if the copyright text is rendered
    expect(screen.getByText(/© 2024 Compare the Market. All rights reserved./i)).toBeInTheDocument();

    // Check if the navigation links are rendered with correct base URLs
    const termsLink = screen.getByRole('link', { name: /Terms and conditions/i });
    const privacyLink = screen.getByRole('link', { name: /Privacy policy/i });
    const cookieLink = screen.getByRole('link', { name: /Cookie policy/i });

    
    expect(termsLink).toHaveAttribute('href', expect.stringContaining('https://www.comparethemarket.com/information/terms-and-conditions/?_gl=1*c3pb7a*_gcl_aw*R0NMLjE3MjM1ODkxNTguQ2owS0NRandpT3kxQmhEQ0FSSXNBREd2UW5CTGJLb1pDRVN6Tm5HYkVtanZMMVMyMThOZ2dOMC1Kb19jLUVybTdvQ2p6MVgyXzVtX1dDc2FBckxlRUFMd193Y0I.*_gcl_dc*R0NMLjE3MjM1ODkxNTguQ2owS0NRandpT3kxQmhEQ0FSSXNBREd2UW5CTGJLb1pDRVN6Tm5HYkVtanZMMVMyMThOZ2dOMC1Kb19jLUVybTdvQ2p6MVgyXzVtX1dDc2FBckxlRUFMd193Y0I.*_gcl_au*MTM5MjI2OTMzOS4xNzIzNTg1NzQ5*_ga*ODkzNDUxODQ1LjE3MjMxNDM4MTI.*_ga_EESV8NPC3W*MTcyNDAxMzQ4Mi43LjEuMTcyNDAxNTEyNy4wLjAuMA'));
    expect(privacyLink).toHaveAttribute('href', expect.stringContaining('https://www.comparethemarket.com/information/privacy-policy/?_gl=1*nhsudi*_gcl_aw*R0NMLjE3MjM1ODkxNTguQ2owS0NRandpT3kxQmhEQ0FSSXNBREd2UW5CTGJLb1pDRVN6Tm5HYkVtanZMMVMyMThOZ2dOMC1Kb19jLUVybTdvQ2p6MVgyXzVtX1dDc2FBckxlRUFMd193Y0I.*_gcl_dc*R0NMLjE3MjM1ODkxNTguQ2owS0NRandpT3kxQmhEQ0FSSXNBREd2UW5CTGJLb1pDRVN6Tm5HYkVtanZMMVMyMThOZ2dOMC1Kb19jLUVybTdvQ2p6MVgyXzVtX1dDc2FBckxlRUFMd193Y0I.*_gcl_au*MTM5MjI2OTMzOS4xNzIzNTg1NzQ5*_ga*ODkzNDUxODQ1LjE3MjMxNDM4MTI.*_ga_EESV8NPC3W*MTcyNDAxMzQ4Mi43LjEuMTcyNDAxNTEyNy4wLjAuMA'));
    expect(cookieLink).toHaveAttribute('href', expect.stringContaining('https://www.comparethemarket.com/information/privacy-policy/privacy-policy-use-of-cookies/?_gl=1*nhsudi*_gcl_aw*R0NMLjE3MjM1ODkxNTguQ2owS0NRandpT3kxQmhEQ0FSSXNBREd2UW5CTGJLb1pDRVN6Tm5HYkVtanZMMVMyMThOZ2dOMC1Kb19jLUVybTdvQ2p6MVgyXzVtX1dDc2FBckxlRUFMd193Y0I.*_gcl_dc*R0NMLjE3MjM1ODkxNTguQ2owS0NRandpT3kxQmhEQ0FSSXNBREd2UW5CTGJLb1pDRVN6Tm5HYkVtanZMMVMyMThOZ2dOMC1Kb19jLUVybTdvQ2p6MVgyXzVtX1dDc2FBckxlRUFMd193Y0I.*_gcl_au*MTM5MjI2OTMzOS4xNzIzNTg1NzQ5*_ga*ODkzNDUxODQ1LjE3MjMxNDM4MTI.*_ga_EESV8NPC3W*MTcyNDAxMzQ4Mi43LjEuMTcyNDAxNTEyNy4wLjAuMA'));

    // Check if the navigation has the correct aria-label
    expect(screen.getByRole('navigation')).toHaveAttribute('aria-label', 'Footer navigation');

    // Check if the logo image has alt text
    expect(screen.getByAltText(/Compare the Market company logo/i)).toBeInTheDocument();
  });

  test('navigation links open in a new tab', () => {
    render(<Footer />);

    const termsLink = screen.getByRole('link', { name: /Terms and conditions/i });
    const privacyLink = screen.getByRole('link', { name: /Privacy policy/i });
    const cookieLink = screen.getByRole('link', { name: /Cookie policy/i });

    // check link opens in a new tab
    expect(termsLink).toHaveAttribute('target', '_blank');
    expect(termsLink).toHaveAttribute('rel', 'noopener noreferrer');

    expect(privacyLink).toHaveAttribute('target', '_blank');
    expect(privacyLink).toHaveAttribute('rel', 'noopener noreferrer');

    expect(cookieLink).toHaveAttribute('target', '_blank');
    expect(cookieLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
