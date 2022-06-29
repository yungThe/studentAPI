import express from 'express';
import bodyParser from 'body-parser';
import studentRoute from './routes/student.js';
import eventRoute from './routes/event.js';
import nodemailer from 'nodemailer';

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


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'thedungptit1@gmail.com',
    pass: 'raxhmehcvfojlgqz'
  }
});

var message = "<table style=border-collapse:collapse;border-spacing:0;><thead><tr><td style=border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;></td></tr></thead></table>"

var mailOptions = {
  from: 'thedungptit1@gmail.com',
  to: 'dungthailand120800@gmail.com',
  subject: 'Thông báo thu học phí kì học 20221',
  html: message
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
