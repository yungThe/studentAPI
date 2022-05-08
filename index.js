import express from 'express';
import bodyParser from 'body-parser';
import studentRoute from './routes/student.js';
import eventRoute from './routes/event.js';

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use('/student', studentRoute);
app.use('/event', eventRoute);

app.listen(PORT, () =>
    console.log('Server Running on: http://localhost:8080')
);

app.get('/', (req,res) => {
    res.send('Hello');
});


