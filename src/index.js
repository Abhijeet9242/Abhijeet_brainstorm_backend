const express = require("express")
const app = express();
const cors = require('cors');

const loginController = require('./controller/login.controller');
const signupController = require("./controller/register.controller")

//middleware
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.use('/login', loginController);
app.use('/register', signupController);



module.exports = app;