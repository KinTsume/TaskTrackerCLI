import { afterEach, describe, expect, it, jest, test } from "@jest/globals";
import fs from "fs";
import { CreateFile, GetTaskFromFileById, GetTaskFromFileByStatus, AddTaskToFile, UpdateTaskOnFile } from "../fileSystem.js";

const file = (
`[
  {
    "id": 0,
    "description": "Test the project",
    "status": "todo",
    "createdAt": 1755376943764,
    "updatedAt": 1755376943764
  },
  {
    "id": 1,
    "description": "Create the project tests",
    "status": "inprogress",
    "createdAt": 1755376943764,
    "updatedAt": 1755376943764
  },
  {
    "id": 2,
    "description": "Finish the app",
    "status": "done",
    "createdAt": 1755376943764,
    "updatedAt": 1755376943764
  },
  {
    "id": 3,
    "description": "Test status",
    "status": "done",
    "createdAt": 1755376943764,
    "updatedAt": 1755376943764
  }
]`)

let fileMock = file


jest.mock("fs", () => ({
  readFileSync: jest.fn(),
  writeFileSync: jest.fn(),
}))

fs.writeFileSync.mockImplementation((path, stringifiedData) => {
  fileMock = stringifiedData
})

fs.readFileSync.mockImplementation((path) => {
  return fileMock
})

afterEach(() => fileMock = file)

describe("fileSystem", () => {
  it("Should create new file", () => {
    const data = { id: 1, description: "test" }
    fileMock = ''

    CreateFile(data)

    expect(fileMock).toBe(JSON.stringify([data], null, "\t"))    
  })

  it("Should get a task by id", () => {
    const id = 2
    const task = {
        id: 2,
        description: 'Finish the app',
        status: 'done',
        createdAt: 1755376943764,
        updatedAt: 1755376943764
      }

    const result = GetTaskFromFileById(id)

    expect(result).toStrictEqual(task)
  })

  it("Should get tasks by status", () => {
    const status = 'done'
    const tasks = [{
      id: 2,
      description: 'Finish the app',
      status: 'done',
      createdAt: 1755376943764,
      updatedAt: 1755376943764
    }, 
    {
      id: 3,
      description: "Test status",
      status: "done",
      createdAt: 1755376943764,
      updatedAt: 1755376943764
    }]

    const result = GetTaskFromFileByStatus(status)

    expect(result).toStrictEqual(tasks)    
  })

  it("Should add a task to the file", () => {
    const task = {
      id: 4,
      description: "Adding task to file test",
      status: "inprogress",
      createdAt: 1755376943764,
      updatedAt: 1755376943764
    }
    const data = {
      id: 0,
      description: "Adding task to file test",
      status: "inprogress",
      createdAt: 1755376943764,
      updatedAt: 1755376943764
    }

    AddTaskToFile(data)

    expect(fileMock).toContain('"description": "Adding task to file test"')
  })

  it("Should update a task on the file", () => {
    const id = 4
    const data = {
        id: 0,
        description: "Testing update task function",
        status: "inprogress",
        createdAt: 1755376943764,
        updatedAt: 1755376943764
      }

    UpdateTaskOnFile(id, data)

    expect(fileMock).not.toContain('"description": "Adding task to file test"')
    expect(fileMock).toContain('"description": "Testing update task function"')
  })

  it("Should remove a task from the file", () => {
    const id = 4
    const data = {
        id: 0,
        description: "Testing update task function",
        status: "inprogress",
        createdAt: 1755376943764,
        updatedAt: 1755376943764
      }

    AddTaskToFile(data)
    UpdateTaskOnFile(id)

    expect(fileMock).not.toContain('"description": "Testing update task function"')
  })
})