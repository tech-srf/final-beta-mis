const express = require('express');
const connectDB = require('./config/db')
// const cors = require('cors')


// // Routes
const clinicsessionRoutes = require('./routes/api/clinicsession');
const counselingRoutes = require('./routes/api/counseling');
const registerRoutes = require('./routes/api/register');
const signupRoutes = require('./routes/api/signup');
const schoolsessionRoutes = require('./routes/api/schoolsession');
const class8Routes = require('./routes/api/class8');
const casemanagementRoutes = require('./routes/api/casemanagement');
const usersRoutes = require('./routes/api/users')
const authRoutes = require('./routes/api/auth')
const profileRoutes = require('./routes/api/profile')



const app = express();

//Connect to Database
connectDB();


//BodyParser Middleware
// app.use(cors());
app.use(express.json({ extended: false }));


//Define routes
app.use('/api/users', require('./routes/api/users'));

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))