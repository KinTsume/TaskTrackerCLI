import {afterEach, expect, jest} from '@jest/globals'
import { GetTaskFromFileByStatus } from "../../fileSystem"
import ListTasks from "../list"

const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})

jest.mock('../../fileSystem', () => ({
    GetTaskFromFileByStatus: jest.fn()
}))

jest.mock('console', () => ({
    log: jest.fn()
}))

afterEach(() => {
    jest.resetAllMocks()
})

const getDoneTask = () => {
    return([{
        "id": 0,
        "description": "Testing done task",
        "status": "done",
        "createdAt": 1755376943764,
        "updatedAt": 1755376943764
    }])
}

const getTodoTask = () => {
    return([{
        "id": 0,
        "description": "Testing todo task",
        "status": "todo",
        "createdAt": 1755376943764,
        "updatedAt": 1755376943764
    }])
}

const getInprogressTask = () => {
    return([{
        "id": 0,
        "description": "Testing in progress task",
        "status": "inprogress",
        "createdAt": 1755376943764,
        "updatedAt": 1755376943764
    }])
}

describe('list.js', () => {
    it('Should log one todo task', () => {
        const status = 'todo'
        GetTaskFromFileByStatus.mockImplementation((status) => {
            switch(status){
                case 'done':
                    return getDoneTask()
                case 'todo':
                    return getTodoTask()
                case 'inprogress':
                    return getInprogressTask()
            }
        })
        
        ListTasks(status)

        expect(consoleSpy.mock.calls[2][0]).toBe('---> 0 - Testing todo task')
    })

    it('Should log one done task', () => {
        const status = 'done'
        GetTaskFromFileByStatus.mockImplementation((status) => {
            switch(status){
                case 'done':
                    return getDoneTask()
                case 'todo':
                    return getTodoTask()
                case 'inprogress':
                    return getInprogressTask()
            }
        })
        
        ListTasks(status)

        expect(consoleSpy.mock.calls[2][0]).toBe('---> 0 - Testing done task')
    })

    it('Should log one in progress task', () => {
        const status = 'inprogress'
        GetTaskFromFileByStatus.mockImplementation((status) => {
            switch(status){
                case 'done':
                    return getDoneTask()
                case 'todo':
                    return getTodoTask()
                case 'inprogress':
                    return getInprogressTask()
            }
        })
        
        ListTasks(status)

        expect(consoleSpy.mock.calls[2][0]).toBe('---> 0 - Testing in progress task')
    })

    it('Should log an error message if given no existing status', () => {
        const status = 'test'

        ListTasks(status)

        expect(consoleSpy).toHaveBeenCalledWith('\nThere is no status called test')
    })

    it('Should not log any tasks', () => {
        GetTaskFromFileByStatus.mockImplementation(() => [])

        ListTasks()

        expect(consoleSpy.mock.calls[2][0]).toBe('Todo V')
        expect(consoleSpy.mock.calls[4][0]).toBe('Done V')
        expect(consoleSpy.mock.calls[6][0]).toBe('In Progress V')
    })

    it('Should log one todo task', () => {
        GetTaskFromFileByStatus.mockImplementation((status) => {
            if(status == 'todo'){
                return ([{
                    "id": 0,
                    "description": "Testing todo task",
                    "status": "todo",
                    "createdAt": 1755376943764,
                    "updatedAt": 1755376943764
                }])
            }

            return([])
        })

        ListTasks()

        expect(consoleSpy.mock.calls[2][0]).toBe('Todo V')
        expect(consoleSpy.mock.calls[3][0]).toBe('---> 0 - Testing todo task')
    })

    it('Should log one done task', () => {
        GetTaskFromFileByStatus.mockImplementation((status) => {
            if(status == 'done'){
                return ([{
                    "id": 0,
                    "description": "Testing done task",
                    "status": "done",
                    "createdAt": 1755376943764,
                    "updatedAt": 1755376943764
                }])
            }

            return([])
        })


        ListTasks()

        expect(consoleSpy.mock.calls[4][0]).toBe('Done V')
        expect(consoleSpy.mock.calls[5][0]).toBe('---> 0 - Testing done task')
    })

    it('Should log one inprogress task', () => {
        GetTaskFromFileByStatus.mockImplementation((status) => {
            if(status == 'inprogress'){
                return ([{
                    "id": 0,
                    "description": "Testing in progress task",
                    "status": "inprogress",
                    "createdAt": 1755376943764,
                    "updatedAt": 1755376943764
                }])
            }

            return([])
        })


        ListTasks()

        expect(consoleSpy.mock.calls[6][0]).toBe('In Progress V')
        expect(consoleSpy.mock.calls[7][0]).toBe('---> 0 - Testing in progress task')
    })
})