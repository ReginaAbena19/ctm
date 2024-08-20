import React from 'react';

const InputField = ({ id, field }) => {
  return (
    <input
      id={id}
      type={field.type}
      placeholder={field.placeholder || ''}
      className="input-field"
      aria-label={field.ariaLabel || field.placeholder || ''}
    />
  );
};


export default InputField;

