import {useParams} from 'react-router-dom';
import PageNotFound from './PageNotFound.js';
import reflections from './reflections.js'
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';


export default function PageReflect() {
    const {urlcourseid}  = useParams();

    document.getElementById("page-body").scrollTo(0,0);
    document.getElementById("page-body").scrollTop = 0; 

    const courseData = reflections
        .flatMap(entry => entry.semesters.flatMap(semester => semester.courses))
        .find(course => course.courseid === urlcourseid);
    if (!courseData) {
        return <PageNotFound/>
    }

    const htmlcontent = DOMPurify.sanitize(courseData.content);
    
    return (
    <div className="reflection">
        <h1>{courseData.courseid}</h1>
        <h2>{courseData.courseName}</h2>
        <h3>{courseData.blurb}</h3>
        {parse(htmlcontent)}
    </div>
    );
}
