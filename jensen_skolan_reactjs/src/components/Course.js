import React from 'react'
import './Course.css'

export default function Course({courses, firstName, secondName, email, message, remove, update}) {
  return (

    <div className="course">
        <h2>Added Courses</h2>
        <div className="text">{courses}</div>
        <div className="text">{firstName}</div>
        <div className="text">{secondName}</div>
        <div className="text">{email}</div>
        <div className="text">{message}</div>
        <div className="course_btn">
            <button className="edit_btn" onClick={update}>Edit</button>
            <button className="delete_btn" onClick={remove}>Delete</button>
        </div>
    </div>

  )
}
