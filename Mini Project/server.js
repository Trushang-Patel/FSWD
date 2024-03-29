const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middelwares/errorMiddleware');
//routes path
const authRoutes = require('./routes/authRoutes');
//dotenv config
dotenv.config();

//connect to database
connectDB();
//rest Object
const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(errorHandler)

const PORT = process.env.PORT || 8080;

//API routes
app.use('/api/v1/auth', authRoutes);

//listen server
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.DEV_MODE}on port ${PORT}`.bgCyan.white);
})