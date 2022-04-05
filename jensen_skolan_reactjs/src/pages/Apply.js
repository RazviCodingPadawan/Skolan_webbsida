// ARTUR sida

import React from "react";
import '../styles/Apply.css'

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
        },
        {
        id: 'db',
        value: 'Mongo DB',
        title: 'Mongo DB',
        },

    ]
    
class Apply extends React.Component {

    //STATE

    state = {
        
        select: '',
        firstName: '',
        secondName: '',
        email: '',
        message: '',
        agree: false,
        showCources: {
            title: '',
            userName: '',
            userSecondname: '',
            userEmail: '',
            description: '',
        }

        }


    //HANDLERS

    handleChange = (event)=> {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleCheckboxAgree = (event) => {
        this.setState({ agree: event.target.checked})
    }

        // VALIDATION AFTER SUBMIT CLICK
        
        handleSubmit = () => {
            const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email.toLocaleLowerCase());
            const validateFirstName = this.state.firstName.length < 1;
            const validateSecondName = this.state.secondName.length < 1;
            const validateCheckbox = this.state.agree;

            if(!validateEmail) {
                alert('Ange e-post!')
                return
            } 
            if (validateFirstName) {
                alert('Ange namn!')
                return
            }
            if (validateSecondName) {
                alert('Ange efternamn!')
                return
            }
            if (!validateCheckbox) {
                alert('Acceptera villkoren!')
                return
            }
            
            this.setState({
                select: '',
                firstName: '',
                secondName: '',
                email: '',
                message: '',
                agree: false,
                showCources: {
                    title: '',
                    userName: '',
                    userSecondname: '',
                    userEmail: '',
                    description: '',
                }
            })
            alert('Tack för ansökan!');
        }
    

    render() {

        // USE STATES

        const {select, firstName, secondName, email, message, agree} = this.state;

        return (
        <div className="apply_container">

            <div className="apply_form">

                    <select className="apply_select" name="select" value={select} onChange={this.handleChange}>
                        {COURCES.map(({ id, value, title}) => (
                                        <option className='apply_select_option' key={id} value={value}>{title}</option>
                                    ))}
                    </select>

                    <input className="apply_input"
                    type='text' 
                    name="firstName"
                    placeholder="Namn"
                    value={firstName}
                    onChange={this.handleChange}
                    onSubmit={this.validateFirstName}
                    />

                    <input className="apply_input"
                    type='text' 
                    name="secondName"
                    placeholder="Efternamn"
                    value={secondName}
                    onChange={this.handleChange}
                    onSubmit={this.validateSecondName}
                    />

                    <input className="apply_input"
                    type='text' 
                    name="email"
                    placeholder="E-post"
                    value={email}
                    onChange={this.handleChange}
                    onSubmit={this.validateEmail}
                    />

                    <br />
                    <hr />

                    <textarea className="apply_textarea"
                    type='text' 
                    name="message" 
                    placeholder="Meddelande" 
                    value={message} 
                    onChange={this.handleChange}
                    />

                    <br />

                    <label className="apply_label">
                        <input 
                        type='checkbox' 
                        name='agree' 
                        checked={agree} 
                        onChange={this.handleCheckboxAgree}/>
                        <p className="apply_label_text">Jag godkänner!</p>
                    </label>
                    
                    <button className="apply_btn" onClick={this.handleSubmit}>SKICKA IN</button>
                </div>
                    
                </div>

    )}
}

//EXPORT FORM

export {Apply}


// ARTUR