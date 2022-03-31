import CourseContact from '../components/CourseContact';
import CourseId from '../components/CourseId';
import CourseIdHeader from '../components/CourseIdHeader';
import AddingCourse from '../components/AddingCourse';

const Courses = () => {
    return (
        <div className='courses_container'>
            <hr />
            <CourseIdHeader />
            <hr />
            <CourseId />
            <hr />
            <AddingCourse />
            <hr />
            <CourseContact />
            <hr />
        </div>
    );
}

export {Courses};

// © NATTA