require('dotenv').config()
const workOutRoute = require('./routes/workout')

const express = require('express')

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})



app.use('/api/workouts', workOutRoute);

mongoose.connect(process.env.MONGO_URI)
    .then( () => {
        app.listen(process.env.PORT, () => {
            console.log('Listening on Port', process.env.PORT)
        })
    } )
    .catch((err => {console.log(err)}))


