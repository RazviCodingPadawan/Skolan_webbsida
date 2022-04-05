import React, { useState } from "react";
import '../styles/Educations.css'


const EducationsForm = (props) => {
    //varianta 2
    /* const [inputs, setInputs] = useState({})
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(inputs)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>name
                <input type="text" name="name" value={inputs.name || ""} onChange={handleChange}/>
            </label>
            
            <label>age
                <input type="text" name="age" value={inputs.age || ""} onChange={handleChange}/>
            </label>
            <input type="submit"/>
            
        </form>
    ) */
    
// varianta 1
    const [name, setName] = useState(props.edit ? props.edit.value : '')
    const [teacher, setTeacher] = useState(props.edit ? props.edit.value : '')
    const [description, setDescription] = useState(props.edit ? props.edit.value : '')
    const [classes, setClasses] = useState(props.edit ? props.edit.value : '')



    const handleChangeName = event => {
        setName(event.target.value)
 
    }
    const handleChangeTeacher = event => {
   
        setTeacher(event.target.value)
    
    }
    const handleChangeDescription = event => {
   
        setDescription(event.target.value)

    }
    const handleChangeClasses = event => {
    
        setClasses(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            name: name,
            teacher: teacher,
            description: description,
            classes: classes
        })

        setName('')
        setTeacher('')
        setDescription('')
        setClasses('')
    }

    return (
        <form className="createForm" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                <h3>Namn</h3>
                <input type="text" placeholder="name" value={name} name="name" onChange={handleChangeName}/>
                <h3>Utbildnings Ledare</h3>
                <input type="text" placeholder="Utbildnings Ledare" value={teacher} name="teacher" onChange={handleChangeTeacher}/>
                <h3>Beskrivning</h3>
                <input type="text" placeholder="Beskrivning" value={description} name="description" onChange={handleChangeDescription}/>
                <h3>Kurser som ingår</h3>
                <input type="text" placeholder="Kurser som ingår" value={classes} name="classes" onChange={handleChangeClasses}/>
                <br></br><br></br>
                <button>Save</button>
                </>
            ) : 
            (
                <>
                <h3>Namn</h3>
                <input type="text" placeholder="Namn" value={name} name="name" onChange={handleChangeName}/>
                <h3>Utbildnings Ledare</h3>
                <input type="text" placeholder="Utbildnings Ledare" value={teacher} name="teacher" onChange={handleChangeTeacher}/>
                <h3>Beskrivning</h3>
                <input type="text" placeholder="Beskrivning" value={description} name="description" onChange={handleChangeDescription}/>
                <h3>Kurser som ingår</h3>
                <input type="text" placeholder="Kurser som ingår" value={classes} name="place" onChange={handleChangeClasses}/>
                <br></br><br></br>
                <button>Lägg till ny utbildning</button>
                </>
            )}
        </form>
    )
}

export {EducationsForm}