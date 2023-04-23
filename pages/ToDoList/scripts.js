
//Date settings
const options = {weekday : "long", month : "short", day : "numeric"};
const time = {hour : "numeric", minute : "numeric"}
const today = new Date();
// Select the .header element
const headerElement = document.querySelector(".header");
// Get the current hour
const currentHour = today.getHours();

// Select the input field
const inputField = document.getElementById("input");

//Display date
$(document).ready(function(){
    $('#date').append('<p id="timer" >' + today.toLocaleTimeString("hu-HU", time) + '</p>' + '<p>' + today.toLocaleDateString("hu-HU", options) + '</p>');
});

// Set the background image based on the time of day
if (currentHour >= 6 && currentHour < 10) {
    headerElement.style.backgroundImage = "url('picture/morning.jpg')";
} else if (currentHour >= 10 && currentHour < 19) {
    headerElement.style.backgroundImage = "url('picture/day.jpg')";
}else if (currentHour >= 19 && currentHour < 21) {
    headerElement.style.backgroundImage = "url('picture/evening.jpg')";
} else {
    headerElement.style.backgroundImage = "url('picture/night.jpg')";
}

setInterval(setBackgroundImage);

// Add a new to-do item
function addToDo() {
    const inputText = inputField.value;
    if (inputText === "") return;
    
    const toDoList = document.getElementById("list");
    const newToDo = document.createElement("li");
    const textNode = document.createTextNode(inputText || "Have a nice day");
    
    newToDo.appendChild(textNode);
    toDoList.appendChild(newToDo);
    inputField.value = "";

    const checkIcon = document.createElement("i");
    checkIcon.className = "fas fa-check";
    checkIcon.addEventListener("click", function() {
    const parentListItem = this.parentNode;
    parentListItem.classList.toggle("done");
    const todoText = parentListItem.firstChild;
    if (parentListItem.classList.contains("done")) {
        todoText.style.textDecoration = "line-through";
    } else {
        todoText.style.textDecoration = "none";
    }
    });
    
    const trashIcon = document.createElement("i");
    trashIcon.className = "fas fa-trash";
    trashIcon.addEventListener("click", function() {
        this.parentNode.remove();
    });
    
    newToDo.appendChild(checkIcon);
    newToDo.appendChild(trashIcon);
}