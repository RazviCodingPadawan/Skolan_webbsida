// ARTUR sida

import React, { Fragment } from "react";
import '../styles/Apply.css'
import Utbildningar from '../cources.json'

const COURCES = Utbildningar; // JSON file export
    
class Apply extends React.Component {

    //STATE

    state = {
        
        select: '',
        firstName: '',
        secondName: '',
        email: '',
        message: '',
        agree: false,
        showCource: {
            courseTitle: '',
            userName: '',
            userLastname: '',
            userEpost: '',
            text: '',
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
        
        handleSubmit = (e) => {
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
            
            const {select, firstName, secondName, email, message} = this.state;

            this.setState({
                select: '',
                firstName: '',
                secondName: '',
                email: '',
                message: '',
                agree: false,
                showCource: {
                    courseTitle: select,
                    userName: firstName,
                    userLastname: secondName,
                    userEpost: email,
                    text: message,
                }
            }) 
            

            alert('Tack för ansökan!');
            console.log(this.state);
            e.preventDefault()
        }
    

    render() {

        // USE STATES

        const {select, firstName, secondName, email, message, agree, showCource} = this.state;
        const {courseTitle, userName, userLastname, userEpost, text} = showCource;

        return (
        <div className="apply_container">
            <Fragment>
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

                <h2 className="history_all">Ansökan:</h2>

                <div className="apply_course_history">
                    <h2 className="history_title">{courseTitle}</h2>
                    <h4 className="history_username">{userName} {userLastname}</h4>
                    <h5 className="history_email">{userEpost}</h5>
                    <p className="history_message">{text}</p>
                </div>
             </Fragment>
        </div>

    )}
}

//EXPORT FORM

export {Apply}


// ARTUR