export const categoryList = [
  {
    name: "School",
    taskList: [
      {
        name: "taskName",
        checkpoint: "taskCheckpoint",
        dueDate: "taskDueDate",
        priority: "!"
      }
    ]
  },
  {
    name: "Personal",
    taskList: [
      {
        name: "taskName2",
        checkpoint: "taskCheckpoint2",
        dueDate: "taskDueDate2",
        priority: "!!"
      }
    ]
  }
];

export function addTask(categoryName,name,priority,checkpoint,dueDate){
  categoryList.forEach(item => {
    if(categoryName === item.name){
      item.taskList.push({
        name,
        checkpoint,
        dueDate,
        priority
      });
    }
  });
}