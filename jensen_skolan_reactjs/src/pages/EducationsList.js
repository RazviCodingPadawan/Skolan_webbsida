// Razvan D. Georgescu

import React, { useState } from "react";
import {Educations} from '../components/Educations';
import {EducationsForm} from '../components/EducationsForm'
import '../styles/Educations.css'

const EducationsList = () => {
    const [educations, setEducations] = useState([])

    const addEducation = (nyEd) => {
        const createEd = new XMLHttpRequest()
        createEd.open('POST', 'http://localhost:4000/add')
        createEd.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
        createEd.send(JSON.stringify({
            name: nyEd.name,
            teacher: nyEd.teacher,
            description: nyEd.description,
            classes: nyEd.classes
        }))
        //showAll()

    }


    const updateEducations = (oldName, name, teacher, description, classes) => {
        const req = new XMLHttpRequest()
        req.open('POST', 'http://localhost:4000/update')
        req.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
        req.send(JSON.stringify({
            oldName: oldName,
            education: name, 
        }))
        alert("Utbildning updaterad. Tryck på 'Show all Educations' för att visa updaterad lista")
        //showAll()
        //setEducations(prev => prev.map(item => (item.id === educationId ? newValue : item)))
    }

    const removeEducation = nameEd => {
        const req = new XMLHttpRequest()
        console.log(nameEd)
        req.open('POST', 'http://localhost:4000/delete')
        req.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
        req.send(JSON.stringify({ name: nameEd }))
        //showAll()
        alert("Utbildning raderad. Tryck på 'Show all Educations' för att visa updaterad lista")
    }

    const showAll = () => {
        const data = new XMLHttpRequest()
        data.addEventListener('load', () => {
            var arr = []
            var result = JSON.parse(data.response)
            result.forEach((ed) => {

                arr.push({
                    id: 1,
                    name: ed.name,
                    teacher: ed.teacher,
                    description: ed.description,
                    classes: ed.classes
                })
            })
            console.log(data.response)
            setEducations(arr)
        })
        data.open('GET', 'http://localhost:4000/showAll')
        data.send()
        

    }
    //showAll()
    return (
        <div className="educations_container">
            <div className="create">
                <h1>Create new Education</h1>
                <EducationsForm onSubmit={addEducation}/>
            </div>
            
            <div className="ed-list">
                <h1>Educations</h1>
                <button className="showBtn" onClick={showAll}>Show all Educations</button>
                <Educations educations={educations} removeEducation={removeEducation} updateEducations={updateEducations}/>
            </div>
        </div>
    )
}

export {EducationsList}

// Razvan D. Georgescu