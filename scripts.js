document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
  });
  
  function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const taskList = document.getElementById('taskList');
      const taskItem = document.createElement('li');
      taskItem.className = 'task';
      taskItem.innerHTML = `
        <input type="checkbox" onclick="completeTask(this)">
        <span>${taskText}</span>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
        <button onclick="toggleImportant(this)">Highlight</button>
      `;
      taskList.insertBefore(taskItem, taskList.firstChild);
  
      saveTasks();
      taskInput.value = '';
    }
  }
  
  function deleteTask(button) {
    const taskItem = button.parentNode;
    const taskList = taskItem.parentNode;
    taskList.removeChild(taskItem);
  
    saveTasks();
  }
  
  function toggleImportant(button) {
    const taskItem = button.parentNode;
    taskItem.classList.toggle('important');
  
    saveTasks();
  }
  
  function completeTask(checkbox) {
    const taskItem = checkbox.parentNode;
    taskItem.classList.toggle('completed');
  
    saveTasks();
  }
  
  function editTask(button) {
    const taskItem = button.parentNode;
    const taskText = taskItem.querySelector('span');
    const newTaskText = prompt('Edit task:', taskText.innerText);
  
    if (newTaskText !== null) {
      taskText.innerText = newTaskText;
      saveTasks();
    }
  }
  
  function saveTasks() {
    const taskList = document.getElementById('taskList').innerHTML;
    localStorage.setItem('tasks', taskList);
  }
  
  function loadTasks() {
    const taskList = document.getElementById('taskList');
    const savedTasks = localStorage.getItem('tasks');
  
    if (savedTasks) {
      taskList.innerHTML = savedTasks;
    }
  }
  
