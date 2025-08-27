import fs from "fs";

const filePath = "./tasks.json";

export function CreateFile(data) {
  saveFileData([data])
}

export function GetTaskFromFileById(id){
  const task = getFileData().find(task => task.id === id)
  return task
}

export function GetTaskFromFileByStatus(status){
  const tasks = getFileData().filter(task => task.status === status)

  return tasks
}

export function AddTaskToFile(data) {
  const tasks = getFileData()

  data.id = tasks.length

  tasks.push(data);

  const newData = tasks;

  saveFileData(newData)
}

export function UpdateTaskOnFile(id, data){
  const tasks = getFileData()

  if(data){
    tasks[id] = data
    saveFileData(tasks)
    return
  }

  tasks.splice(id, 1)

  let index = 0
  
  tasks.forEach(task => {
    task.id = index
    index++
  })
  
  saveFileData(tasks)
}

function getFileData(){
  return JSON.parse(fs.readFileSync(filePath))
}

function saveFileData(data){
  fs.writeFileSync(filePath, JSON.stringify(data, null, "\t"))
}
