import { Link } from 'react-router-dom';
import NavHomeBar from './components/NavHomeBar';
import NavProfile from './components/NavProfile';
//import GlossAngled from './components/GlossAngled';


export default function NavBar({isCloseable, boolNavOpen, navClose}) {

    return (
        <div className={boolNavOpen ? "nav-root" : "nav-root-close"}>
            <NavHomeBar/>
            <nav>
                <NavProfile/>
                    <ul onClick={isCloseable? navClose: null}>
                        <Link to="/"        ><li key='navhome'><h3>Home</h3></li></Link>
                        <Link to="/work"><li key='work'><h3>Work</h3></li></Link>
                        <Link to="/projects"><li key='projects'><h3>Projects</h3></li></Link>
                        <Link to="/reflections" ><li key='navcourses'><h3>Courses</h3></li></Link>
                    </ul>
                
            </nav>
        </div>
    );
}