import React, { useState } from 'react';
import './BreakdownReport.css';

function BreakdownReport() {
  const [formData, setFormData] = useState({
    site: '',
    transactionId: '',
    transactionDate: '',
    equipmentType: '',
    assetCode: '',
    type: '',
    model: '',
    breakdownType: '',
    breakdownDate: '',
    breakdownTime: '',
    mechanic: '',
    fuelPumpStatus: '',
    firstKmMeter: '',
    secondKmMeter: '',
    fuelStatus: '',
    engineStatus: '',
    leakages: '',
    batteryStatus: '',
    remarks: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Breakdown Report</h2>
      <div className="grid-container">
        <div>
          <label>Site</label>
          <input
            type="text"
            name="site"
            value={formData.site}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Transaction ID</label>
          <input
            type="text"
            name="transactionId"
            value={formData.transactionId}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Transaction Date</label>
          <input
            type="date"
            name="transactionDate"
            value={formData.transactionDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Equipment Type</label>
          <input
            type="text"
            name="equipmentType"
            value={formData.equipmentType}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Asset Code/Name</label>
          <input
            type="text"
            name="assetCode"
            value={formData.assetCode}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Type</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Sub Code</label>
          <input
            type="text"
            name="SubCode"
            value={formData.SubCode}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Model</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Breakdown Type</label>
          <input
            type="text"
            name="breakdownType"
            value={formData.breakdownType}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Breakdown Date</label>
          <input
            type="date"
            name="breakdownDate"
            value={formData.breakdownDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Breakdown Time</label>
          <input
            type="time"
            name="breakdownTime"
            value={formData.breakdownTime}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Repaired Date</label>
          <input
            type="text"
            name="RepairDate"
            value={formData.RepairDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Repair Time</label>
          <input
            type="text"
            name="RepairTime"
            value={formData.RepairTime}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Repair Status</label>
          <input
            type="text"
            name="RepairStatus"
            value={formData.RepairStatus}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Mech Charge</label>
          <input
            type="text"
            name="MechCharge"
            value={formData.MechCharge}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Issue</label>
          <input
            type="text"
            name="Issue"
            value={formData.issue}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Action Taken</label>
          <input
            type="text"
            name="actionTaken"
            value={formData.actionTaken}
            onChange={handleChange}
          />
        </div>
       
        
      </div>
     
    </form>
  );
}

export default BreakdownReport;
