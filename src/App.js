import './App.css';
import {Routes, Route } from 'react-router-dom';
import PageHome         from './pages/PageHome.js';
import PageWork from './pages/PageWork.js';
import PageCourseTimeline  from './pages/PageCourseTimeline.js';
import PageReflect      from './pages/PageReflect.js';
import PageProjects from './pages/PageProjects.js';
import PageNotFound     from './pages/PageNotFound.js';
import NavParent from './components/NavParent.js';
import { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);
  
  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const updateMatches = (e) => setMatches(e.matches);

    setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener('change', updateMatches);

    return () => mediaQueryList.removeEventListener('change', updateMatches);
  }, [query]);

  return matches;
}

function App() {
  const onMobile = useMediaQuery("(max-width: 480px)");
  const [isOpen, setIsOpen] = useState(!onMobile);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="App">
        <NavParent boolOnMobile={onMobile} boolIsOpen={isOpen} toggleFunc={toggle}/>
        {isOpen && <div className='dimmer' onClick={toggle}></div>}
        <div className="page-body-flex" id="page-body-flex">
          <div className = "page-body" id="page-body">
              <Routes>
                <Route path="/"                       element={<PageHome />} />
                <Route path="/work"                   element={<PageWork/>}/>
                <Route path="/reflections"            element={<PageCourseTimeline/>} />
                <Route path="/reflect/:urlcourseid"   element={<PageReflect/>} />
                <Route path="/projects"               element={<PageProjects/>}/>
                <Route path="*"                       element={<PageNotFound/>} />
              </Routes>
          </div>
        </div>
    </div>
  );
}

export default App;