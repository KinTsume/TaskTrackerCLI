
import { UpdateTaskOnFile } from "../fileSystem.js"
import ListTasks from "./list.js"

export default function DeleteTask(id){

  if(id === undefined){
    console.log("Please provide an id")
    return
  }
  
  const taskId = parseInt(id)

  if(isNaN(taskId)){
    console.log("Please provide a valid id")
    return
  }

  UpdateTaskOnFile(taskId)  
  ListTasks()
}