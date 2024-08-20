import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { jest } from '@jest/globals';
import CarForm from '../components/CarForm/CarForm';

// Mock fetch
global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ questions: [] }),
    })
  );
  
  describe('CarDetailsForm', () => {
    test('renders loading state initially', () => {
      render(<CarForm />);
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  
    test('fetches data and renders Form and FormButtons', async () => {
      render(<CarForm />);
      await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());
      expect(screen.getByText('Fill in your details')).toBeInTheDocument();
      expect(screen.getByText('Can I get a quote for older cars?')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Save Car/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Back/i })).toBeInTheDocument();
    });
  
    test('handles fetch error ', async () => {
      global.fetch.mockImplementationOnce(() =>
        Promise.resolve({
          ok: false,
        })
      );
  
      render(<CarForm />);
      await waitFor(() => expect(screen.getByText('Loading...')).toBeInTheDocument());
    });

    
  });
  