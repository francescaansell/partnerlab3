////////////////////////////////////////////////////////////////////////////////////////////////// API PART
// create application for web server
let cors = require('cors');
const fs = require('fs');
const express = require('express');
const app = express();
app.use(cors());
const port = 3000;

let reservations = [
    {
        name: 'Smith', 
        startTime: '009',
        numHours: '8'
    }
];

let users = [
    {
        name: "example"
    }
];

app.get('/getreservations', (req, res) => {
    console.log(`get reservations`);
    res.send(reservations);     
});

//sync issue 
app.get('/getreservation/user/:username', (req, res) => {
    let username = req.params.username; 
    console.log(`get reservations${username}`);

    let temp; 
    reservations.forEach(reservation => {
        if(reservation.name == username){
            console.log("match");
            temp = reservation.username;
        }
    });
    res.send(temp); 
});

app.post('/postusers/:username', (req, res) => {
    let username = req.params.username;
    console.log(`post users/${username}`);

    let temp = {};
    temp.name = username; 
    users.push(temp); 
    console.log(users);

    res.send(`${username}`);
});

app.post('/postreservation/user/:username/startTime/:startTime', (req, res) => {
    let username = req.params.username; 
    let startTime = req.params.startTime; 
    console.log(`post reservations/user/${username}/startTime/${startTime}`);
    
    let temp = {}; 
    temp.name = username; 
    temp.startTime = startTime; 
    reservations.push(temp);  
    console.log(temp);

    res.send(`Username: ${username} Start Date: ${startTime}`); 
});


app.listen(port, () => console.log(`Listening on port ${port}`));

/////////////////////////////////////////////////////////////////////////////////////////////// File part 
/*

resList.forEach((elt) => {
    console.log(`Name: ${elt.name}, Num: ${elt.num}`)
});


fs.writeFile('resList1.json', JSON.stringify(resList), err => {
    if (err) throw err; 
    console.log('Saved File.')
});

//Its going to be problematic when we read the file and then use it 
//Reading from the file is an async operations
//error trying to assign a value that doesn't exist yest 

let resFileData = fs.readFileSync("resList1.json");

let resInfo = JSON.parse(resFileData);

resInfo.sort((res1, res2) => {
    if (res1.num > res2.num) return 1; 
    if (res1.num < res2.num) return -1; 
})

console.log(resInfo);
*/
















