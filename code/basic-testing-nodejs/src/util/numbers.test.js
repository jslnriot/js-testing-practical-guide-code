import {it, expect} from 'vitest'
import { transformToNumber } from './numbers'

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