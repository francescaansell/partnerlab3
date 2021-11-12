/////////////////////////////////////////////////////////////////////////////////////////////// File part 
const fs = require('fs');

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


/*Its going to be problematic when we read the file and then use it 
REading from the file is an async operations
error trying to assign a value that doesn't exist yest 
*/ 
let resFileData = fs.readFileSync("resList1.json");

let resInfo = JSON.parse(resFileData);

resInfo.sort((res1, res2) => {
    if (res1.num > res2.num) return 1; 
    if (res1.num < res2.num) return -1; 
})

console.log(resInfo);














/*
/////////////////////////////////////////////////////////////////////////////////// API PART
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
*/