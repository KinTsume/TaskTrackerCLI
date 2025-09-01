import { CreateFile, AddTaskToFile } from "../../fileSystem.js";
import fs, { existsSync } from "fs";
import AddTask from "../add.js";

const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {})

jest.mock("../../fileSystem.js", () => ({
  CreateFile: jest.fn(),
  AddTaskToFile: jest.fn()
}))

jest.mock("fs", () => ({
  existsSync: jest.fn()
}))

describe("add.js", () => {
  it("Should log an error message if given no description", () => {
    AddTask()

    expect(consoleSpy).toHaveBeenCalledWith("You need to provide a description")
  })

  it("Should log an error message if description is too short", () => {
    AddTask("a")

    expect(consoleSpy).toHaveBeenCalledWith("You need to provide a longer description")
  })

  it("Should create a new file if it does not exist", () => {
    fs.existsSync.mockImplementation(() => false)
    
    AddTask("test")

    expect(CreateFile).toHaveBeenCalled()    
  })

  it("Should add a task to the file if it exists", () => {
    fs.existsSync.mockImplementation(() => true)

    AddTask("test")

    expect(AddTaskToFile).toHaveBeenCalled()
  })
})