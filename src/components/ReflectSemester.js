import ReflectList from "./ReflectList";
import { useState, useEffect } from 'react';
import axios from 'axios'; 

export default function ReflectSemester({semester, year}) {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const LoadCourseData = async () => {
            const response = (await axios.get(`/reflections/${year}/${semester}`)).data;
            setCourses(response);
        }
        LoadCourseData();
    }, []);

    return ( 
        <div>
        <h1>{semester} {year}</h1>
        {courses.map(course =>
            <ReflectList 
                courseid={course.courseid}
                coursename={course.coursename} 
                rawsummary={course.summary} 
            />
        )}
        </div>
    ) ;
}