import reflections from "./reflections.js"
import ReflectSemester from "../components/ReflectSemester.js";

/*
Displays the total course list + blurbs, grouped by year and semester.
*/

export default function PageCourseTimeline() {
    const allyears = reflections.map(entry => entry.year)

    document.getElementById("page-body").scrollTo(0,0);
    
    return (
    <>
        <h1 className = "course-reflections-title">Course Reflections</h1>
        <section className="timeline">
            
            {
                allyears.map((year) => {
                    return (   
                        <div className="tl-year" key={year}>
                            <div className="time-wrapper">
                                <h1><time>{year}</time></h1>
                            </div>
                            <div style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: "wrap"
                            }}>
                                <ReflectSemester key={year} semesters={reflections.find(entry => entry.year === year)?.semesters || []} />
                            </div>
                        </div>
                    )
                })
            }
        </section>
    </>
    );
}