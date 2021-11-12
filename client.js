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
