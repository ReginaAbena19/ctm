import React, { useEffect, useState } from "react";
import "./CarForm.css";
import Form from "./Form";
import FormButtons from "./FormButtons";

const fetchFormData = async () => {
  try {
    const response = await fetch('/api.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return { questions: [] };
  }
};

const CarForm = () => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchFormData();
      setFormData(data.questions);
    };
    getData();
  }, []);

  if (!formData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="car-details-container">
      <main className="form-content">
        <h1>Fill in your details</h1>
        <p className="car-question">Can I get a quote for older cars?</p>
        <Form questions={formData} />
        <FormButtons />
      </main>
    </div>
  );
};

export default CarForm;
