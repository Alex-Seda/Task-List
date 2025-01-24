import {categoryList, addTask} from '../data/taskInfo.js';

renderPage();

/* Prevent users from entering the same category name twice */

function renderTaskList(name,tasks){
  let taskListHTML = ``;

  tasks.forEach((task) => {
    taskListHTML += `
      <div class="task-block js-task-block">
        <div class="task-priority">${task.priority}</div>
        <div class="task-name">${task.name}</div>
        <div class="task-checkpoint">${task.checkpoint}</div>
        <div class="task-due-date">${task.dueDate}</div>
      </div>
    `;
  });

  document.querySelectorAll(`.js-block-container-${name}`).forEach(container => {
    container.innerHTML = taskListHTML
  });

  /* Insert code that adds event listiners to any buttons in each task */ 
}

function renderCategories(categories){
  let categoryHTML = ``;

  categories.forEach(category => {
    categoryHTML += `
      <div class="block-title">
        ${category.name}
      </div>

      <div class="block-container js-block-container-${category.name}"></div>

      <input 
        class="task-input-name js-task-input-name-${category.name}"
        placeholder="Task name">
      <input type="number" 
        class="task-input-priority js-task-input-priority-${category.name}"
        placeholder="Priority (enter 1-3)">
      <input type="date" class="task-input-checkpoint js-task-input-checkpoint-${category.name}">
      <input type="date" class="task-input-dueDate js-task-input-dueDate-${category.name}">
      <button class="task-add-button js-task-add-button-${category.name}">Add</button>
    `;
  });
  
  document.querySelector('.js-main-content-container').innerHTML = categoryHTML;

  
  categories.forEach(category => {

    /* Add listeners for each add button for each category */
    document.querySelector(`.js-task-add-button-${category.name}`).addEventListener("click", () => {
      const nameInput = document.querySelector(`.js-task-input-name-${category.name}`).value;
      const priorityInput = document.querySelector(`.js-task-input-priority-${category.name}`).value;
      const checkpointInput = document.querySelector(`.js-task-input-checkpoint-${category.name}`).value;
      const dateInput = document.querySelector(`.js-task-input-dueDate-${category.name}`).value;
      addTask(category.name,nameInput,priorityInput,checkpointInput,dateInput);
      renderPage();
    });

    /* Populate the taskList inside of each category */
    renderTaskList(category.name, category.taskList);
  });
}

function renderPage(){
  renderCategories(categoryList);
}