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
var m = document.getElementById("Messages");
// m.innerHTML = message.content;
var p = document.createElement("p");
p.innerHTML = message.content + " - " + message.name;
m.prepend(p);
}

//The sendMessage('text') function will send a message from you to the database.
function send() {
sendMessage(document.getElementById("Input").value);
}
