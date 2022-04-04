import React, { useState } from "react";
import {EducationsForm} from "../components/EducationsForm";


const Educations = ({educations, removeEducation, updateEducations}) => {
    
    const [edit, setEdit] = useState({
        id: null,
        name: '',
        teacher: '',
        description: '',
        classes: ''
    })

    const submitUpdate = (name, teacher, description, classes) => {
        updateEducations(edit.name, name, teacher, description, classes)
        setEdit({
            id: null,
            name: name,
            teacher: teacher,
            description: description,
            classes: classes
        })
    }
    if (edit.id) {
        return <EducationsForm edit={edit} onSubmit={submitUpdate}/>
    }

    return educations.map((education, index) => (
        <div key={index}>
            <div key={education.id}>
                <h3>{education.name}</h3>
                <p>{education.teacher} # {education.description} # {education.classes}</p>
            </div>
            <button onClick={() => removeEducation(education.name)}>delete</button>
            <button onClick={() => setEdit({ id: education.id, name: education.name, teacher: education.teacher, description: education.description, classes: education.classes })}>update</button>
        </div>
    ))
}

export {Educations}