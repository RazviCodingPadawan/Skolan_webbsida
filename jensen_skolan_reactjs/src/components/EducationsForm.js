import React, { useState } from "react";


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
    const [length, setLength] = useState(props.edit ? props.edit.value : '')
    const [points, setPoints] = useState(props.edit ? props.edit.value : '')
    const [place, setPlace] = useState(props.edit ? props.edit.value : '')



    const handleChangeName = event => {
        setName(event.target.value)
 
    }
    const handleChangeLength = event => {
   
        setLength(event.target.value)
    
    }
    const handleChangePoints = event => {
   
        setPoints(event.target.value)

    }
    const handleChangePlace = event => {
    
        setPlace(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            name: name,
            length: length,
            points: points,
            place: place
        })

        setName('')
        setLength('')
        setPoints('')
        setPlace('')
    }

    return (
        <form onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                <h3>Name</h3>
                <input type="text" placeholder="Educations Name" value={name} name="text" onChange={handleChangeName}/>
                <h3>Length</h3>
                <input type="text" placeholder="Educations Length" value={length} name="text" onChange={handleChangeLength}/>
                <h3>Points</h3>
                <input type="text" placeholder="Educations Points" value={points} name="text" onChange={handleChangePoints}/>
                <h3>Place</h3>
                <input type="text" placeholder="Educations Place" value={place} name="text" onChange={handleChangePlace}/>
                <br></br><br></br>
                <button>Save</button>
                </>
            ) : 
            (
                <>
                <h3>Name</h3>
                <input type="text" placeholder="Educations Name" value={name} name="name" onChange={handleChangeName}/>
                <h3>Length</h3>
                <input type="text" placeholder="Educations Length" value={length} name="length" onChange={handleChangeLength}/>
                <h3>Points</h3>
                <input type="text" placeholder="Educations Points" value={points} name="points" onChange={handleChangePoints}/>
                <h3>Place</h3>
                <input type="text" placeholder="Educations Place" value={place} name="place" onChange={handleChangePlace}/>
                <br></br><br></br>
                <button>Add new Education</button>
                </>
            )}
        </form>
    )
}

export {EducationsForm}