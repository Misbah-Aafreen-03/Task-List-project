// Get elements from the DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement('li');
        li.textContent = taskText;
        
        // Mark task as completed
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Delete task on double-click
        li.addEventListener('dblclick', () => {
            li.remove();
        });

        // Append new task to the list
        taskList.appendChild(li);
        taskInput.value = ""; // Clear the input field
    }
}

// Event listener to add task when clicking the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Optional: Add task by pressing 'Enter' key
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
