#!/usr/bin/env node

import ListTasks from "./functions/list.js"
import AddTask from "./functions/add.js"
import UpdateTask from "./functions/update.js"
import DeleteTask from "./functions/delete.js"
import MarkTask from "./functions/mark.js"

export function program(args)
{
  console.log("Task Tracker")
  
  const userArguments = args.slice(2)

  const commandArgument = userArguments[0]

  const additionalArguments = userArguments.slice(1)

  if(commandArgument == "add" || commandArgument == "a"){
    const description = additionalArguments[0]
    
    AddTask(description)
    return
  }

  if(commandArgument == "delete" || commandArgument == "d"){
    const id = additionalArguments[0]

    DeleteTask(id)
    return
  }

  if(commandArgument == "list" || commandArgument == "l"){
    const status = additionalArguments[0]

    ListTasks(status)
    return
  }

  if(commandArgument == "mark" || commandArgument == "m"){
    const id = additionalArguments[0]
    const status = additionalArguments[1]

    MarkTask(id, status)
    return
  }

  if(commandArgument == "update" || commandArgument == "u"){
    const id = additionalArguments[0]
    const description = additionalArguments[1]
    
    UpdateTask(id, description)
    return
  }

  console.log("Please provide a valid command")  
}

program(process.argv);