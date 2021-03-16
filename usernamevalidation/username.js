
var n = 1;
var reg = /^[A-Z][a-z A-Z 0-9 \.-_]{8,29}$/;
function addUserName() {

    var tableDetails = document.getElementById('table');

    var userName = document.getElementById("username").value;
    if (userName === "")
        alert("Enter usser name");
    else {
        var NewRow = tableDetails.insertRow(n);
        var cell = NewRow.insertCell(0);
        var cell1 = NewRow.insertCell(1);
        if (reg.test(userName)) {
            cell1.innerHTML = "valid";
            cell.innerHTML = userName.fontcolor("green");

        }
        else {
            cell1.innerHTML = " not valid";
            cell.innerHTML = userName.fontcolor("red");
        }

        n++;
    }
}