import React from "react";
import './ReportsLayout.css';
import JohnReport from '../../assets/medical-report-john.pdf';
import JaneReport from '../../assets/medical-report-jane.pdf';

export default function ReportsLayout() {
  return (
    <section className="reports-container">
      <h2 className="reports-title">Reports</h2>
      <table className="reports-table">
        <thead>
          <tr>
            <th scope="col">Serial Number</th>
            <th scope="col">Doctor Name</th>
            <th scope="col">Doctor Speciality</th>
            <th scope="col">View Report</th>
            <th scope="col">Download Report</th>
          </tr>
        </thead>
        <tbody>
          <tr key="0">
            <td>
                0
            </td>
            <td>Dr. John Doe</td>
            <td>Cardiology</td>
            <td>
                <a className="report-button" href={JohnReport} target="_blank" >View Report</a>
            </td>
            <td>
                <a className="report-button" href={JohnReport} download="report.pdf">Download Report</a>
            </td>
          </tr>
          <tr key="1">
            <td>
                1
            </td>
            <td>Dr. Jane Smith</td>
            <td>Dermatology</td>
            <td>
                <a className="report-button" href={JaneReport} target="_blank" >View Report</a>
            </td>
            <td>
                <a className="report-button" href={JaneReport} download="report.pdf">Download Report</a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}