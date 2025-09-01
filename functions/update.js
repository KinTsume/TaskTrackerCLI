import { UpdateTaskOnFile, GetTaskFromFileById } from "../fileSystem.js";

export default function UpdateTask(id, newDescription) {
  
  if(id == undefined){
    console.log("Please provide an id")
    return
  }
  
  const taskId = parseInt(id);

  if (isNaN(taskId)) {
    console.log("Please provide a valid id");
    return;
  }

  if (!newDescription) {
    console.log("Please provide the new description");
    return;
  }

  if (newDescription.length < 2) {
    console.log("Please provide a longer description");
  }

  const task = GetTaskFromFileById(taskId);

  if (!task) {
    console.log("Task not found");
    return;
  }

  UpdateTaskOnFile(taskId, {
    ...task,
    description: newDescription,
    updatedAt: Date.now(),
  });
}
