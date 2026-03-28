// Select important elements from the DOM
const input = document.getElementById("noteInput");      // textarea where user writes note
const addBtn = document.getElementById("addNote");       // add note button
const container = document.getElementById("notesContainer"); // where notes will be displayed
const search = document.getElementById("searchInput");   // search input

// Get saved notes from LocalStorage
// If nothing is saved, start with an empty array
let notes = JSON.parse(localStorage.getItem("notes")) || [];


// Function to save notes into LocalStorage
function saveNotes(){
localStorage.setItem("notes", JSON.stringify(notes));
}


// Function to display notes on the screen
function renderNotes(){

// Clear previous notes before rendering again
container.innerHTML="";

// Sort notes so pinned notes appear first
notes.sort((a,b)=> b.pinned - a.pinned);

// Loop through notes array
notes.forEach((note,index)=>{

// Create a new div for each note
const div = document.createElement("div");

// Add CSS class
div.classList.add("note");

// If note is pinned, add special style
if(note.pinned){
div.classList.add("pinned");
}

// Insert note content and action buttons
div.innerHTML = `
<p class="text">${note.text}</p>

<div class="actions">

<button class="edit" data-index="${index}">Edit</button>

<button class="delete" data-index="${index}">Delete</button>

<button class="pin" data-index="${index}">Pin</button>

</div>
`;

// Add the note card to the container
container.appendChild(div);

});

}


// Event listener for Add button
addBtn.addEventListener("click",()=>{

// Get note text and remove extra spaces
const text = input.value.trim();

// If input is empty, stop function
if(text==="") return;

// Add new note object into notes array
notes.push({
text:text,
pinned:false
});

// Clear textarea
input.value="";

// Save updated notes to LocalStorage
saveNotes();

// Re-render notes on screen
renderNotes();

});


// Event Delegation for Edit / Delete / Pin buttons
container.addEventListener("click",(e)=>{

// Get index of clicked note
const index = e.target.dataset.index;


// Delete Note
if(e.target.classList.contains("delete")){

notes.splice(index,1); // remove note from array

}


// Edit Note
if(e.target.classList.contains("edit")){

// Show prompt to edit text
const newText = prompt("Edit note:",notes[index].text);

if(newText!==null){
notes[index].text = newText;
}

}


// Pin / Unpin Note
if(e.target.classList.contains("pin")){

notes[index].pinned = !notes[index].pinned;

}

// Save and update UI
saveNotes();
renderNotes();

});


// Search functionality
search.addEventListener("keyup",()=>{

// Convert search text to lowercase
const filter = search.value.toLowerCase();

// Get all note cards
document.querySelectorAll(".note").forEach(note=>{

// Get note text
const text = note.querySelector(".text").textContent.toLowerCase();

// Show or hide note based on match
note.style.display = text.includes(filter) ? "block" : "none";

});

});


// Initial rendering when page loads
renderNotes();
