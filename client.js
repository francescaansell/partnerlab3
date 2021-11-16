function getReservations(){
    console.log("getReservations");
    const request = new XMLHttpRequest();
    request.open("GET", "http://localhost:3000/getreservations", true);

    request.onload = function () {
        if (!request.status == 200) {
            console.log(`ERROR Code: ${request.status}`)
            return;
        }

        let data = this.response;

        let output = document.querySelector('#reservations');
        let tableRow = document.createElement('tr');
        let tableData = document.createElement('td');
        let newTextNode = document.createTextNode(data)

        tableData.appendChild(newTextNode);
        tableRow.appendChild(tableData)
        output.appendChild(tableRow);

    };

    request.send();
}

function getReservationUsername(){
    console.log("get reservation");
    const request = new XMLHttpRequest();
    let path = document.querySelector('#getReservationUsername').value;
    console.log(path);
    request.open("GET", "http://localhost:3000/getreservation/user/" + path, true);

    request.onload = function () {
        if (!request.status == 200) {
            console.log(`ERROR Code: ${request.status}`)
            return;
        }

        let data = this.response;

        let output = document.querySelector('#reservations');
        let tableRow = document.createElement('tr');
        let tableData = document.createElement('td');
        let newTextNode = document.createTextNode(data)

        tableData.appendChild(newTextNode);
        tableRow.appendChild(tableData)
        output.appendChild(tableRow);

    };

    request.send();
}

function addUser(){
    console.log("add username");
    const request = new XMLHttpRequest();
    let path = document.querySelector('#addUser').value;
    console.log(path);
    request.open("POST", "http://localhost:3000/postusers/" + path, true);

    request.onload = function () {
        if (!request.status == 200) {
            console.log(`ERROR Code: ${request.status}`)
            return;
        }

        let data = this.response;

        let output = document.querySelector('#reservations');
        let tableRow = document.createElement('tr');
        let tableData = document.createElement('td');
        let newTextNode = document.createTextNode(data)

        tableData.appendChild(newTextNode);
        tableRow.appendChild(tableData)
        output.appendChild(tableRow);
    };

    request.send();

}

function addReservation(){
    console.log("add Reservation");
    const request = new XMLHttpRequest();
    let username = document.querySelector("#username").value; 
    let startTime = document.querySelector("#startTime").value; 
 
    request.open("POST", "http://localhost:3000/postreservation/user/" + username + "/startTime/" + startTime, true);

    request.onload = function () {
        if (!request.status == 200) {
            console.log(`ERROR Code: ${request.status}`)
            return;
        }

        let data = this.response;
        
        let output = document.querySelector('#reservations');
        let tableRow = document.createElement('tr');
        let tableData = document.createElement('td');
        let newTextNode = document.createTextNode(data)

        tableData.appendChild(newTextNode);
        tableRow.appendChild(tableData)
        output.appendChild(tableRow);

    };

    request.send();


}

