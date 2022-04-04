import React, { useState } from "react";
import {Educations} from '../components/Educations';
import {EducationsForm} from '../components/EducationsForm'
import '../styles/Educations.css'

const EducationsList = () => {
    const [educations, setEducations] = useState([])

    const addEducation = () => {
        const data = new XMLHttpRequest()
        data.open('GET', 'http://localhost:4000/showAll')
        data.send()
    }

    const updateEducations = (educationId, newValue) => {
        setEducations(prev => prev.map(item => (item.id === educationId ? newValue : item)))
    }

    const removeEducation = nameEd => {
        const req = new XMLHttpRequest()
        console.log(nameEd)
        req.open('POST', 'http://localhost:4000/delete')
        req.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
        req.send(JSON.stringify({name: nameEd}))
    }

    const showAll = () => {
        const data = new XMLHttpRequest()
        data.addEventListener('load', () => {
            var arr = []
            var result = JSON.parse(data.response)
            result.forEach((ed) => {
                arr.push({
                    name: ed.name,
                    length: ed.teacher,
                    points: ed.description,
                    place: ed.classes
                })
            })
            console.log(data.response)
            setEducations(arr)
        })
        data.open('GET', 'http://localhost:4000/showAll')
        data.send()
        

    }

    return (
        <div className="educations_container">
            <div className="create">
                <h1>Create new Education</h1>
                <EducationsForm onSubmit={addEducation}/>
            </div>
            
            <div className="ed-list">
            <button onClick={showAll}>Show all Educations</button>
            <Educations educations={educations} removeEducation={removeEducation} updateEducations={updateEducations}/>
            </div>
        </div>
    )
}

export {EducationsList}