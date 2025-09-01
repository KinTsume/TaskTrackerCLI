import UpdateTask from '../update'
import { UpdateTaskOnFile, GetTaskFromFileById } from '../../fileSystem'

const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
const dateSpy = jest.spyOn(Date, 'now').mockImplementation(() => 10)

jest.mock('../../fileSystem', () => ({
    GetTaskFromFileById: jest.fn(),
    UpdateTaskOnFile: jest.fn()
}))

describe('update.js', () => {
    it('Should log an error message if given no id', () => {
        UpdateTask()

        expect(consoleSpy).toHaveBeenCalledWith('Please provide an id')
    })

    it('Should log an error message if given id is not a number', () => {
        const id = 'test'

        UpdateTask(id)

        expect(consoleSpy).toHaveBeenCalledWith('Please provide a valid id')
    })

    it('Should log an error message if given no description', () => {
        const id = '1'

        UpdateTask(id)

        expect(consoleSpy).toHaveBeenCalledWith('Please provide the new description')
    })

    it('Should log an error message if given a short description', () => {
        const id = '1'
        const description = 'a'

        UpdateTask(id, description)

        expect(consoleSpy).toHaveBeenCalledWith('Please provide a longer description')
    })

    it('Should log an error message if task id is not found', () => {
        const id = '1'
        const description = 'testing'
        GetTaskFromFileById.mockImplementation(() => undefined)

        UpdateTask(id, description)

        expect(consoleSpy).toHaveBeenCalledWith('Task not found')
    })

    it('Calls UpdateTaskOnFile with new description and Date', () => {
        const id = '1'
        const description = 'testing'
        const updatedTask = {
            "id": 1,
            "description": "testing",
            "status": "inprogress",
            "createdAt": 0,
            "updatedAt": 10 
        }
        GetTaskFromFileById.mockImplementation(() => ({
            "id": 1,
            "description": "Test the project",
            "status": "inprogress",
            "createdAt": 0,
            "updatedAt": 0 
        }))

        UpdateTask(id, description)
        
        expect(UpdateTaskOnFile).toHaveBeenCalledWith(1, updatedTask)
    })
})