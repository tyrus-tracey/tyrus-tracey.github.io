import { Link } from "react-router-dom";

/*
Displays the semester name, and for each containing course the course name + blurb.

Input:
    A JSON array of semseters (of a given year).
    Each semester element has a name prop, and a sub-array of courses.

*/
export default function ReflectSemester({semesters}) {
    return ( 
        <>
            {semesters.map((semester, index) => (
                <div 
                    key={index}
                    className="tl-semester"
                >
                    <div className="tl-semester-label">
                        <h3>{semester.name}</h3>
                    </div>
                    <div className="tl-semester-classes">
                    {semester.courses.map((course) => (
                        <div key={course.courseid} >
                            <Link className="reflect-list-item" to={`/reflect/${course.courseid}`}>
                                <div className="tl-class" style={{
                                    backgroundImage:'url("/coursepictures/' + course.courseid + '.jpg")',
                                    backgroundSize:'cover',
                                    overflow: 'hidden'
                                }}>
                                    <h3>{course.courseName}</h3>
                                    <div style={{textAlign:'right', paddingRight:'40px'}}><h2>{course.courseid}</h2></div>
                                </div>
                            </Link><br />
                        </div>
                    ))}
                    </div>
                </div>
            ))}
        </>
    ) ;
}