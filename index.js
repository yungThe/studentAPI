import express from 'express';
import bodyParser from 'body-parser';
import studentRoute from './routes/student.js';
import eventRoute from './routes/event.js';
import nodemailer from 'nodemailer';
import logger  from './logger.js';

const app = express();
const PORT = 8080;
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT,PATCH');
    next();
});

app.use(bodyParser.json());
app.use('/student', studentRoute);
app.use('/event', eventRoute);


app.listen(PORT, () =>
    logger.info('Server Running on: http://localhost:8080')
);

app.get('/', (req, res) => {
    res.send('Hello');
});


