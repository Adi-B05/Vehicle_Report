import React, { useState } from 'react';
import './MachineryForm.css';

function MachineryForm() {
  const [formData, setFormData] = useState({
    mechanic: '',
    repeatedProblem: '',
    fuelPumpStatus: '',
    engineMotorStatus: '',
    sparesCost: '',
    sparesUsed: '',
    remarks: '',
    document: null,
    firstKmMeter: '',
    secondKmMeter: '',
    leakages: '',
    tyreStatus: '',
    batteryStatus: '',
    serviceCost: '',
    fuelPumpSystem: '',
    radiatorStatus: '',
    oilCondition: '',
    totalCost: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, document: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>Vehicle / Machinery - Queries Details</h3>

        <div className="grid-container">
          <div className="column">
            <div className="form-group">
              <label>Mechanic:</label>
              <input
                type="text"
                name="mechanic"
                value={formData.mechanic}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Repeated Problem:</label>
              <select
                name="repeatedProblem"
                value={formData.repeatedProblem}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="form-group">
              <label>Fuel Pump Status:</label>
              <input
                type="text"
                name="fuelPumpStatus"
                value={formData.fuelPumpStatus}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Engine/Motor Status:</label>
              <input
                type="text"
                name="engineMotorStatus"
                value={formData.engineMotorStatus}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Spares Cost:</label>
              <input
                type="number"
                name="sparesCost"
                value={formData.sparesCost}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Spares Used:</label>
              <input
                type="text"
                name="sparesUsed"
                value={formData.sparesUsed}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Remarks:</label>
              <textarea
                name="remarks"
                value={formData.remarks}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>

          <div className="column">
            <div className="form-group">
              <label>1st Km/hr Meter:</label>
              <input
                type="number"
                name="firstKmMeter"
                value={formData.firstKmMeter}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Leakages:</label>
              <input
                type="text"
                name="leakages"
                value={formData.leakages}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Tyre Status:</label>
              <input
                type="text"
                name="tyreStatus"
                value={formData.tyreStatus}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Battery Status:</label>
              <input
                type="text"
                name="batteryStatus"
                value={formData.batteryStatus}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Service Cost:</label>
              <input
                type="number"
                name="serviceCost"
                value={formData.serviceCost}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="column">
            <div className="form-group">
              <label>2nd Km/hr Meter:</label>
              <input
                type="number"
                name="secondKmMeter"
                value={formData.secondKmMeter}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Fuel Pump System:</label>
              <input
                type="text"
                name="fuelPumpSystem"
                value={formData.fuelPumpSystem}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Oil Condition:</label>
              <input
                type="text"
                name="oilCondition"
                value={formData.oilCondition}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Radiator Status:</label>
              <input
                type="text"
                name="radiatorStatus"
                value={formData.radiatorStatus}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Total Cost:</label>
              <input
                type="number"
                name="totalCost"
                value={formData.totalCost}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>Document Attached:</label>
          <input
            type="file"
            onChange={handleFileChange}
          />
        </div>

        <button type="submit" className="submit-btn">Upload</button>
      </form>
    </div>
  );
}

export default MachineryForm;
