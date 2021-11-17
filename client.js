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
        console.log(data);
        let reservations = JSON.parse(data); 
        console.log(reservations); 

        let output = document.querySelector('#reservations');
        output.innerHTML = ""; 

        let tableHeader = document.createElement('tr');
        let th1 = document.createElement('th');
        let th2 = document.createElement('th');
        let th3 = document.createElement('th');
        let th4 = document.createElement('th');

        th1.appendChild(document.createTextNode("Username"));
        th2.appendChild(document.createTextNode("Start Date"));
        th3.appendChild(document.createTextNode("Start Time"));
        th4.appendChild(document.createTextNode("Number of hours"));

        tableHeader.appendChild(th1);
        tableHeader.appendChild(th2);
        tableHeader.appendChild(th3);
        tableHeader.appendChild(th4);

        output.appendChild(tableHeader);


        reservations.forEach(reservation => {
            let tableRow = document.createElement('tr');

            let tdusername = document.createElement('td');
            let tdstartDate = document.createElement('td');
            let tdstartTime = document.createElement('td');
            let tdnumHours = document.createElement('td');


            tdusername.appendChild(document.createTextNode(reservation.name));
            tdstartDate.appendChild(document.createTextNode(reservation.startDate));
            tdstartTime.appendChild(document.createTextNode(reservation.startTime));
            tdnumHours.appendChild(document.createTextNode(reservation.numHours));

    
            tableRow.appendChild(tdusername);
            tableRow.appendChild(tdstartDate);
            tableRow.appendChild(tdstartTime);
            tableRow.appendChild(tdnumHours);


            output.appendChild(tableRow);
            
        });

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
        data = JSON.parse(data); 

        let output = document.querySelector('#reservations');
        output.innerHTML = ""; 

        let tableHeader = document.createElement('tr');
        let th1 = document.createElement('th');
        let th2 = document.createElement('th');
        let th3 = document.createElement('th');
        let th4 = document.createElement('th');

        th1.appendChild(document.createTextNode("Username"));
        th2.appendChild(document.createTextNode("Start Date"));
        th3.appendChild(document.createTextNode("Start Time"));
        th4.appendChild(document.createTextNode("Number of hours"));

        tableHeader.appendChild(th1);
        tableHeader.appendChild(th2);
        tableHeader.appendChild(th3);
        tableHeader.appendChild(th4);

        output.appendChild(tableHeader);

        let tableRow = document.createElement('tr');

        let tdusername = document.createElement('td');
        let tdstartDate = document.createElement('td');
        let tdstartTime = document.createElement('td');
        let tdnumHours = document.createElement('td');


        tdusername.appendChild(document.createTextNode(data.name));
        tdstartDate.appendChild(document.createTextNode(data.startDate));
        tdstartTime.appendChild(document.createTextNode(data.startTime));
        tdnumHours.appendChild(document.createTextNode(data.numHours));

    
        tableRow.appendChild(tdusername);
        tableRow.appendChild(tdstartDate);
        tableRow.appendChild(tdstartTime);
        tableRow.appendChild(tdnumHours);


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
    let startDate = document.querySelector("#startDate").value; 
    let numHours = document.querySelector("#numHours").value; 

    request.open("POST", `http://localhost:3000/postreservation/user/${username}/startDate/${startDate}/startTime/${startTime}/numHours/${numHours}` , true);

    request.onload = function () {
        if (!request.status == 200) {
            console.log(`ERROR Code: ${request.status}`)
            return;
        }

        let data = this.response;
        console.log(data);
        let reservations = JSON.parse(data); 
        console.log(reservations); 

        let output = document.querySelector('#reservations');
        output.innerHTML = ""; 

        let tableHeader = document.createElement('tr');
        let th1 = document.createElement('th');
        let th2 = document.createElement('th');
        let th3 = document.createElement('th');
        let th4 = document.createElement('th');

        th1.appendChild(document.createTextNode("Username"));
        th2.appendChild(document.createTextNode("Start Date"));
        th3.appendChild(document.createTextNode("Start Time"));
        th4.appendChild(document.createTextNode("Number of hours"));

        tableHeader.appendChild(th1);
        tableHeader.appendChild(th2);
        tableHeader.appendChild(th3);
        tableHeader.appendChild(th4);

        output.appendChild(tableHeader);
        

        reservations.forEach(reservation => {
            let tableRow = document.createElement('tr');

            let tdusername = document.createElement('td');
            let tdstartDate = document.createElement('td');
            let tdstartTime = document.createElement('td');
            let tdnumHours = document.createElement('td');


            tdusername.appendChild(document.createTextNode(reservation.name));
            tdstartDate.appendChild(document.createTextNode(reservation.startDate));
            tdstartTime.appendChild(document.createTextNode(reservation.startTime));
            tdnumHours.appendChild(document.createTextNode(reservation.numHours));

    
            tableRow.appendChild(tdusername);
            tableRow.appendChild(tdstartDate);
            tableRow.appendChild(tdstartTime);
            tableRow.appendChild(tdnumHours);


            output.appendChild(tableRow);
            
        });
    };

    request.send();


}

function deleteReservation(){
    console.log("delete reservation");
    const request = new XMLHttpRequest();
    let username = document.querySelector("#deleteReservationUsername").value;

    request.open("DELETE", "http://localhost:3000/deletereservation/user/" + username, true);

    request.onload = function () {
        if (!request.status == 200){
            console.log(`ERROR code: ${request.status}`);
            return; 
        }

        let data = this.response;
        console.log(data);
        let reservations = JSON.parse(data); 
        console.log(reservations); 

        let output = document.querySelector('#reservations');
        output.innerHTML = ""; 

        let tableHeader = document.createElement('tr');
        let th1 = document.createElement('th');
        let th2 = document.createElement('th');
        let th3 = document.createElement('th');
        let th4 = document.createElement('th');

        th1.appendChild(document.createTextNode("Username"));
        th2.appendChild(document.createTextNode("Start Date"));
        th3.appendChild(document.createTextNode("Start Time"));
        th4.appendChild(document.createTextNode("Number of hours"));

        tableHeader.appendChild(th1);
        tableHeader.appendChild(th2);
        tableHeader.appendChild(th3);
        tableHeader.appendChild(th4);

        output.appendChild(tableHeader);


        reservations.forEach(reservation => {
            let tableRow = document.createElement('tr');

            let tdusername = document.createElement('td');
            let tdstartDate = document.createElement('td');
            let tdstartTime = document.createElement('td');
            let tdnumHours = document.createElement('td');


            tdusername.appendChild(document.createTextNode(reservation.name));
            tdstartDate.appendChild(document.createTextNode(reservation.startDate));
            tdstartTime.appendChild(document.createTextNode(reservation.startTime));
            tdnumHours.appendChild(document.createTextNode(reservation.numHours));

    
            tableRow.appendChild(tdusername);
            tableRow.appendChild(tdstartDate);
            tableRow.appendChild(tdstartTime);
            tableRow.appendChild(tdnumHours);

            output.appendChild(tableRow);
            
        });
    }

    request.send();
}