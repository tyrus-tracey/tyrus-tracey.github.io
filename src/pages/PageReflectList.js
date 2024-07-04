import ReflectList from "../components/ReflectList";
import ReflectSemester from "../components/ReflectSemester";
import { useState, useEffect } from 'react';
import axios from 'axios'; 

export default function PageReflectList() {
    const [sems, setSems] = useState([]);
    
    useEffect(() => {
        const LoadSemData = async () => {
            const response = (await axios.get("/fetchsems")).data;
            setSems(response);
        }
        LoadSemData();
    }, []);
        
    return (
        <>
            <h1>This is the reflection page.</h1>
            {sems.map(sem => 
                <ReflectSemester
                    semester={sem.semester}
                    year={sem.year}
                />
            )}
        </>
    );
}

/*


  {
                rows.map(row =>
                    <ReflectList 
                        courseid={row.courseid}
                        coursename={row.coursename} 
                        rawsummary={row.summary} 
                    />
                )
            }
 */