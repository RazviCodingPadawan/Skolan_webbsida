import "../styles/Courses.css"
import CourseContact from "../components/CourseContact";

import RecordList from "../components/recordList";

const Courses = () => {
    return (
    <div className='courses_container'>
        <hr />
            <RecordList />
        <hr />
            <CourseContact />
        <hr />
    </div>
    );
}

export {Courses};

// © NATTA