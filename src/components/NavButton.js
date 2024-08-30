import { Link } from "react-router-dom";

export default function NavButton({children, attributes, cssid, linkurl}) {
    return (
        <Link to={linkurl}>
            <button 
                type="button" {...attributes} 
                className="nav-homebar-button" 
                id={cssid}
            >
                {children}
            </button>
        </Link>
    );
}