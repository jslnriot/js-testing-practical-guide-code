import {describe, it, expect} from 'vitest'
import { transformToNumber, cleanNumbers } from './numbers'


describe('transformToNumber()', () => {
    it('should transform string string to to a number', () => {
        const number = "2"

        const result = transformToNumber(number)
        expect(result).toBeTypeOf('number')
    })

    it('should transform string to to a number result', () => {
        const number = "2"

        const result = transformToNumber(number)
        expect(result).toBe(2)
    })

    it('should throw an error if nan', () => {
        const number = "invalud"
        const input2 = {}
        const result = transformToNumber(number)
        const result2 = transformToNumber(input2)

        expect(result).toBeNaN()
    })

    it('should throw an error if empty', () => {
        const number = ""

        const result = transformToNumber(number)

        expect(result).toThrow
    })

})



describe('cleanNumbers()', () => {
    it('should return an array of number values if an array of string number values is provided', () => {
        const numberValues = ['1', '2']

        const cleanedNumbers = cleanNumbers(numberValues)

        // expect(cleanedNumbers[0]).toBeTypeOf('number')
        expect(cleanedNumbers).toEqual([1,2])
    })

    it('should throw an error if an array of at least one empty string is provided', () => {
        const numberValues = ['', '2']
        const cleanFn = () => cleanNumbers(numberValues)
        expect(cleanFn).toThrow()
    })
})