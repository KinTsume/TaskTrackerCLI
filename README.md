# TaskTrackerCLI

This app is a project from roadmap.sh: https://roadmap.sh/projects/task-tracker

## CLI commands

- `tasktracker` -> App command
  - `add` or `a` -> Subcommand for adding a task
    - 1º argument -> Task description
  - `update` or `u` -> Update a task description
    - 1º argument -> Id of the task to be updated
    - 2º argument -> New description to be set on the task
  - `delete` or `d` -> Delete a task
    - 1º argument -> Id of the task to be deleted
  - `list` or `l` -> List the tasks
    - no argument -> Lists all the tasks
    - 1 argument -> Status of the tasks to be listed (see `mark` command for further info)
  - `mark` or `m` -> Mark a task with the given status
    - 1º argument -> Id of the task to be updated
    - 2º argument -> New status to be set on the task (`done` or `d`, `todo` or `u`, `inprogress` or `p`)

## Modules

It's composed of the following modules:

- index.js
  
  The main module. It's responsible for the start of the program and the correct routing for each of the functions module based on the user input.
  
- fileSystem.js
  
  Module that deal with the operations on the recorded tasks file.
  It has the following public operations:
  - CreateFile(`data`): Create a file with `data`
    
  - GetTaskFromFileById(`id`): Get a task from the file using its `id`

  - GetTaskFromFileByStatus(`status`): Get tasks from the file using the matching `status`

  - AddTaskToFile(`data`): Append new `data` to the file
    
  - UpdateTaskOnFile(`id`, `data`): Update a task from the file matching the `id` using the `data`
    
- functions folder
  - add.js
    - AddTask(`description`)

  - delete.js
    - DeleteTask(`id`)
      
  - list.js
    - ListTasks(`status`)
      
  - marks.js
    - MarkTask(`id`, `status`)
      
  - update.js
    - UpdateTask(`id`, `newDescription`)