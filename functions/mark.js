import { UpdateFile, GetTaskFromFileById } from "./fileSystem.js"

export default function MarkTask(id, status){
  if(id === undefined) {
    console.log("Please provide an id")
    return
  }

  if(status === undefined){
    console.log("Please provide a status to mark the task")
    return
  }

  const taskId = parseInt(id)

  if(isNaN(taskId)){
    console.log("Please provide a valid id")
    return
  }

  const isStatusNotValid = status != "done" && status != "todo" && status != "inprogress"
  const isShortStatusNotValid = status != "d" && status != "u" && status != "p"

  if(isStatusNotValid && isShortStatusNotValid){
    console.log("Please provide a valid status")
    return
  }

  switch(status){
      case "d":
        status = "done"
        break
      case "u":
        status = "todo"
        break
      case "p":
        status = "inprogress"
        break
      default:
        break
  }

  const task = GetTaskFromFileById(taskId)

  task.status = status

  UpdateFile(taskId, task)
  
}