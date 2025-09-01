import { afterEach, beforeEach, jest } from "@jest/globals";
import DeleteTask from '../delete'
import { UpdateTaskOnFile } from '../../fileSystem'
import ListTasks from "../list";

const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {})

jest.mock('../list', () => jest.fn())

jest.mock('../../fileSystem', () => ({
    UpdateTaskOnFile: jest.fn()
}))

describe('delete.js', () => {
    it('should log an error message if given no id', () => {

        DeleteTask()

        expect(consoleSpy).toHaveBeenCalledWith("Please provide an id")
    })

    it('Should log an error message if id is not a number', () => {
        const id = 'test'

        DeleteTask(id)

        expect(consoleSpy).toHaveBeenCalledWith("Please provide a valid id")
    })

    it('Should call UpdateTaskOnFile', () => {
        const id = '1'

        DeleteTask(id)

        expect(UpdateTaskOnFile).toHaveBeenCalled()
    })

    it('Should call ListTasks', () => {
        const id = '1'

        DeleteTask(id)

        expect(ListTasks).toHaveBeenCalled()
    })
})