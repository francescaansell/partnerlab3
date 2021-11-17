let cors = require('cors');
const fs = require('fs');
const express = require('express');
const app = express();
app.use(cors());
const port = 3000;


app.get('/getreservations', (req, res) => {
    console.log(`get reservations`);
    let resFileData = fs.readFileSync("reservations.json");
    let resInfo = JSON.parse(resFileData);
    console.log(resInfo); 
    res.send(resInfo);     
});

app.get('/getreservation/user/:username', (req, res) => {
    let username = req.params.username; 
    console.log(`get reservations${username}`);
    let resFileData = fs.readFileSync("reservations.json");
    let reservations = JSON.parse(resFileData);

    let temp; 
    reservations.forEach(reservation => {
        if(reservation.name == username){
            console.log("match");
            temp = reservation;
        }
    });
    res.send(temp); 
});

app.post('/postusers/:username', (req, res) => {
    let username = req.params.username;
    console.log(`post users/${username}`);

    let userFileData = fs.readFileSync('users.json');
    let users = JSON.parse(userFileData);

    let temp = {}; 
    temp.name = username; 
    console.log(temp);
    users.push(temp); 

    users.sort((user1, user2) => {
        if (user1.name > user2.name) return 1; 
        if (user1.name < user2.name) return -1; 
    });

    fs.writeFileSync('users.json', JSON.stringify(users));
    console.log(users);
    res.send(temp);
});

app.post('/postreservation/user/:username/startTime/:startTime', (req, res) => {
    let username = req.params.username; 
    let startTime = req.params.startTime; 

    console.log(`post reservations/user/${username}/startTime/${startTime}`);
    
    let resFileData = fs.readFileSync('reservations.json');
    let reservations = JSON.parse(resFileData);

    let temp = {}; 
    temp.name = username; 
    temp.startTime = startTime; 
    reservations.push(temp);

    reservations.sort((res1, res2) => {
        if (res1.startTime > res2.startTime) return 1; 
        if (res1.startTime < res2.startTime) return -1; 
    });

    console.log(reservations);
    
    fs.writeFileSync('reservations.json', JSON.stringify(reservations));
    res.send(temp); 
});

app.delete('/deletereservation/user/:username', (req, res) =>{
    let username = req.params.username; 

    console.log(`delete reservations/user/${username}`);

    let resFileData = fs.readFileSync('reservations.json');
    let reservations = JSON.parse(resFileData);
    let temp;

    for (let i = 0; i < reservations.lenth; i++ ){
        console.log(reservations[i]);
        if (reservations[i].name == username){
            console.log('match');
            temp = reservations[i];
            console.log(`remove: ${temp}`);
            reservations = reservations.splice(i, 1);
        }
    }

    console.log(reservations);

    fs.writeFileSync('reservations.json', JSON.stringify(reservations));
    res.send(temp);
})

app.listen(port, () => console.log(`Listening on port ${port}`));















