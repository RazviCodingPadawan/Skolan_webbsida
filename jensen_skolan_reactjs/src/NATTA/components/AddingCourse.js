import React from "react";
import axios from "axios";

import "./AddingCourse.css";

class AddingCourse extends React.Component {

  state = {
    courseName: "",
    courseId: "",  
    startDate: "",
    placeDistance: "",
    educator: "",
    posts: []
  };

  componentDidMount = () => {
    this.getCourseDb();
  };


  getCourseDb = () => {
    axios.get("../../../../routes/api.js")
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log("Data has been received!");
      })
      .catch(() => {
        alert("!Error retrieving data!");
      });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };


  submit = (event) => {
    event.preventDefault();

    const payload = {
      courseName: this.state.courseName,
      courseId: this.state.courseId,
      startDate: this.state.startDate,
      placeDistance: this.state.placeDistance,
      educator: this.state.educator
    };

    axios({
      url: "/api/save",
      method: "POST",
      data: payload
    })
      .then(() => {
        console.log("Data has been sent to the server");
        this.resetUserInputs();
        this.getCourseDb();
      })
      .catch(() => {
        console.log("Internal server error");
      });;
  };

  resetUserInputs = () => {
    this.setState({
      courseName: "",
      courseId: "",
      startDate: "",
      placeDistance: "",
      educator: ""
    });
  };

  displayCourseDb = (posts) => {

    if (!posts.length) return null;


    return posts.map((post, index) => (
      <div key={index} className="courseDisplay">
        <h3>{post.courseName}</h3>
        <p>{post.courseId}</p>
        <p>{post.startDate}</p>
        <p>{post.placeDistance}</p>
        <p>{post.educator}</p>
      </div>
    ));
  };

  render() {

    console.log("State: ", this.state);

    //JSX
    return(
      <div className="AddingCourse">
        <h3>LÄGG TILL EN KURS:</h3>
        <form className="formAddCourse" onSubmit={this.submit}>
          <div className="addCourse">
            <input 
              type="text"
              name="courseName"
              placeholder="KURSNAMN"
              required="required"
              value={this.state.courseName}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="courseId"
              placeholder="KURSID"
              required="required"
              value={this.state.courseId}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="startDate"
              placeholder="STARTDATUM"
              required="required"
              value={this.state.startDate}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="placeDistance"
              placeholder="PLATS/DISTANS"
              required="required"
              value={this.state.placeDistance}
              onChange={this.handleChange}
            /> 
            <input
              type="text"
              name="educator"
              placeholder="LÄRARE"
              required="required"
              value={this.state.educator}
              onChange={this.handleChange}
            />
          </div>

          <button className="btnAddCourse">LÄGG TILL</button>
        </form>

        <div className="courseDisplay">
          {this.displayCourseDb(this.state.posts)}
        </div>
      </div>
    );
  }
}


export default AddingCourse;