import { UpdateTaskOnFile, GetTaskFromFileById } from "../../fileSystem"
import MarkTask from "../mark"

const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})

jest.mock('../../fileSystem', () => ({
    UpdateTaskOnFile: jest.fn(),
    GetTaskFromFileById: jest.fn()
}))

describe('mark.js', () => {
    it('Should log an error message if given no id', () => {
        MarkTask()

        expect(consoleSpy).toHaveBeenCalledWith('Please provide an id')
    })

    it('Should log an error message if given no status', () => {
        const id = '1'

        MarkTask(id)

        expect(consoleSpy).toHaveBeenCalledWith('Please provide a status to mark the task')
    })

    it('Should log an error message if given id is not a number', () => {
        const id = 'test'
        const status = 'done'

        MarkTask(id, status)

        expect(consoleSpy).toHaveBeenCalledWith('Please provide a valid id')
    })

    it('Should log an error message if given status do not exist', () => {
        const id = '1'
        const status = 'test'

        MarkTask(id, status)

        expect(consoleSpy).toHaveBeenCalledWith('Please provide a valid status')
    })

    it('Should call UpdateTaskOnFile with a task object with updated done status', () => {
        const id = '1'
        const status = 'done'
        const updatedTask = {
            "id": 1,
            "description": "Test the project",
            "status": "done",
            "createdAt": 0,
            "updatedAt": 0 
        }
        GetTaskFromFileById.mockImplementation(() => ({
            "id": 1,
            "description": "Test the project",
            "status": "testStatus",
            "createdAt": 0,
            "updatedAt": 0
        }))

        MarkTask(id, status)

        expect(UpdateTaskOnFile).toHaveBeenCalledWith(1, updatedTask)
    })

    it('Should call UpdateTaskOnFile with a task object with updated todo status', () => {
        const id = '1'
        const status = 'todo'
        const updatedTask = {
            "id": 1,
            "description": "Test the project",
            "status": "todo",
            "createdAt": 0,
            "updatedAt": 0 
        }
        GetTaskFromFileById.mockImplementation(() => ({
            "id": 1,
            "description": "Test the project",
            "status": "testStatus",
            "createdAt": 0,
            "updatedAt": 0
        }))

        MarkTask(id, status)

        expect(UpdateTaskOnFile).toHaveBeenCalledWith(1, updatedTask)
    })

    it('Should call UpdateTaskOnFile with a task object with updated inprogress status', () => {
        const id = '1'
        const status = 'inprogress'
        const updatedTask = {
            "id": 1,
            "description": "Test the project",
            "status": "inprogress",
            "createdAt": 0,
            "updatedAt": 0 
        }
        GetTaskFromFileById.mockImplementation(() => ({
            "id": 1,
            "description": "Test the project",
            "status": "testStatus",
            "createdAt": 0,
            "updatedAt": 0
        }))

        MarkTask(id, status)

        expect(UpdateTaskOnFile).toHaveBeenCalledWith(1, updatedTask)
    })

    it('Should call UpdateTaskOnFile if given a done status with short command', () => {
        const id = '1'
        const status = 'd'
        const updatedTask = {
            "id": 1,
            "description": "Test the project",
            "status": "done",
            "createdAt": 0,
            "updatedAt": 0 
        }
        GetTaskFromFileById.mockImplementation(() => ({
            "id": 1,
            "description": "Test the project",
            "status": "testStatus",
            "createdAt": 0,
            "updatedAt": 0
        }))

        MarkTask(id, status)

        expect(UpdateTaskOnFile).toHaveBeenCalledWith(1, updatedTask)
    })

    it('Should call UpdateTaskOnFile if given todo status with short command', () => {
        const id = '1'
        const status = 'u'
        const updatedTask = {
            "id": 1,
            "description": "Test the project",
            "status": "todo",
            "createdAt": 0,
            "updatedAt": 0 
        }
        GetTaskFromFileById.mockImplementation(() => ({
            "id": 1,
            "description": "Test the project",
            "status": "testStatus",
            "createdAt": 0,
            "updatedAt": 0
        }))

        MarkTask(id, status)

        expect(UpdateTaskOnFile).toHaveBeenCalledWith(1, updatedTask)
    })

    it('Should call UpdateTaskOnFile if given inprogress status with short command', () => {
        const id = '1'
        const status = 'p'
        const updatedTask = {
            "id": 1,
            "description": "Test the project",
            "status": "inprogress",
            "createdAt": 0,
            "updatedAt": 0 
        }
        GetTaskFromFileById.mockImplementation(() => ({
            "id": 1,
            "description": "Test the project",
            "status": "testStatus",
            "createdAt": 0,
            "updatedAt": 0
        }))

        MarkTask(id, status)

        expect(UpdateTaskOnFile).toHaveBeenCalledWith(1, updatedTask)
    })
})