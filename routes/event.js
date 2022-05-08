import express from "express";
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


export default router;