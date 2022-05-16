// ARTUR sida
import '../styles/Apply.css'
import {useState, useEffect} from 'react'
import Course from '../components/Course'
import axios from 'axios'

import Utbildningar from '../cources.json'
const COURCES = Utbildningar; // JSON file export


function Apply() {

  const [courses, setCourses] = useState('');
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [agree, setAgree] = useState('');

  const [application, setApplication] = useState([]);
  const [isUpdate, setIsUpdate] = useState('');

  axios.defaults.baseURL = "http://localhost:5000/";

  useEffect(() => {
    axios.get("/get-application")
    .then((response) => setApplication(response.data))
    .catch((error) => console.log(error))
  })

  const addUpdate = () => {
    if(isUpdate ==='') {
      axios.post("http://localhost:5000/add-application", {courses, firstName, secondName, email, message} )
        .then((response) => {
          console.log(response.data)
          setCourses('')
          setFirstName('')
          setSecondName('')
          setEmail('')
          setMessage('')
        })
        .catch((error) => console.log(error))
    } else {
      axios.post("http://localhost:5000/update-application", { _id: isUpdate, courses, firstName, secondName, email, message} )
        .then((response) => {
          
          console.log(response.data)
          setCourses('')
          setFirstName('')
          setSecondName('')
          setEmail('')
          setMessage('')
          setIsUpdate('')
        })
        .catch((error) => console.log(error))
    }
  }


  const deleteCourse =(_id)=> {
    axios.post("http://localhost:5000/delete-application", { _id} )
        .then((response) => {
          console.log(response.data)
          setCourses('')
          setFirstName('')
          setSecondName('')
          setEmail('')
          setMessage('')
          setIsUpdate('')
        })
        .catch((error) => console.log(error))
  }

  const updateCourse =(_id, courses, firstName, secondName, email, message)=> {
    setIsUpdate(_id)
    setCourses(courses)
    setFirstName(firstName)
    setSecondName(secondName)
    setEmail(email)
    setMessage(message)
  }

  return (
      <div className="apply_container">
        <div className="applyed_cources">
          <h1>Apply Course</h1>
          <div className="apply_form">
                <select className="apply_select" name="select" value = {courses} onChange = {(e) => setCourses(e.target.value)}>
                    {COURCES.map(({ id, value, title}) => (
                    <option className='apply_select_option' key={id} value={value}>{title}</option>
                    ))}
                </select>
                <input className="apply_input"
                type='text' 
                name="firstName"
                placeholder="Namn"
                value = {firstName} 
                onChange = {(e) => setFirstName(e.target.value)}
                />
                <input className="apply_input"
                type='text' 
                name="secondName"
                placeholder="Efternamn"
                value = {secondName} 
                onChange = {(e) => setSecondName(e.target.value)}
                />
                <input className="apply_input"
                type='text' 
                name="email"
                placeholder="E-post"
                value = {email} 
                onChange = {(e) => setEmail(e.target.value)}
                />
                <br />
                <hr />
                <textarea className="apply_textarea"
                type='text' 
                name="message" 
                value = {message} 
                onChange = {(e) => setMessage(e.target.value)}
                />
                <br />
                <label className="apply_label">
                    <input 
                    type='checkbox' 
                    name='agree'
                    checked={agree}
                    onChange = {(e) => setAgree(e.target.value)}
                    />
                    <p className="apply_label_text">Jag godkänner!</p>
                </label>
                <button className="apply_btn" onClick={addUpdate}>{isUpdate ? "Update" : "ADD"}</button>

                <div className="added_courses">Added courses</div>

          </div>
          
        </div>
                      
        <div className='courses_list'>
                  {application.map(course => 
                  <Course key={course._id} 
                  courses ={course.courses} 
                  firstName={course.firstName} 
                  lastName={course.lastName} 
                  email={course.email} 
                  message={course.message}
                  remove = {() => deleteCourse(course._id)}
                  update ={()=> updateCourse(course._id, course.courses, course.firstName, course.lastName, course.email, course.message)}
                  />
                  )}
            </div>

    </div>
    
  );
}

export {Apply};


// ARTUR