import express from "express";
import nodemailer from 'nodemailer';
const router = express.Router();

const event = [
    {
        name : "Tuition submit",
        description : "Start today at 12a.m, end after 30 days"
    }

    
]
router.get('/', (req, res)=> {
    res.send(event);
});

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'thedungptit1@gmail.com',
      pass: 'raxhmehcvfojlgqz'
    }
  });
  
  var message = "<h1> Thông báo bắt đầu nhận học phí kì 20221, kết thúc sau 24h</h1>"
  
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

export default router;