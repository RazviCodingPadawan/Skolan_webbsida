import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarCourse from "./navbarCourse";

const Record = (props) => (
  <tr>
    <td>{props.record.courseName}</td>
    <td>{props.record.courseId}</td>
    <td>{props.record.lastDate}</td>
    <td>{props.record.educator}</td>
    <td>{props.record.location}</td>
    <td>
      <Link className="btn btn-link" to={`/edit/${props.record._id}`}>ÄNDRA</Link> 
      <button className="btn btn-link"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        || RADERA ||
      </button>
    </td>
  </tr>
);

export default function RecordList() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/record/`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return; 
  }, [records.length]);

  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE"
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  return (
    <div>
      <NavbarCourse />
      <h3>REGISTRERADE KURSER</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>KURSNAMN</th>
            <th>KURSID</th>
            <th>SISTA A-DATUM</th>
            <th>UTBILDARE</th>
            <th>PLATS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
}

// © NATTA