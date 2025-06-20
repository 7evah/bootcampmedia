import React, { useState } from 'react';
import FormComponent from './FormComponent';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    lactoseFree: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create URL query string
    const params = new URLSearchParams();
    for (let key in formData) {
      const value = formData[key];
      if (typeof value === 'boolean') {
        if (value) params.append(key, 'on'); // checkbox checked
      } else {
        params.append(key, value);
      }
    }

    // Push to URL
    const newUrl = `${window.location.origin}/?${params.toString()}`;
    window.location.href = newUrl;
  };

  return (
    <div>
      <h1>React Form</h1>
      <FormComponent
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
