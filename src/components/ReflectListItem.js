import { Link } from "react-router-dom";
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

export default function ReflectListItem({courseid, coursename, rawsummary}) {
    const cleansummary = DOMPurify.sanitize(rawsummary);
    
    return (
        <div>
            <Link className="reflect-list-item" to={`/reflect/${courseid}`}>
                {coursename}
            </Link><br/>
            <Link className="reflect-list-item-p" to={`/reflect/${courseid}`}>
                {parse(cleansummary)}
            </Link><br/><br/>
        </div>
    );
}