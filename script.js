//Begin the login process and set up the listener for new messages
login(start, recieveMessage);

//This function runs after you have logged in. Your user information is passed to you in the variable 'user'
function start(user) {
console.log(user);
document.getElementById("sendMessage").addEventListener("click", send);
}


//This function runs every time you recieve a message. It will run for every message already in the database.
//The message information is passed to you in the variable 'message'
function recieveMessage(message) {
console.log(message);
let messages = [
  { Name: message.name, Message: message.content},
];

function generateTableHead(table) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}



function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let table = document.getElementById("table");
let data = Object.keys(messages[0]);
generateTableHead(table, data);
generateTable(table, messages);



// var m = document.getElementById("Messages");
// // m.innerHTML = message.content;
// var p = document.createElement("p");
// p.innerHTML = message.name+ " says: " + message.content;
// m.prepend(p);
}

//The sendMessage('text') function will send a message from you to the database.
function send() {
sendMessage(document.getElementById("Input").value);
}
