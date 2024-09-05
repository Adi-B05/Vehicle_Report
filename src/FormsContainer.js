import React, { useState } from 'react';
import MachineryForm from './MachineryForm';
import PowerToolsForm from './PowerToolsForm';
import './FormsContainer.css';

function FormsContainer() {
  const [selectedForm, setSelectedForm] = useState('');

  const handleFormChange = (e) => {
    setSelectedForm(e.target.value);
  };

  return (
    <div className="forms-container">
      <h1>Select Form Type</h1>
      <div className="form-selector">
        <label>Select Form:</label>
        <select value={selectedForm} onChange={handleFormChange}>
          <option value="">--Select--</option>
          <option value="machinery">Machinery Form</option>
          <option value="power-tools">Power Tools Form</option>
        </select>
      </div>
      
      {selectedForm === 'machinery' && <MachineryForm />}
      {selectedForm === 'power-tools' && <PowerToolsForm />}
    </div>
  );
}

export default FormsContainer;
