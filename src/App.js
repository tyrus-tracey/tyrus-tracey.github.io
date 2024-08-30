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

function App() {
  const [onMobile, setOnMobile] = useState(
    window.matchMedia("(min-width: 480px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setOnMobile( e.onMobile ));
  }, []);
  
  const [isOpen, setIsOpen] = useState(onMobile);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="App">
        <NavParent boolOnMobile={onMobile} boolIsOpen={isOpen} toggleFunc={toggle}/>
        {isOpen && <div className='dimmer'></div>}
        <div className="page-body-flex" id="page-body-flex">
          <div id="page-body">
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