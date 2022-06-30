import express from "express";
import nodemailer from 'nodemailer';
import cron from 'node-cron';
import logger from "../logger.js";


const router = express.Router();
const students = [
    {
        id: "1",
        lastname: "Nguyen",
        firstName: "Dung",
        year: "4th",
        total: "8000000",
        status: "0",
        email: "longdv265@gmail.com"
    },
    {
        id: "2",
        lastname: "Do",
        firstName: "Anh",
        year: "2th",
        total: "8000000",
        status: "0",
        email: "mail@gmail.com"
    },
    {
        id: "3",
        lastname: "Nguyen",
        firstName: "Tung",
        year: "4th",
        total: "8000000",
        status: "0",
        email: "mail@gmail.com"
    },
    {
        id: "4",
        lastname: "Nguyen",
        firstName: "Long",
        year: "3th",
        total: "8000000",
        status: "0",
        email: "mail@gmail.com"
    },
    {
        id: "5",
        lastname: "Bui",
        firstName: "An",
        year: "4th",
        total: "8000000",
        status: "0",
        email: "mail@gmail.com"
    },
    {
        id: "6",
        lastname: "Luong",
        firstName: "Tung",
        year: "4th",
        total: "8000000",
        status: "0",
        email: "mail@gmail.com"
    },
    {
        id: "7",
        lastname: "Do",
        firstName: "Hung",
        year: "4th",
        total: "8000000",
        status: "0",
        email: "mail@gmail.com"
    },
    {
        id: "8",
        lastname: "Nguyen",
        firstName: "Bao",
        year: "4th",
        total: "8000000",
        status: "0",
        email: "mail@gmail.com"
    },
    {
        id: "9",
        lastname: "Nguyen",
        firstName: "Huyen",
        year: "4th",
        total: "8000000",
        status: "0",
        email: "mail@gmail.com"
    },
    {
        id: "10",
        lastname: "Nguyen",
        firstName: "Tung",
        year: "4th",
        total: "8000000",
        status: "0",
        email: "mail@gmail.com"
    },
    {
        id: "11",
        lastname: "Nguyen",
        firstName: "Huy",
        year: "4th",
        total: "8000000",
        status: "0",
        email: "mail@gmail.com"
    },
    {
        id: "12",
        lastname: "Nguyen",
        firstName: "Khang",
        year: "4th",
        total: "8000000",
        status: "0",
        email: "mail@gmail.com"
    },
    {
        id: "13",
        lastname: "Nguyen",
        firstName: "Khanh",
        year: "4th",
        total: "8000000",
        status: "0",
        email: "mail@gmail.com"
    },
    {
        id: "14",
        lastname: "Nguyen",
        firstName: "Sang",
        year: "4th",
        total: "8000000",
        status: "0",
        email: "mail@gmail.com"
    },
    {
        id: "15",
        lastname: "Bach",
        firstName: "Ha",
        year: "4th",
        total: "8000000",
        status: "0",
        email: "mail@gmail.com"
    },
    {
        id: "16",
        lastname: "Nguyen",
        firstName: "Tu",
        year: "4th",
        total: "8000000",
        status: "0",
        email: "mail@gmail.com"
    },
    {
        id: "17",
        lastname: "Do",
        firstName: "Nam",
        year: "4th",
        total: "8000000",
        status: "0",
        email: "mail@gmail.com"
    },
    {
        id: "18",
        lastname: "Hoang",
        firstName: "Nam",
        year: "4th",
        total: "8000000",
        status: "0",
        email: "mail@gmail.com"
    },
    {
        id: "19",
        lastname: "Duong",
        firstName: "Dung",
        year: "4th",
        total: "8000000",
        status: "0",
        email: "mail@gmail.com"
    },
    {
        id: "20",
        lastname: "Ha",
        firstName: "Son",
        year: "4th",
        total: "8000000",
        status: "0",
        email: "mail@gmail.com"
    },
    {
        id: "21",
        lastname: "Nguyen",
        firstName: "Vu",
        year: "4th",
        total: "8000000",
        status: "0",
        email: "mail@gmail.com"
    },
]
const tuition = [
    {
        id: "1",
        money: 0
    },
    {
        id: "2",
        money: 0
    },
    {
        id: "3",
        money: 0
    },
    {
        id: "4",
        money: 0
    },
    {
        id: "5",
        money: 0
    },
    {
        id: "6",
        money: 0
    },
    {
        id: "7",
        money: 0
    },
    {
        id: "8",
        money: 0
    },
    {
        id: "9",
        money: 0
    },
    {
        id: "10",
        money: 0
    },
    {
        id: "11",
        money: 0
    },
    {
        id: "12",
        money: 0
    },
    {
        id: "13",
        money: 0
    },
    {
        id: "14",
        money: 0
    },
    {
        id: "15",
        money: 0
    },
    {
        id: "16",
        money: 0
    },
    {
        id: "17",
        money: 0
    },
    {
        id: "18",
        money: 0
    },
    {
        id: "19",
        money: 0
    },
    {
        id: "20",
        money: 0
    },
    {
        id: "21",
        money: 0
    }
]
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'thedungptit1@gmail.com',
        pass: 'raxhmehcvfojlgqz'
    }
});

var messageConfirm = "<h1> Xác nhận đã nộp học phí</h1>"
var msgReminder = "<h1>Nộp thiếu, lưu ý nộp đủ trước thời hạn</h1>"
var message = "<h1> Thông báo bắt đầu nhận học phí kì 20221, kết thúc sau 24h</h1>"
var msgReminder1 = "<h1>Sắp hết hạn, lưu ý nộp học phí.</h1>"
var mailevent = {
    from: 'thedungptit1@gmail.com',
    to: 'dungthailand120800@gmail.com',
    subject: 'Thông báo thu học phí kì học 20221',
    html: message
};


var mail1 = {
    from: 'thedungptit1@gmail.com',
    to: 'dungthailand120800@gmail.com',
    subject: 'Học phí kì học 20221',
    html: messageConfirm
};
var mail2 = {
    from: 'thedungptit1@gmail.com',
    to: 'dungthailand120800@gmail.com',
    subject: 'Reminder học phí kì học 20221',
    html: msgReminder
};

var mail3 = {
    from: 'thedungptit1@gmail.com',
    to: 'dungthailand120800@gmail.com',
    subject: 'Reminder học phí kì học 20221',
    html: msgReminder1
};

transporter.sendMail(mailevent, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        logger.info("Email sent: " + info.response)
    }
});

cron.schedule('0 23 * * *', function () {
    console.log('---------------------');
    logger.warn('Running Cron Process');
    // Delivering mail with sendMail method
    transporter.sendMail(mail3, (error, info) => {
      if (error) console.log(error);
      else logger.info("Email sent: " + info.response)
    });
  });


router.get('/', (req, res) => {
    res.send({students,tuition})
    logger.info("GET - /student")
});

router.post('/', (req, res) => {
    const student = req.body;
    const studentsID = req.body.id;
    const studentWithID = { ...student, id: studentsID }
    students.push(studentWithID);
    res.send('Student added');
    logger.warn("Student added");
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const result = students.find((students) => students.id === id);
    const result2 = tuition.find((tuition) => tuition.id === id);
    res.send({"Info": result,"Tuition": result2.money})
    logger.info(`GET - /student/${id}`)
});

router.put('/edit/:id', (req, res) => {
    const { id } = req.params;
    const {money} = req.body;
    //console.log(money);
    const result = students.find((students) => students.id === id);
    const result2 = tuition.find((tuition) => tuition.id === id);
    result2.money = result2.money + +money;
    logger.info(`PUT - /student/edit/${id}`)
    if (result2.money < result.total) {
        transporter.sendMail(mail2, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                logger.info("Email sent: " + info.response)
            }
        });
    }
    else if (result2.money >= result.total) {
        result.status = 1;
        
        transporter.sendMail(mail1, function (error, info) {
            if (error) {
                console.log(error);
                logger.error("Email sent failed")
            } else {
                logger.info("Email sent" + info.response)
            }
        });
    }
    res.send({"Info": result,"Money submitted":result2.money});
});

/*
router.get('/:invoice' ,(req, res) => {
   // const status = "ok"
   // const result = students.filter((students) => students.status == status);
    res.send(students);
});
*/

router.get('/invoice/:id', (req, res) => {
    const { id } = req.params;
    const result = students.find((students) => students.id === id);
    const result2 = tuition.find((tuition) => tuition.id === id);
    logger.info(`GET - /student/invoice/${id}`)
    res.send({result,result2})
});

export default router;

