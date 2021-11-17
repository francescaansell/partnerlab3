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

app.post("/postreservation/user/:username/startDate/:startDate/startTime/:startTime/numHours/:numHours", (req, res) => {
    let username = req.params.username; 
    let startDate = req.params.startDate; 
    let startTime = req.params.startTime; 
    let numHours = req.params.numHours; 
    
    console.log(`postreservation/user/${username}/startDate/${startDate}/startTime/${startTime}/numHours/${numHours}`);
    
    let resFileData = fs.readFileSync('reservations.json');
    let reservations = JSON.parse(resFileData);

    let temp = {}; 
    temp.name = username; 
    temp.startDate = startDate; 
    temp.startTime = startTime; 
    temp.numHours = numHours; 

    //prevents having two different for one user
    reservations.forEach((reservation, index) =>{
        console.log("checking for existing reservations....");
        if(reservation.name == temp.name){
            console.log("match");
            reservations.splice(index, 1);
        }
    })

    reservations.push(temp);

    reservations.sort((res1, res2) => {
        if (res1.startDate > res2.startDate) return 1; 
        if (res1.startDate < res2.startDate) return -1; 

        if (res1.startTime > res2.startTime) return 1;
        if (res1.startTime < res2.startTime) return -1; 
    });

    console.log(reservations);
    
    fs.writeFileSync('reservations.json', JSON.stringify(reservations));
    res.send(reservations); 
});

app.delete('/deletereservation/user/:username', (req, res) =>{
    let username = req.params.username; 

    console.log(`delete reservations/user/${username}`);

    let resFileData = fs.readFileSync('reservations.json');
    let reservations = JSON.parse(resFileData);

    reservations.forEach((reservation, index) => {
        if (reservation.name == username ){
            console.log("match");
            reservations.splice(index, 1);
        }
    });

    console.log(reservations);

    fs.writeFileSync('reservations.json', JSON.stringify(reservations));
    res.send(reservations);
})

app.listen(port, () => console.log(`Listening on port ${port}`));















