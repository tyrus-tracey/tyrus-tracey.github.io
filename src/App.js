import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageHome         from './pages/PageHome.js';
import PageReflectList  from './pages/PageReflectList.js';
import PageReflect      from './pages/PageReflect.js';
import PageNotFound     from './pages/PageNotFound.js';
import NavBar           from './NavBar.js';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <div id="page-body">
        <Routes>
          <Route path="/"                       element={<PageHome />} />
          <Route path="/reflections"            element={<PageReflectList/>} />
          <Route path="/reflect/:urlcourseid"  element={<PageReflect/>} />
          <Route path="*"                   element={<PageNotFound/>} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;