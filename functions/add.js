
import fs from "fs"
import { CreateFile, AddTaskToFile } from "../fileSystem.js"

const filePath = "./tasks.json"

export default function AddTask(description){

  if(description === undefined){
    console.log("You need to provide a description")
    return
  }

  if(description.length < 2){
    console.log("You need to provide a longer description")
    return
  }

  const tasksFileExists =  fs.existsSync(filePath) 

  if(tasksFileExists){
    CreateNewTask(description)
    return
  }

  CreateNewFile(description)  
}

function CreateNewFile(description){
  CreateFile({
    id: 0, 
    description: description,
    status: "todo",
    createdAt: Date.now(),
    updatedAt: Date.now(),
  })
}

function CreateNewTask(description){
  const newTask = {
    id: 0,
    description: description,
    status: "todo",
    createdAt: Date.now(),
    updatedAt: Date.now()
  }

  AddTaskToFile(newTask)
}