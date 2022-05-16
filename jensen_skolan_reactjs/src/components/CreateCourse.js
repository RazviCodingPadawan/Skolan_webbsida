import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function CreateCourse() {
  const [form, setForm] = useState({
    courseName: "",
    courseId: "",
    lastDate: "",
    educator: "",
    location: "",
  });
  const navigate = useNavigate();

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    const newCourse = { ...form };

    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCourse),
    })
    .catch(error => {
      window.alert(error);
      return;
    });

    setForm({ courseName: "", courseId: "", lastDate: "", educator: "", location: "", });
    navigate("/record");
  }

  return (
    <div>
      <h3>LÄGG TILL KURS</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
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
          <input
            type="text"
            className="form-control"
            placeholder="SISTA ANSÖKNINGSDATUM"
            id="lastDate"
            required="NÖDVÄNDIG"
            value={form.lastDate}
            onChange={(e) => updateForm({ lastDate: e.target.value })}
          />
        </div>
        <div className="form-group">
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
              checked={form.locatidon === "DISTANS"}
              onChange={(e) => updateForm({ location: e.target.value })}
            />
            <label htmlFor="positionDistance" className="form-check-label">DISTANS</label>
          </div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="LÄGG TILL"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

// © NATTA
