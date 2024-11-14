import React from 'react';
import TaskList from './components/TaskList';
import AboutMe from './components/AboutMe.js'
import NavBar from './components/NavBar.js'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
      <Router>
          <NavBar/>
          <Routes>
              <Route path="/" element={<TaskList/>}/>
              <Route path="/about" element={<AboutMe/>}/>
          </Routes>
      </Router>
  );
};

export default App;
