import express from "express";


const router = express.Router();

const students = [
    {
        id : "1",
        lastname : "Nguyen",
        firstName : "Dung",
        year : "4th",
        status: "Not yet"
    },
    {
        id : "2",
        lastname : "Do",
        firstName : "Anh",
        year : "2th",
        status: "Not yet"
    },
    {
        id : "3",
        lastname : "Nguyen",
        firstName : "Tung",
        year : "4th",
        status: "Not yet"
    },
    {
        id : "4",
        lastname : "Nguyen",
        firstName : "Long",
        year : "3th",
        status: "Not yet"
    },
    {
        id : "5",
        lastname : "Bui",
        firstName : "An",
        year : "4th",
        status: "Not yet"
    },
    {
        id : "6",
        lastname : "Luong",
        firstName : "Tung",
        year : "4th",
        status: "Not yet"
    },
    {
        id : "7",
        lastname : "Do",
        firstName : "Hung",
        year : "4th",
        status: "Not yet"
    },
    {
        id : "8",
        lastname : "Nguyen",
        firstName : "Bao",
        year : "4th",
        status: "Not yet"
    },
    {
        id : "9",
        lastname : "Nguyen",
        firstName : "Huyen",
        year : "4th",
        status: "Not yet"
    },
    {
        id : "10",
        lastname : "Nguyen",
        firstName : "Tung",
        year : "4th",
        status: "Not yet"
    },
    {
        id : "11",
        lastname : "Nguyen",
        firstName : "Huy",
        year : "4th",
        status: "Not yet"
    },
    {
        id : "12",
        lastname : "Nguyen",
        firstName : "Khang",
        year : "4th",
        status: "Not yet"
    },
    {
        id : "13",
        lastname : "Nguyen",
        firstName : "Khanh",
        year : "4th",
        status: "Not yet"
    },
    {
        id : "14",
        lastname : "Nguyen",
        firstName : "Sang",
        year : "4th",
        status: "Not yet"
    },
    {
        id : "15",
        lastname : "Bach",
        firstName : "Ha",
        year : "4th",
        status: "Not yet"
    },
    {
        id : "16",
        lastname : "Nguyen",
        firstName : "Tu",
        year : "4th",
        status: "Not yet"
    },
    {
        id : "17",
        lastname : "Do",
        firstName : "Nam",
        year : "4th",
        status: "Not yet"
    },
    {
        id : "18",
        lastname : "Hoang",
        firstName : "Nam",
        year : "4th",
        status: "Not yet"
    },
    {
        id : "19",
        lastname : "Duong",
        firstName : "Dung",
        year : "4th",
        status: "Not yet"
    },
    {
        id : "20",
        lastname : "Ha",
        firstName : "Son",
        year : "4th",
        status: "Not yet"
    },
    {
        id : "21",
        lastname : "Nguyen",
        firstName : "Vu",
        year : "4th",
        status: "Not yet"
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
    const found = students.find((students) => students.id === id);
    res.send(found);
})

router.delete('/:id' , (req, res) => {
    const { id } = req.params;

    students = students.filter((student) => students.id != id );
    res.send(students); 
})
export default router;

