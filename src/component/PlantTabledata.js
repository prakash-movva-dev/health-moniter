import React from 'react';
import { plantTableData } from "../utils/demoData";
import '../styles/PlantTabledata.scss'


const PlantTabledata = () => {
    return (
      <table className="bordered-table">
        <thead>
          <tr>
            <th>Status</th>
            <th>Last Status Date</th>
            <th>Area</th>
            <th>Unit</th>
            <th>Asset Tag</th>
            <th>Last Date Received</th>
            <th>Issues</th>
            <th>Process Application</th>
            <th>Valve Application</th>
          </tr>
        </thead>
        <tbody>
          {plantTableData.map((row, index) => (
            <tr key={index}>
              <td>
                <div
                  className={`status-circle ${
                    row.status === "Unassigned"
                      ? "red"
                      : row.status === "Unassigned"
                      ? "red"
                      : "yellow"
                  }`}
                ></div>
              </td>
              <td>{row.lastStatusDate}</td>
              <td>{row.area}</td>
              <td>{row.unit}</td>
              <td>{row.assetTag}</td>
              <td>{row.lastDateReceived}</td>
              <td>{row.issues}</td>
              <td>{row.processApplication}</td>
              <td>{row.valveApplication}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default PlantTabledata;