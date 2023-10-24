import React, { useState, useEffect } from 'react';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 


function Users() {
  const [data, setData] = useState([]);
  const [additionalData, setAdditionalData] = useState([]);
  const [selectedSource, setSelectedSource] = useState('');
  const [selectedMissingFrom, setSelectedMissingFrom] = useState('');
  const [oppositeSource, setOppositeSource] = useState('');


  useEffect(() => {
    // Fetch data from the JSON file
    fetch('./new_mismatchedRecords1.json') 
      .then((response) => response.json())
      .then((jsonData) => {
        const mainData = jsonData.filter(
          (item) =>
            item.Source === 'AccEnvironment' || item.Source === 'CfgEnvironment'
        );
        setData(mainData);
        console.log("filteredData in Users component:", mainData);
        const newData = jsonData.filter(
          (item) => item.differences !== undefined
        );
        setAdditionalData(newData);
      });
  }, []);

  // Function to filter data based on the selected source
  const filteredData = data.filter(
    (item) =>
      (selectedSource === '' || item.Source === selectedSource) &&
      (selectedMissingFrom === '' || item.MissingFrom === selectedMissingFrom)
  );


  // Function to filter data for the second table based on the opposite source
  const secondTableData = data.filter(
    (item) => (oppositeSource === '' || item.Source === oppositeSource)
  );

  // Function to get the keys from the differences object as column names
  const getColumnNames = () => {
    const columnNames = new Set();
    additionalData.forEach((item) => {
      if (item.differences) {
        Object.keys(item.differences).forEach((key) => {
          columnNames.add(key);
        });
      }
    });
    return Array.from(columnNames);
  };


  console.log();

  return (
    <div>
      <main className="main-container">
        <div className="table-responsive">
          <div style={{ marginLeft: " 300px", marginRight: "320px" }}>
            <label htmlFor="sourceSelect" className="form-label">
              Select Source and  Target:
            </label>
            <select
              id="sourceSelect"
              className="form-select"
              onChange={(e) => {
                setSelectedSource(e.target.value);
                setOppositeSource(
                  e.target.value === 'CfgEnvironment'
                    ? 'AccEnvironment'
                    : 'CfgEnvironment'
                );
              }}
            >
              <option value="CfgEnvironment">CFG Environment and ACC Environment</option>
              <option value="AccEnvironment">CFG Environment and UAT Environment</option>
              <option value="AccEnvironment">ACC Environment and UAT Environment</option>

            </select>
          </div>
        </div>
      </main>

      <main className="main-container">
        <div className="centered-table">
          <h1 className="centered-h1">Missing from Source {oppositeSource}</h1>
          <div className="table-container ">
            <div className="scrolling-table-container">
              <table className=" smooth-table custom-table table table-bordered custom-styled-table">
                <thead>
                  <tr>

                    {filteredData.length > 0 && Object.keys(filteredData[0]).map((key, index) => {
                      if (key == "Identity" || key == "Description" || key == "WebUser") {
                        return (

                          <th key={index}>{key}</th>
                        );
                      }
                    })}
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr key={index}>
                      {Object.keys(item).map((key, innerIndex) => {
                        const allowedKeys = ["Identity", "Description", "WebUser"];
                        if (allowedKeys.includes(key)) {
                          return (
                            <td key={innerIndex}>
                              {item[key] !== null ? item[key].toString() : ''}
                            </td>
                          );
                        }
                        return null;
                      })}
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="centered-table">
          <h1 className="centered-h1">Missing from Target {oppositeSource}</h1>
          <div className="table-container">
            <div className="scrolling-table-container">
              <table className="custom-table table table-bordered custom-styled-table">
                <thead>
                  <tr>
                    {secondTableData.length > 0 && Object.keys(secondTableData[0]).map((key, index) => {
                      if (key == "Identity" || key == "Description" || key == "WebUser") {
                        return (

                          <th key={index}>{key}</th>
                        );
                      }
                    })}
                  </tr>
                </thead>
                <tbody>
                  {secondTableData.map((item, index) => (
                    <tr key={index}>
                      {Object.keys(item).map((key, innerIndex) => {
                        const allowedKeys = ["Identity", "Description", "WebUser"];
                        if (allowedKeys.includes(key)) {
                          return (
                            <td key={innerIndex}>
                              {item[key] !== null ? item[key].toString() : ''}
                            </td>
                          );
                        }
                        return null; 
                      })}
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="centered-table">
          <h1 className="centered-h1">Mismatch Data</h1>
          <div className="table-container" style={{ marginLeft: "300px", marginRight: "300px" }}>
            <div className="scrolling-table-container">
              <table className="custom-table table table-bordered custom-styled-table" >
                <thead>
                  <tr>
                    <th>Identity</th>
                    {getColumnNames().map((columnName) => (
                      <th key={columnName}>{columnName}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {additionalData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.Identity}</td>
                      {getColumnNames().map((columnName, columnIndex) => (
                        <td key={columnIndex}>
                          {item.differences &&
                            item.differences[columnName] &&
                            item.differences[columnName].AccEnvironment !== null
                            ? item.differences[columnName].AccEnvironment.toString()
                            : ''}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </main>
    </div>

  );


}

export default Users;