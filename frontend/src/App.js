import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login'
import Create from './pages/auth/Create'
import Admin from './pages/Admin'
import Attendance from './pages/Attendance'
import Counseling from './pages/Counseling'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Settings from './pages/Settings'
import Signup from './pages/Signup'
import Visits from './pages/Visits'
import Landing from './pages/Landing'
import Education from './pages/Education'
import Lifeskills from './pages/Lifeskills'
import './custom.scss';

function App() {

  return (
    <Fragment>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/visits" element={<Visits />}/>
            <Route exact path="/attendance" element={<Attendance />} />
            <Route exact path="/counseling" element={<Counseling />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/education" element={<Education />} />
            <Route exact path="/lifeskills" element={<Lifeskills />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/settings" element={<Settings />} />
            <Route exact path="/signup" element={<Signup />} />
        </Routes>
    </BrowserRouter>
  </Fragment>
  );
}

export default App;
