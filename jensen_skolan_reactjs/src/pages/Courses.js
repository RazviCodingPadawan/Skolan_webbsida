import '../styles/Courses.css';
import CourseContact from '../components/CourseContact';
import CourseId from '../components/CourseId';
import CourseIdHeader from '../components/CourseIdHeader';

const Courses = () => {
    return (
        <div className='courses_container'>
            <hr />
            <CourseIdHeader />
            <hr />
            <CourseId />
            <hr />
            <CourseContact />
            <hr />
        </div>
    );
}

export {Courses};

//NATTA