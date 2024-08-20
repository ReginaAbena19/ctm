import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '../components/CarForm/Form'; 

// Mock Question component 
jest.mock('../components/CarForm/Question', () => ({ question }) => (
  <div className="form-group">
    <label htmlFor={`question-${question.id}`}>
      {question.title}
    </label>
    {question.fields.map((field, index) => {
      const id = `question-${question.id}-${index}`;
      if (field.element === 'input') {
        return <input key={index} id={id} placeholder={field.placeholder || ''} />;
      }
      if (field.element === 'select') {
        return (
          <select key={index} id={id}>
            <option>{field.placeholder || 'Please select...'}</option>
            {field.options && field.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      }
      return null;
    })}
  </div>
));

describe('Form', () => {
  const mockQuestions = [
    { id: 1, title: 'Question 1', fields: [{ element: 'input', placeholder: 'Enter text' }] },
    { id: 2, title: 'Question 2', fields: [{ element: 'select', placeholder: 'Choose one', options: [{ value: '1', label: 'Option 1' }] }] },
  ];

  test('renders questions correctly', () => {
    render(<Form questions={mockQuestions} />);

    // Check if each question title is in the document
    expect(screen.getByText('Question 1')).toBeInTheDocument();
    expect(screen.getByText('Question 2')).toBeInTheDocument();
  });

  test('renders fields for each question', () => {
    render(<Form questions={mockQuestions} />);

    // Check if the input field is rendered
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();

    // Check if the select field is rendered with options
    expect(screen.getByText('Choose one')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });
});



