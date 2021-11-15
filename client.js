function getReservations(){
    console.log("getReservations");
    const request = new XMLHttpRequest();
    request.open("GET", "http://localhost:3000/reservations", true);

    request.onload = function () {
        if (!request.status == 200) {
            console.log(`ERROR Code: ${request.status}`)
            return;
        }

        let data = this.response;

        let output = document.querySelector('#reservations');
        let tableData = document.createElement('td');
        let newTextNode = document.createTextNode(data)

        tableData.appendChild(newTextNode);
        output.appendChild(tableData);

    };

    request.send();
}

function getReservationUsername(){
    console.log("get reservation");
    const request = new XMLHttpRequest();
    let path = document.querySelector('#getReservationUsername').value;
    console.log(path);
    request.open("GET", "http://localhost:3000/reservations/" + path, true);

    request.onload = function () {
        if (!request.status == 200) {
            console.log(`ERROR Code: ${request.status}`)
            return;
        }

        let data = this.response;

        let output = document.querySelector('#reservations');
        let tableData = document.createElement('td');
        let newTextNode = document.createTextNode(data)

        tableData.appendChild(newTextNode);
        output.appendChild(tableData);

    };

    request.send();
}

function addUser(){
    console.log("add username");
    const request = new XMLHttpRequest();
    let path = document.querySelector('#addUser').value;
    console.log(path);
    request.open("POST", "http://localhost:3000/users/" + path, true);

    request.onload = function () {
        if (!request.status == 200) {
            console.log(`ERROR Code: ${request.status}`)
            return;
        }

        let data = this.response;

        let output = document.querySelector('#reservations');
        let tableData = document.createElement('td');
        let newTextNode = document.createTextNode(data)

        tableData.appendChild(newTextNode);
        output.appendChild(tableData);

    };

    request.send();

}

