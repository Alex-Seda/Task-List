export const taskList = [
  {
    name: "taskName",
    checkpoint: "taskCheckpoint",
    dueDate: "taskDueDate",
    priority: "!"
  },
  {
    name: "taskName2",
    checkpoint: "taskCheckpoint2",
    dueDate: "taskDueDate2",
    priority: "!!"
  }
];

export const categoryList = [
  {
    name: "School"
  },
  {
    name: "Personal"
  }
];

export function addTask(name,priority,checkpoint,dueDate){
  taskList.push({
    name,
    checkpoint,
    dueDate,
    priority
  });
}