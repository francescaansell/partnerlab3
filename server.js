/**
 * Add a username to the system (no password or auth required)
Retrieve the reservation info (if they have one) for a given user.
Get a list of reservations for all users.
Create a reservation for a given user. It should specify username, start date, start time, and number of hours
Update a reservation for a given user. It should specify username, start date, start time, and number of hours
Delete a reservation for a given user
 */

const fs = require('fs');

// create application for web server 
const express = require('express');
const app = express();

const port = 3000;


// like (method === ‘get’ && url === ‘/') but better
app.get('/', (req, res) => {
    res.send('Hello from GET!');
});

app.get('/getdog', (req, res) => {
    res.send('\nHere is a dog!\n')
});

//route paramater 
app.get('/getdog/:dogName', (req, res) => {
    let dogName = req.params.dogName;
    res.send(`\nHere is a dog named ${dogName}\n`)
});

app.get('/getdog/:dogName/owner/:ownerName', (req, res) => {
    let dogName = req.params.dogName;
    let ownerName = req.params.ownerName;
    res.send(`\n${dogName} belongs to ${ownerName}\n`)
})

app.post('/', (req, res) => {
    res.send('Hello from POST!');
});


app.listen(port, () => console.log(`Listening on port ${port}`));