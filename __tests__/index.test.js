import { afterEach, beforeEach, expect, it, jest } from "@jest/globals";
import { program } from "../index.js";
import AddTask from "../functions/add";
import DeleteTask from "../functions/delete";
import ListTasks from "../functions/list";
import MarkTask from "../functions/mark";
import UpdateTask from "../functions/update";

const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {})

jest.mock("../functions/add", () => jest.fn())

jest.mock("../functions/delete", () => jest.fn())

jest.mock("../functions/list", () => jest.fn())

jest.mock("../functions/mark", () => jest.fn())

jest.mock("../functions/update", () => jest.fn())

describe("index", () => {
  it("Executes the add function with the default command", () => {
    const args = ["tasktracker", "index.js", "add", "test"]

    program(args)

    expect(AddTask).toHaveBeenCalledWith("test")
  })

  it("Executes the add function with the short command", () => {
    const args = ["tasktracker", "index.js", "a", "test"]

    program(args)

    expect(AddTask).toHaveBeenCalledWith("test")
  })

  it("Executes the delete function with the default command", () => {
    const args = ["tasktracker", "index.js", "delete", "0"]

    program(args)

    expect(DeleteTask).toHaveBeenCalledWith("0")
  })

  it("Executes the delete function with the short command", () => {
    const args = ["tasktracker", "index.js", "d", "0"]

    program(args)

    expect(DeleteTask).toHaveBeenCalledWith("0")
  })

  it("Executes the list function with the default command", () => {
    const args = ["tasktracker", "index.js", "list"]

    program(args)

    expect(ListTasks).toHaveBeenCalledWith(undefined)
  })

  it("Executes the list function with the default command", () => {
    const args = ["tasktracker", "index.js", "l"]

    program(args)

    expect(ListTasks).toHaveBeenCalledWith(undefined)
  })

  it("Executes the list function with a status", () => {
    const args = ["tasktracker", "index.js", "list", "done"]

    program(args)

    expect(ListTasks).toHaveBeenCalledWith("done")
  })

  it("Executes the mark function with the default command", () => {
    const args = ["tasktracker", "index.js", "mark", "0", "done"]

    program(args)
    
    expect(MarkTask).toHaveBeenCalledWith("0", "done")
  })

  it("Executes the mark function with the short command", () => {
    const args = ["tasktracker", "index.js", "m", "0", "done"]

    program(args)

    expect(MarkTask).toHaveBeenCalledWith("0", "done")
  })

  it("Executes the update function with the default command", () => {
    const args = ["tasktracker", "index.js", "update", "0", "test"]

    program(args)

    expect(UpdateTask).toHaveBeenCalledWith("0", "test")
  })

  it("Executes the update function with the short command", () => {
    const args = ["tasktracker", "index.js", "u", "0", "test"]

    program(args)

    expect(UpdateTask).toHaveBeenCalledWith("0", "test")
  })
  
})