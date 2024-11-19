import React, { useState, useEffect } from 'react';import TaskList from './components/TaskList';
import AboutMe from './components/AboutMe.js';
import NavBar from './components/NavBar.js';
import Login from './components/Login';
import ProtectedComponent from './components/ProtectedComponent';

import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

const App = () => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
          setAuthenticated(true);
        }
    }, []);


    return (
        <Router>
            {authenticated && <NavBar setAuthenticated={setAuthenticated}/>}
            <Routes>
                {!authenticated ? (
                    <>
                        <Route path="/login" element={<Login setAuthenticated={setAuthenticated}/>}/>
                        {/* Redirect all other routes to /login */}
                        <Route path="*" element={<Navigate to="/login" replace/>}/>
                    </>
                ) : (
                    <>
                        <Route path="/" element={<TaskList/>}/>
                        <Route path="/about" element={<AboutMe/>}/>
                        <Route path="/protected" element={<ProtectedComponent/>}/>
                        {/* Redirect /login to home if already authenticated */}
                        <Route path="/login" element={<Navigate to="/" replace/>}/>
                    </>
                )}
            </Routes>
        </Router>
    );
};

export default App;