////////////////////////////////////////////////////////////////////////////////////////////////// API PART
// create application for web server
let cors = require('cors');
const fs = require('fs');
const express = require('express');
const app = express();
app.use(cors());
const port = 3000;


let resList = [
    {
        username: 'Smith', 
        startTime: '009',
        startDate: '9/2/2021', 
        numHours: '8'
    }
    
    
]

app.get('/reservations', (req, res) => {
    res.send('\nGet Reservations\n');

});

app.post('/users/:username', (req, res) => {
    let username = req.params.username;
    res.send(`${username}`);
});

app.post('/reservations/:username'), (req, res) => {
    let username = req.params.username; 
    res.send(`${username}`);
    let temp = {}; 
    temp.name = username; 
    reservations.push(temp);  
}


/*
app.get('/getdog/:dogName', (req, res) => {
    let dogName = req.params.dogName;
    res.send(`\nHere is a dog named ${dogName}\n`)
});

app.get('/getdog/:dogName/owner/:ownerName', (req, res) => {
    let dogName = req.params.dogName;
    let ownerName = req.params.ownerName;
    res.send(`\n${dogName} belongs to ${ownerName}\n`)
})
*/

app.listen(port, () => console.log(`Listening on port ${port}`));

/////////////////////////////////////////////////////////////////////////////////////////////// File part 
/*


let resList = [
    {
        name: 'Smith',
        time: '0900',
        num: 4
    },
    {
        name: 'Jones',
        time: '1100',
        num: 2
    }
];

let millerRes = {};
millerRes.name = 'Miller';
millerRes.time = '1800';
millerRes.num = 3;

resList.push(millerRes);

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
















