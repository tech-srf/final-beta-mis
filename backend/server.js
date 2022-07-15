const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config()
const connectDB = require('../config/db')
// const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// const cors = require('cors')
const PORT = process.env.PORT || 5000;

// // Routes
const clinicsessionRoutes = require('./routes/api/clinicsession');
const counselingRoutes = require('./routes/api/counseling');
const registerRoutes = require('./routes/api/register');
const signupRoutes = require('./routes/api/signup');
const schoolsessionRoutes = require('./routes/api/schoolsession');
const class8Routes = require('./routes/api/class8');
const casemanagementRoutes = require('./routes/api/casemanagement');
const usersRoutes = require('./routes/api/user')
const authRoutes = require('./routes/api/auth')
const profileRoutes = require('./routes/api/profile')



const app = express();

//Connect to Database
connectDB();


//BodyParser Middleware

app.use(express.json({ extended: false }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());


//Define routes
app.use('/api/users', require('./routes/api/user'));

app.use('/api/clinicsession', clinicsessionRoutes);
app.use('/api/counseling', counselingRoutes);
app.use('/api/register', registerRoutes);
app.use('/api/signup', signupRoutes);
app.use('/api/schoolsession', schoolsessionRoutes);
app.use('/api/class8', class8Routes);
app.use('/api/casemanagement', casemanagementRoutes);
app.use('/api/users', usersRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/profile', profileRoutes)



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))