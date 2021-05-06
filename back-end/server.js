//Config dotenv
require('dotenv').config();

//Connect DB
const {connectDB} = require('./configs/db');

connectDB();
const express = require('express');
const cors = require('cors');
const authRoute = require('./routes/authroute');
const app = express();

//Cors
app.use(cors());

//Body Parser
app.use(express.json());

//Mount the route
//  /api/v1/auth/register -> register
//  /api/v1/auth/login -> login
app.use('/api/v1/auth', authRoute);



const port = process.env.APP_PORT;

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});