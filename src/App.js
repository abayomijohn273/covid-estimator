import React, { useState } from 'react';
import './App.css';

function App() {
  const [population, setPopulation] = useState('');
  const [timeToElapse, setTimeToElapse] = useState('');
  const [reportedCases, setReportedCases] = useState('');
  const [totalHospitalBeds, setTotalHospitalBeds] = useState('');
  const [periodType, setPeriodType] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      region: {
        name: 'Africa',
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
      },
      periodType,
      timeToElapse,
      reportedCases,
      population,
      totalHospitalBeds
    };
    console.log(data);
  };
  return (
    <div className="row">
      <div className="container">
        <div className="col-md-6 col-md-8 col-sm-12">
          <div className="number-left my-4">
            <h3 className="bold">Covid19 Estimator</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="population">Population</label>
              <input
                type="number"
                name="population"
                value={population}
                onChange={e => setPopulation(e.target.value)}
                className="form-control"
                id="data-population"
                aria-describedby="data-population"
                placeholder="Enter Population"
              />
            </div>
            <div className="form-group">
              <label htmlFor="timeToElapse">Elapse Time</label>
              <input
                type="number"
                name="timeToElapse"
                value={timeToElapse}
                onChange={e => setTimeToElapse(e.target.value)}
                className="form-control"
                id="data-time-to-elapse"
                aria-describedby="data-time-to-elapse"
                placeholder="Enter Time to elapse"
              />
            </div>
            <div className="form-group">
              <label htmlFor="population">Reported Cases</label>
              <input
                type="number"
                name="reportedCases"
                value={reportedCases}
                onChange={e => setReportedCases(e.target.value)}
                className="form-control"
                id="data-reported-cases"
                aria-describedby="data-reported-cases"
                placeholder="Enter No of Reported Cases"
              />
            </div>
            <div className="form-group">
              <label htmlFor="population">Total Hospital Beds</label>
              <input
                type="number"
                name="totalHospitalBeds"
                value={totalHospitalBeds}
                onChange={e => setTotalHospitalBeds(e.target.value)}
                className="form-control"
                id="data-total-hospital-beds"
                aria-describedby="data-total-hospital-beds"
                placeholder="Enter No of Total Hospital Bed"
              />
            </div>
            <div className="form-group">
              <label htmlFor="population">Select Period Type</label>
              <select
                id="inputState"
                className="form-control"
                name="periodType"
                value={periodType}
                onChange={e => setPeriodType(e.target.value)}
                aria-describedby="data-period-type"
              >
                <option>Choose...</option>
                <option value="days">Days</option>
                <option value="weeks">Weeks</option>
                <option value="months">Months</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              aria-describedby="data-go-estimate"
            >
              Submit Data
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
