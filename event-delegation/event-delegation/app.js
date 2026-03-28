// Select DOM elements
const todoList = document.getElementById('todoList'); // ul element
const addBtn = document.getElementById('addBtn'); // Add button
const todoInput = document.getElementById('todoInput'); // Input field

// Add new todo item
addBtn.addEventListener('click', () => { 
    const text = todoInput.value.trim(); // Get input value
    if(text) { // If input is not empty
        const li = document.createElement('li'); // Create new li
        li.innerHTML = `${text} <span class="delete-btn">✖</span>`; // Add text and delete button
        todoList.appendChild(li); // Append li to ul
        todoInput.value = ''; // Clear input
    }
});

// Event delegation: handle clicks on list items
todoList.addEventListener('click', (event) => {
    const target = event.target; // Get clicked element

    // Delete item if delete button is clicked
    if(target.classList.contains('delete-btn')) { 
        const li = target.parentElement; // Get parent li
        li.remove(); // Remove li
    } 
    // Mark item as done if the li itself is clicked
    else if(target.tagName === 'LI') { 
        target.classList.toggle('done'); // Toggle done class
    }
});
