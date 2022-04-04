// ARTUR sida

import '../styles/Apply.css'
import React, {Component, Fragment} from 'react';

// COURCES ARRAY

const COURCES =  [  
    // Här måste jag ansluta databasen från sidan - utbildningar.
    {
        id: 'em',
        value: 'Välj en kurs...',
        title: 'Välj en kurs...',
    },
    {
    id: 'js',
    value: 'Javascript',
    title: 'Javascript',
    },

    {
    id: 're',
    value: 'React JS',
    title: 'React JS',
    },

    {
    id: 'no',
    value: 'Node JS',
    title: 'Node JS',
    }
]

// APPLY COMPONENT

class Apply extends Component {

    state = {
        inputText: '',
        textareaText: '',
        selectCourse: '',
        addCourse: {
            username: '',
            text: '',
            position: '',
        }
    }

    // HANDLERS

    handleInputChange = ({target: {value} }) => {
        this.setState ({
            inputText: value,
        })
    }

    handleTextareaChange = ({target: {value} }) => {
        this.setState ({
            textareaText: value,
        })
    }

    handleSelectChange = ({target: {value} }) => {
        this.setState ({
            selectCourse: value,
        })
    }

    handleAddCourse = (e) => {
        e.preventDefault();
        const { inputText, textareaText, selectCourse} = this.state;
        this.setState({
            inputText: '',
            textareaText: '',
            selectCourse: '',
            addCourse: {
                username: inputText,
                text: textareaText,
                position: selectCourse,
            }
        })
    }

    //FORM

    render() {
        const {inputText, textareaText, selectCourse, addCourse} = this.state;
        const {username, text, position} = addCourse;
        return (
            <Fragment>
                <div className='apply_container'>
                    <form className='apply_form'>
                        <select className='apply_select' value={selectCourse} onChange={this.handleSelectChange}>
                            {COURCES.map(({ id, value, title}) => (
                                <option className='apply_select_option' key={id} value={value}>{title}</option>
                            ))}
                        </select>
                        <label className='apply_label'>
                            Användarnamn:
                            <input className='apply_input' type='text' name='name' value={inputText} onChange={this.handleInputChange}/>
                        </label>
                        <label className='apply_label_text' htmlFor='text'>Skriv ett meddelande:</label>
                        <textarea className='apply_textarea' id='text' value={textareaText} onChange={this.handleTextareaChange}/>
                        <button className='apply_btn' onClick={this.handleAddCourse}>SKICKA IN</button>
                    </form>
                    <div className='apply_course_list'>
                        <h2 className='apply_h2'>{position}</h2>
                        <h3 className='apply_h3'>{username}</h3>
                        <h3 className='apply_h3'>{text}</h3>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export {Apply}



// ARTUR