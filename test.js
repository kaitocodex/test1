const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let timetable = {};

app.post('/add', (req, res) => {
    const { day, subject, time } = req.body;
    if (!timetable[day]) {
        timetable[day] = [];
    }
    timetable[day].push({ subject, time });
    res.send(`Added ${subject} at ${time} on ${day}`);
});

app.get('/view', (req, res) => {
    res.json(timetable);
});

app.listen(3000, () => {
    console.log('Timetable app listening on port 3000');
});