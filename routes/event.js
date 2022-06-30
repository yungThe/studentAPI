import express from "express";

const router = express.Router();

const event = [
    {
        name : "Tuition submit",
        description : "Start today, end after 24 hours"
    }

    
]
router.get('/', (req, res)=> {
    res.send(event);
});

export default router;