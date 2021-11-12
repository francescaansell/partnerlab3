function callAPI(path){
    const request = new XMLHttpRequest();

    //When ready to open connection, do this..... DOES NOT OPEN CONNECTION
    request.open("GET", "http://localhost:3000/" + path, true);

    //Callback function, when data has loaded, do this function async
    request.onload = function () {
        if (!request.status == 200) {
            console.log(`ERROR Code: ${request.status}`)
            return;
        }
        //Turns JSON into JS Object
        let data = this.response;

        let output = document.querySelector('#reservations');
        let tableData = document.createElement('td');
        let newTextNode = document.createTextNode(data)

        tableData.appendChild(newTextNode);
        output.appendChild(listItem);

    };

    request.send();
}

 function clearScreen(){
    document.querySelector('#reservations').innerHTML="";
 }