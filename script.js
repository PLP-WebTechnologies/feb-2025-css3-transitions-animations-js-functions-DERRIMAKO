// Get references to the input, button, and task list
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Load tasks from localStorage when the page is loaded
document.addEventListener('DOMContentLoaded', loadTasks);

// Function to add a task
addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskId = Date.now(); // Unique ID for each task based on current time
        const task = {
            id: taskId,
            text: taskText,
            completed: false
        };

        // Add the task to localStorage and display it
        saveTaskToLocalStorage(task);
        addTaskToList(task);

        taskInput.value = ''; // Clear the input field
    }
});

// Function to save a task to localStorage
function saveTaskToLocalStorage(task) {
    const tasks = getTasksFromLocalStorage();
    tasks.push(task); // Add the new task to the list
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Save the updated tasks list to localStorage
}

// Function to get tasks from localStorage
function getTasksFromLocalStorage() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : []; // If no tasks are found, return an empty array
}

// Function to load tasks from localStorage
function loadTasks() {
    const tasks = getTasksFromLocalStorage();
    tasks.forEach(task => addTaskToList(task)); // Add each task to the task list on page load
}

// Function to display a task in the task list
function addTaskToList(task) {
    const li = document.createElement('li');
    li.textContent = task.text;
    li.id = task.id;

    // Create a delete button for each task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBtn');

    // Add event listener to delete button
    deleteBtn.addEventListener('click', function() {
        removeTaskFromLocalStorage(task.id); // Remove task from localStorage
        li.remove(); // Remove task from the list
    });

    li.appendChild(deleteBtn); // Append delete button to the task
    taskList.appendChild(li); // Append the task to the list
}

// Function to remove a task from localStorage
function removeTaskFromLocalStorage(taskId) {
    const tasks = getTasksFromLocalStorage();
    const updatedTasks = tasks.filter(task => task.id !== taskId); // Filter out the task to delete
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Update the tasks in localStorage
}

// Get the button to trigger background swap
const swapButton = document.getElementById('swapButton');

// Add event listener to the swap button
swapButton.addEventListener('click', function() {
    const currentBg = document.body.style.backgroundImage;
    
    // Swap between two background images
    if (currentBg.includes('31701587')) {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/30910217/pexels-photo-30910217.jpeg')";
    } else {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/31701587/pexels-photo-31701587.jpeg')";
    }
});
