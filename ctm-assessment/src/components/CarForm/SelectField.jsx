import React from 'react';

const SelectField = ({ id, field }) => {
  return (
    <select id={id} className="select-field">
      <option>{field.placeholder || 'Please select...'}</option>
      {field.options && field.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectField;
