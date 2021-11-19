let cors = require('cors');
const fs = require('fs');
const express = require('express');
const app = express();
app.use(cors());
const port = 3000;


app.get('/reservations', (req, res) => {
    console.log(`get reservations`);
    try{
        let reservations; 
        if(fs.existsSync('reservations.json')){
            let resFileData = fs.readFileSync("reservations.json");
            reservations = JSON.parse(resFileData);
        } else {
            reservations = []; 
        }
        
        res.send(reservations);     
    } catch {
        res.send("ERROR"); 
    }
});

app.get('/reservation/user/:username', (req, res) => {
    let username = req.params.username; 
    console.log(`get reservations${username}`);
    try {
        let reservations; 
        if(fs.existsSync('reservations.json')){
            let resFileData = fs.readFileSync("reservations.json");
            reservations = JSON.parse(resFileData);
        } else {
            reservations = []; 
        }
        
        let temp; 
        reservations.forEach(reservation => {
            if(reservation.name == username){
                console.log("match");
                temp = reservation;
            }
        });
        res.send(temp); 
    } catch {
        throw new ERROR("Does not Exist");
    }    
});

app.get("/users", (req, res) =>{
    console.log("get users ")
    try {
        let users; 
        if(fs.existsSync('users.json')){
            let userFileData = fs.readFileSync('users.json');
            users = JSON.parse(userFileData); 
        } else {
            users = [];
        }
        res.send(users);
    } catch {
        res.send("ERROR"); 
    }
})

app.post('/users/:username', (req, res) => {
    let username = req.params.username;
    console.log(`post users/${username}`);
    try {
        let users; 
        if (fs.existsSync('users.json')){
            let userFileData = fs.readFileSync('users.json');
            users = JSON.parse(userFileData);
        } else {
            users = []; 
        }
        

        let temp = {}; 
        temp.name = username; 
        
        //prevents having two different for one user
        users.forEach((user, index) =>{
            console.log("checking for existing users....");
            if(user.name == temp.name){
                console.log("match");
                users.splice(index, 1);
            }
        });

        users.push(temp); 

        users.sort((user1, user2) => {
            if (user1.name > user2.name) return 1; 
            if (user1.name < user2.name) return -1; 

        });

        fs.writeFileSync('users.json', JSON.stringify(users));
        console.log(users);
        res.send(users);
    } catch {
        res.send("ERROR");
    }
    
});

app.post("/reservation/user/:username/startDate/:startDate/startTime/:startTime/numHours/:numHours", (req, res) => {
    let username = req.params.username; 
    let startDate = req.params.startDate; 
    let startTime = req.params.startTime; 
    let numHours = req.params.numHours; 
    
    console.log(`reservation/user/${username}/startDate/${startDate}/startTime/${startTime}/numHours/${numHours}`);
    
    try {
        let reservations; 
        if(fs.existsSync('reservations.json')){
            let resFileData = fs.readFileSync('reservations.json');
            reservations = JSON.parse(resFileData);
        } else {
            reservations = []; 
        }
        
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

        //sort 
        reservations.sort((res1, res2) => {
            if (res1.startDate > res2.startDate) return 1; 
            if (res1.startDate < res2.startDate) return -1; 

            if (res1.startTime > res2.startTime) return 1; 
            if (res1.startTime < res2.startTime) return -1 
        });

        console.log(reservations);
        
        fs.writeFileSync('reservations.json', JSON.stringify(reservations));
        res.send(reservations); 
    } catch {
        res.send("ERROR");
    }
});

app.delete('/reservation/user/:username', (req, res) =>{
    let username = req.params.username; 

    console.log(`delete reservations/user/${username}`);

    try{
        let reservations; 
        if(fs.existsSync('reservations.json')){
            let resFileData = fs.readFileSync('reservations.json');
            reservations = JSON.parse(resFileData);
        } else {
            reservations = []; 
        }
        
        reservations.forEach((reservation, index) => {
            if (reservation.name == username ){
                console.log("match");
                reservations.splice(index, 1);
            }
        });

        console.log(reservations);

        fs.writeFileSync('reservations.json', JSON.stringify(reservations));
        res.send(reservations);
    } catch {
        res.send
    }

    
})

app.listen(port, () => console.log(`Listening on port ${port}`));















