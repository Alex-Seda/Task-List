import {blockTitlesList, taskList} from '../data/taskInfo.js';

renderTaskBlocks(blockTitlesList,taskList);

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
    `;
  });
  
  document.querySelector('.js-main-content-container').innerHTML = taskBlockHTML;

  renderTaskList(tasks);
}