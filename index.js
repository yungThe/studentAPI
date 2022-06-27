import express from 'express';
import bodyParser from 'body-parser';
import studentRoute from './routes/student.js';
import eventRoute from './routes/event.js';

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
    console.log('Server Running on: http://localhost:8080')
);

app.get('/', (req, res) => {
    res.send('Hello');
});


import nodemailer from 'nodemailer';


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'thedungptit1@gmail.com',
    pass: 'abcxyz123()'
  }
});

var mailOptions = {
  from: 'thedungptit1@gmail.com',
  to: 'dungng1536@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
