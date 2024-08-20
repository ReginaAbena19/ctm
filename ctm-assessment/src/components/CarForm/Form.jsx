import React from 'react';
import Question from './Question';

const Form = ({ questions }) => {
  return (
    <form className="car-details-form">
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
    </form>
  );
};


export default Form;





