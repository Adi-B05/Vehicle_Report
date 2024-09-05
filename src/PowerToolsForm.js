import React, { useState } from 'react';
import './PowerToolsForm.css';

function PowerToolsForm() {
  const [formData, setFormData] = useState({
    mechanic: '',
    deadManSwitch: '',
    repeatedProblem: '',
    sparesCost: '',
    totalCost: '',
    remarks: '',
    machineHandleCondition: '',
    machineCableCondition: '',
    wheelGuardCondition: '',
    serviceCost: '',
    additionalSparesCost: '',
    document: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here, like sending the form data to a server
  };

  return (
    <form className="power-tools-form" onSubmit={handleSubmit}>
      <h2>Power Tools – Queries Details</h2>
      <div className="grid-container">
        <div>
          <label>Mechanic:</label>
          <input
            type="text"
            name="mechanic"
            placeholder="Enter Name"
            value={formData.mechanic}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Machine Handle Condition:</label>
          <input
            type="text"
            name="machineHandleCondition"
            placeholder="Enter here"
            value={formData.machineHandleCondition}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Dead Man Switch:</label>
          <input
            type="text"
            name="deadManSwitch"
            placeholder="Enter here"
            value={formData.deadManSwitch}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Machine Cable Condition:</label>
          <input
            type="text"
            name="machineCableCondition"
            placeholder="Enter here"
            value={formData.machineCableCondition}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Repeated Problem:</label>
          <input
            type="text"
            name="repeatedProblem"
            placeholder="Enter here"
            value={formData.repeatedProblem}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Wheel Guard Condition:</label>
          <input
            type="text"
            name="wheelGuardCondition"
            placeholder="Enter here"
            value={formData.wheelGuardCondition}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Spares Cost:</label>
          <input
            type="number"
            name="sparesCost"
            placeholder="Enter cost"
            value={formData.sparesCost}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Service Cost:</label>
          <input
            type="number"
            name="serviceCost"
            placeholder="Enter cost"
            value={formData.serviceCost}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Total Cost:</label>
          <input
            type="number"
            name="totalCost"
            placeholder="Enter cost"
            value={formData.totalCost}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Additional Spares Cost:</label>
          <input
            type="number"
            name="additionalSparesCost"
            placeholder="Enter cost"
            value={formData.additionalSparesCost}
            onChange={handleChange}
          />
        </div>
        <div className="full-width">
          <label>Remarks:</label>
          <textarea
            name="remarks"
            placeholder="Enter remarks"
            value={formData.remarks}
            onChange={handleChange}
          />
        </div>
        <div className="full-width">
          <label>Document Attached:</label>
          <input
            type="file"
            name="document"
            onChange={handleChange}
          />
        </div>
      </div>
      <button type="submit">Upload</button>
    </form>
  );
}

export default PowerToolsForm;
