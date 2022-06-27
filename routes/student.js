import express from "express";


const router = express.Router();

const students = [
    {
        id : "1",
        lastname : "Nguyen",
        firstName : "Dung",
        year : "4th",
        total : "8000000",
        status: "0"
    },
    {
        id : "2",
        lastname : "Do",
        firstName : "Anh",
        year : "2th",
        total : "8000000",
        status: "0"
    },
    {
        id : "3",
        lastname : "Nguyen",
        firstName : "Tung",
        year : "4th",
        total : "8000000",
        status: "0"
    },
    {
        id : "4",
        lastname : "Nguyen",
        firstName : "Long",
        year : "3th",
        total : "8000000",
        status: "0"
    },
    {
        id : "5",
        lastname : "Bui",
        firstName : "An",
        year : "4th",
        total : "8000000",
        status: "0"
    },
    {
        id : "6",
        lastname : "Luong",
        firstName : "Tung",
        year : "4th",
        total : "8000000",
        status: "0"
    },
    {
        id : "7",
        lastname : "Do",
        firstName : "Hung",
        year : "4th",
        total : "8000000",
        status: "0"
    },
    {
        id : "8",
        lastname : "Nguyen",
        firstName : "Bao",
        year : "4th",
        total : "8000000",
        status: "0"
    },
    {
        id : "9",
        lastname : "Nguyen",
        firstName : "Huyen",
        year : "4th",
        total : "8000000",
        status: "0"
    },
    {
        id : "10",
        lastname : "Nguyen",
        firstName : "Tung",
        year : "4th",
        total : "8000000",
        status: "0"
    },
    {
        id : "11",
        lastname : "Nguyen",
        firstName : "Huy",
        year : "4th",
        total : "8000000",
        status: "0"
    },
    {
        id : "12",
        lastname : "Nguyen",
        firstName : "Khang",
        year : "4th",
        total : "8000000",
        status: "0"
    },
    {
        id : "13",
        lastname : "Nguyen",
        firstName : "Khanh",
        year : "4th",
        total : "8000000",
        status: "0"
    },
    {
        id : "14",
        lastname : "Nguyen",
        firstName : "Sang",
        year : "4th",
        total : "8000000",
        status: "0"
    },
    {
        id : "15",
        lastname : "Bach",
        firstName : "Ha",
        year : "4th",
        total : "8000000",
        status: "0"
    },
    {
        id : "16",
        lastname : "Nguyen",
        firstName : "Tu",
        year : "4th",
        total : "8000000",
        status: "0"
    },
    {
        id : "17",
        lastname : "Do",
        firstName : "Nam",
        year : "4th",
        total : "8000000",
        status: "0"
    },
    {
        id : "18",
        lastname : "Hoang",
        firstName : "Nam",
        year : "4th",
        total : "8000000",
        status: "0"
    },
    {
        id : "19",
        lastname : "Duong",
        firstName : "Dung",
        year : "4th",
        total : "8000000",
        status: "0"
    },
    {
        id : "20",
        lastname : "Ha",
        firstName : "Son",
        year : "4th",
        total : "8000000",
        status: "0"
    },
    {
        id : "21",
        lastname : "Nguyen",
        firstName : "Vu",
        year : "4th",
        total : "8000000",
        status: "0"
    },
]

router.get('/', (req, res)=> {
    res.send(students);
});

router.post('/',(req,res) =>{
    const student = req.body;
    const studentsID = req.body.id;
    const studentWithID = { ...student, id: studentsID }
    students.push(studentWithID);
    res.send('Student added');
});

router.get('/:id', (req,res) =>{
    const {id} = req.params;
    const result = students.find((students) => students.id === id);
    res.send(result);
});

router.put('/edit/:id', (req, res) =>{
    const { id } = req.params;
    const { status } = req.body;
    const result = students.find((students) => students.id === id);
    result.status = status
    res.send(result)
});

/*
router.get('/:invoice' ,(req, res) => {
   // const status = "ok"
   // const result = students.filter((students) => students.status == status);
    res.send(students);
});
*/

router.get('/invoice/:id' ,(req, res) => {
    const { id } = req.params;
    const result = students.find((students) => students.id === id);
    res.send(result)
});

export default router;

