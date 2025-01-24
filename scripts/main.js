import {blockTitlesList, taskList, addTask} from '../data/taskInfo.js';

renderPage();



function renderTaskList(tasks){
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

  document.querySelectorAll('.js-block-container').forEach(container => {
    container.innerHTML = taskListHTML
  });

  /* Insert code that adds event listiners to any buttons in each task */ 
}

function renderTaskBlocks(blockTitles,tasks){
  let taskBlockHTML = ``;

  blockTitles.forEach(title => {
    taskBlockHTML += `
      <div class="block-title">
        ${title}
      </div>

      <div class="block-container js-block-container"></div>

      <input 
        class="task-input-name js-task-input-name-${title}"
        placeholder="Task name">
      <input type="number" 
        class="task-input-priority js-task-input-priority-${title}"
        placeholder="Priority (enter 1-3)">
      <input type="date" class="task-input-checkpoint js-task-input-checkpoint-${title}">
      <input type="date" class="task-input-dueDate js-task-input-dueDate-${title}">
      <button class="task-add-button js-task-add-button-${title}">Add</button>
    `;
  });
  
  document.querySelector('.js-main-content-container').innerHTML = taskBlockHTML;

  blockTitles.forEach(title => {
    document.querySelector(`.js-task-add-button-${title}`).addEventListener("click", () => {
      const nameInput = document.querySelector(`.js-task-input-name-${title}`).value;
      const priorityInput = document.querySelector(`.js-task-input-priority-${title}`).value;
      const checkpointInput = document.querySelector(`.js-task-input-checkpoint-${title}`).value;
      const dateInput = document.querySelector(`.js-task-input-dueDate-${title}`).value;
      addTask(nameInput,priorityInput,checkpointInput,dateInput);
      renderPage();
    });
  });

  renderTaskList(tasks);
}

function renderPage(){
  renderTaskBlocks(blockTitlesList,taskList);
}