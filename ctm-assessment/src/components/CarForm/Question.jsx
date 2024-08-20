import React from 'react';
import InputField from './InputField';
import SelectField from './SelectField';

const Question = ({ question }) => {
  return (
    <div className="form-group">
      <label htmlFor={`question-${question.id}`}>
        {question.title}
      </label>
      {question.fields.map((field, index) => {
        const id = `question-${question.id}-${index}`;
        if (field.element === "input") {
          return <InputField key={index} id={id} field={field} />;
        }
        if (field.element === "select") {
          return <SelectField key={index} id={id} field={field} />;
        }
        return null;
      })}
    </div>
  );
};

export default Question;

