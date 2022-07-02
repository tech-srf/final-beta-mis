import React, {Fragment,} from 'react'
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Attendance from './pages/Attendance'
import Casemanagement from './pages/Casemanagement'
import Class8visit from './pages/Class8visit'
import Clinicsession from './pages/Clinicsession'
import Counseling from './pages/Counseling'
import Dashboard from './pages/Dashboard'
// import Education from './pages/Education'
import Profile from './pages/Profile'
// import Lifeskills from './pages/Lifeskills'
import Register from './pages/Register'
import Settings from './pages/Settings'
import Schoolsession from './pages/Schoolsession'
import Signup from './pages/Signup'
import Visits from './pages/Visits'

// import { Provider } from 'react-redux';
// import store from './store';
// import { loadUser } from './actions/auth';
// import setAuthToken from './utils/setAuthToken';

function App() {
  return (
    <div>
      <Router>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Login  />}/>
            <Route exact path="/login" element={<Login />}/>
            <Route exact path="/admin" element={<Admin />}/>
            <Route path="/visits" element={<Visits />}>
              <Route path="visits/casemanagement" element={<Casemanagement />}/>
              <Route path="visits/class8visit" element={<Class8visit />}/>
            </Route>
            <Route path="/attendance" element={<Attendance />}>
              <Route path="attendance/schoolsession" element={<Schoolsession />}/>
              <Route path="attendance/clinicsession" element={<Clinicsession />}/>
            </Route>
            <Route exact path="/counseling" element={<Counseling />}/>
            <Route exact path="/dashboard" element={<Dashboard />}/>
            {/* <Route exact path="/education" element={<Education />}/>
            <Route exact path="/lifeskills" element={<Lifeskills />}/> */}
            <Route exact path="/profile" element={<Profile />}/>
            <Route exact path="/register" element={<Register />}/>
            <Route exact path="/settings" element={<Settings />}/>
            <Route exact path="/signup" element={<Signup />}/>
          </Routes> 
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
