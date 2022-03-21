import '../styles/Courses.css';
import CourseContact from '../components/CourseContact';
import CourseId from '../components/CourseId';

const Courses = () => {
    return (
        <div className='courses_container'>
            <hr />
            <CourseId />
            <hr />
            <CourseContact />
            <hr />
        </div>
    );
}

export {Courses}