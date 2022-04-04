import React, { useState } from "react";
import {EducationsForm} from "./EducationsForm";


const Educations = ({educations, removeEducation, updateEducations}) => {
    
    const [edit, setEdit] = useState({
        id: null,
        name: '',
        length: '',
        points: '',
        place: ''
    })

    const submitUpdate = (name, length, points, place) => {
        updateEducations(edit.id, name, length, points, place)
        setEdit({
            id: null,
            name: name,
            length: length,
            points: points,
            place: place
        })
    }
    if (edit.id) {
        return <EducationsForm edit={edit} onSubmit={submitUpdate}/>
    }

    return educations.map((education, index) => (
        <div key={index}>
            <div key={education.id}>
                <h3>{education.name}</h3>
                <p>{education.length} # {education.points} # {education.place}</p>
            </div>
            <button onClick={() => removeEducation(education.name)}>delete</button>
            <button onClick={() => setEdit({ id: education.id, name: education.name, length: education.length, points: education.points, place: education.points })}>update</button>
        </div>
    ))
}

export {Educations}