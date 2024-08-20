import React from 'react';
import { render, screen } from '@testing-library/react';
import InputField from '../components/CarForm/InputField';


describe('InputField', () => {
  test('renders input field with correct attributes', () => {
    render(<InputField id="test-id" field={{ type: 'text', placeholder: 'Test Placeholder' }} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('id', 'test-id');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('placeholder', 'Test Placeholder');
  });
});


