import React, { useState, useEffect } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import "./index.css";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobsData, setJobsData] = useState([]);
  const [arrayIndex, setArrayIndex] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setJobsData(data);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section-loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobsData[arrayIndex];

  return (
    <main className="section-center">
      <div className="staff-container">
        <div className="staff-btn-container">
          {/* btn container */}
          {jobsData.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setArrayIndex(index)}
                className={`staff-btn ${
                  index === arrayIndex && "active-staff-btn"
                }`}
              >
                {item.company}
              </button>
            );
          })}
        </div>

        <section className="staff-details-section">
          <div className="staff-details-header">
            <h1 className="experience">Experience</h1>
            <div className="underline"></div>
            <h3 className="staff-job">{title}</h3>
            <h4 className="company">{company}</h4>
            <p className="date">{dates}</p>
          </div>

          <div className="staff-duty-section">
            {duties.map((duty, index) => {
              return (
                <div key={index} className="staff-duty-container">
                  <span className="icon">
                    <FaArrowAltCircleRight />
                  </span>

                  <p className="staff-duty">{duty}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
