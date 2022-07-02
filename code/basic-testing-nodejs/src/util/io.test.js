import { it, expect, vi } from 'vitest'
import { promises as fs } from 'fs'
import writeData from './io'

vi.mock('fs') // mock so we do not write data to data file
vi.mock('path', () => {
    return {
        default: {
            join: (...args) => {
                // return the last element which is the filename
                return args[args.length -1]
            }
        }
    }
}) // replace the join method on path.join

it('should execute the writeFile method', () => {
    const testData = 'Test 1'
    const testFilename = 'test.txt'

    writeData(testData, testFilename)
    // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
    // expect(fs.writeFile).toBeCalled()
    expect(fs.writeFile).toBeCalledWith(testFilename, testData)
})

it('should return a promise that resolves to no value if called correctly', () => {
    const testData = 'Test 1'
    const testFilename = 'test.txt'

    writeData(testData, testFilename)
    return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
    // expect(fs.writeFile).toBeCalled()
    // expect(fs.writeFile).toBeCalledWith(testFilename, testData)
})