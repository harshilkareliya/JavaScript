let tasks = [];

function addTask() {
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskPriority = document.getElementById('taskPriority').value;

    const newTask = {
        name: taskName,
        description: taskDescription,
        priority: taskPriority
    };

    tasks.push(newTask);
    displayTasks();
    clearForm();
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${task.name}</strong> - ${task.description} (Priority: ${task.priority})`;
        taskList.appendChild(li);
    });
}

function clearForm() {
    document.getElementById('taskName').value = '';
    document.getElementById('taskDescription').value = '';
    document.getElementById('taskPriority').value = 'high';
}

function filterTasks() {
    const priorityFilter = document.getElementById('priorityFilter').value;

    if (priorityFilter === 'all') {
        displayTasks();
    } else {
        const filteredTasks = tasks.filter(task => task.priority === priorityFilter);
        displayFilteredTasks(filteredTasks);
    }
}

function displayFilteredTasks(filteredTasks) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${task.name}</strong> - ${task.description} (Priority: ${task.priority})`;
        taskList.appendChild(li);
    });
}
