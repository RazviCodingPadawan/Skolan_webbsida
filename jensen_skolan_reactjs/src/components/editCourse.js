import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function EditCourse() {
  const [form, setForm] = useState({
    courseName: "",
    courseId: "",
    lastDate: "",
    educator: "",
    location: "",
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);

      if (!response.ok) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/record");
        return;
      }

      setForm(record);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedCourse = {
      courseName: form.courseName,
      courseId: form.courseId,
      lastDate: form.lastDate,
      educator: form.educator,
      location: form.location,
    };

    await fetch(`http://localhost:5000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedCourse),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    navigate("/record");
  }

  return (
    <div>
      <h3>UPPDATERA KURS</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="courseName">KURSNAMN: </label>
          <input
            type="text"
            className="form-control"
            placeholder="KURSNAMN"
            id="courseName"
            required="NÖDVÄNDIG"
            value={form.courseName}
            onChange={(e) => updateForm({ courseName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseId">KURSID: </label>
          <input
            type="text"
            className="form-control"
            placeholder="KURSID"
            id="courseId"
            required="NÖDVÄNDIG"
            value={form.courseId}
            onChange={(e) => updateForm({ courseId: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastDate">SISTA ANSÖKNINGSDAG: </label>
          <input
            type="text"
            className="form-control"
            placeholder="SISTA ANSÖKNINGSDAG"
            id="lastDate"
            required="NÖDVÄNDIG"
            value={form.lastDate}
            onChange={(e) => updateForm({ lastDate: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="educator">UTBILDARE: </label>
          <input
            type="text"
            className="form-control"
            placeholder="UTBILDARE"
            id="educator"
            required="NÖDVÄNDIG"
            value={form.educator}
            onChange={(e) => updateForm({ educator: e.target.value })}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionClassroom"
              value="KLASSRUM"
              checked={form.location === "KLASSRUM"}
              onChange={(e) => updateForm({ location: e.target.value })}
            />
            <label htmlFor="positionClassroom" className="form-check-label">KLASSRUM</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionDistance"
              value="DISTANS"
              checked={form.location === "DISTANS"}
              onChange={(e) => updateForm({ location: e.target.value })}
            />
            <label htmlFor="positionDistance" className="form-check-label">DISTANS</label>
          </div>
        </div>
        <br />

        <div className="form-group">
          <input
            type="submit"
            value="UPPDATERA"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

// © NATTA