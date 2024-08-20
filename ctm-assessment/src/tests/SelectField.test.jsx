import React from 'react';
import SelectField from '../components/CarForm/SelectField';
import { render, screen } from '@testing-library/react';


describe('SelectField', () => {
  test('renders select field with correct options', () => {
    const field = {
      placeholder: 'Choose an option',
      options: [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' }
      ]
    };
    render(<SelectField id="select-id" field={field} />);
    expect(screen.getByText('Choose an option')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });
});
