
import { GetTaskFromFileByStatus } from "./fileSystem.js"

export default function ListTasks(status){
  
  if(status){

    if(status == "done" || status == "d"){
      listDone()
      return
    }

    if(status == "todo" || status == "u"){
      listTodo()
      return
    }

    if(status == "inprogress" || status == "p"){
      listInProgress()
      return
    }
    
    statusNotFound(status)

    return
  }
  
  listAll()
}

function listAll(){
  const todoTasks = GetTaskFromFileByStatus("todo")

  const doneTasks = GetTaskFromFileByStatus("done")

  const inProgressTasks = GetTaskFromFileByStatus("inprogress")
  
  console.log("\nListing first 10 tasks for each status type")
  console.log("------------------------------------------\n")
  
  console.log("Todo V")
  if(todoTasks.length > 0){
    for(let i = 0; i < 10; i++){
      if(i >= todoTasks.length) break;
      console.log(`---> ${todoTasks[i].id} - ${todoTasks[i].description}`)
    }
  }
  console.log("\n")

  console.log("Done V")
  if(doneTasks.length > 0){
    for(let i = 0; i < 10; i++){
      if(i >= doneTasks.length) break;
      console.log(`---> ${doneTasks[i].id} - ${doneTasks[i].description}`)
    }
  }
  console.log("\n")
  
  console.log("In Progress V")
  if(inProgressTasks.length > 0){
    for(let i = 0; i < 10; i++){
      if(i >= inProgressTasks.length) break;
      console.log(`---> ${inProgressTasks[i].id} - ${inProgressTasks[i].description}`)
    }
  }
  console.log("\n")
  
}

function listDone(){

  const tasks = GetTaskFromFileByStatus("done")
  
  console.log("\nListing done tasks")
  console.log("-------------------\n")
  
  for(const task of tasks){
    console.log(`---> ${task.id} - ${task.description}`)
  }
  
}

function listTodo(){
  const tasks = GetTaskFromFileByStatus("todo")

  console.log("\nListing todo tasks")
  console.log("-------------------\n")

  for(const task of tasks){
    console.log(`---> ${task.id} - ${task.description}`)
  }
}

function listInProgress(){
  const tasks = GetTaskFromFileByStatus("inprogress")

  console.log("\nListing in progress tasks")
  console.log("-------------------\n")

  for(const task of tasks){
    console.log(`---> ${task.id} - ${task.description}`)
  }
}

function statusNotFound(status){
  console.log(`\nThere is no status called ${status}`)
  console.log(`Possible commands are: done (d) | todo (u) | inprogress (p)\n`)
}