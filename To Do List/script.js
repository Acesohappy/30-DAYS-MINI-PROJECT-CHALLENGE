// Get DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

  // Create a new list item
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;

  // Add the new task to the list
    taskList.appendChild(li);

  // Clear the input field
    taskInput.value = '';

  // Add event listeners for edit and delete buttons
    const editBtn = li.querySelector('.edit-btn');
    const deleteBtn = li.querySelector('.delete-btn');

    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    editBtn.addEventListener('click', () => {
        const newText = prompt('Edit your task:', taskText);
        if (newText !== null && newText.trim() !== '') {
        li.querySelector('span').textContent = newText.trim();
        }
    });
}

// Event listener for the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Event listener for pressing "Enter" in the input field
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});