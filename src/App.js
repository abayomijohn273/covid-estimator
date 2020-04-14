import React, { useState } from 'react';
import './App.css';
import CovidImg from './assets/image.webp';
function App() {
  const [population, setPopulation] = useState('');
  const [timeToElapse, setTimeToElapse] = useState('');
  const [reportedCases, setReportedCases] = useState('');
  const [totalHospitalBeds, setTotalHospitalBeds] = useState('');
  const [periodType, setPeriodType] = useState('day');
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
    <div className="main">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="number-left mt-4 mb-5">
              <h3>Covid19 Estimator</h3>
            </div>
            <div className="form-frame">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-4">
                  <label for="data-population">Total Population</label>
                  <input
                    type="number"
                    name="data-population"
                    data-population={population}
                    value={population}
                    onChange={e => setPopulation(e.target.value)}
                    className="form-control"
                    id="data-population"
                    aria-labelledby="data-population"
                    // placeholder="Enter Population"
                  />
                </div>
                <div className="form-group mb-4">
                  <label for="data-time-to-elapse">Time to Elapse</label>
                  <input
                    type="number"
                    name="data-time-to-elapse"
                    data-time-to-elapse={timeToElapse}
                    value={timeToElapse}
                    onChange={e => setTimeToElapse(e.target.value)}
                    className="form-control"
                    id="data-time-to-elapse"
                    aria-labelledby="data-time-to-elapse"
                    // placeholder="Enter Time to elapse"
                  />
                </div>
                <div className="form-group mb-4">
                  <label for="data-reported-cases">Reported Cases</label>
                  <input
                    type="number"
                    name="data-reported-cases"
                    data-reported-cases={reportedCases}
                    value={reportedCases}
                    onChange={e => setReportedCases(e.target.value)}
                    className="form-control"
                    id="data-reported-cases"
                    aria-labelledby="data-reported-cases"
                    // placeholder="Enter No of Reported Cases"
                  />
                </div>
                <div className="form-group mb-4">
                  <label for="data-total-hospital-beds">
                    Total Hospital Beds
                  </label>
                  <input
                    type="number"
                    name="data-total-hospital-beds"
                    data-total-hospital-beds={totalHospitalBeds}
                    value={totalHospitalBeds}
                    onChange={e => setTotalHospitalBeds(e.target.value)}
                    className="form-control"
                    id="data-total-hospital-beds"
                    aria-labelledby="data-total-hospital-beds"
                    // placeholder="Enter No of Total Hospital Bed"
                  />
                </div>
                <div className="form-group mb-4">
                  <label for="data-period-type">Select Period Type</label>
                  <select
                    id="data-period-type"
                    className="form-control"
                    data-period-type={periodType}
                    value={periodType}
                    onChange={e => setPeriodType(e.target.value)}
                    aria-labelledby="data-period-type"
                  >
                    <option value="days">Days</option>
                    <option value="weeks">Weeks</option>
                    <option value="months">Months</option>
                  </select>
                </div>
                <button
                  type="submit"
                  data-go-estimate
                  className="btn btn-lg mb-4"
                  id="data-go-estimate"
                  aria-labelledby="data-go-estimate"
                >
                  Submit Data
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 hidden-sm m-auto">
            <img
              class="img-responsive covid-img"
              src={CovidImg}
              alt="Covid19 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
