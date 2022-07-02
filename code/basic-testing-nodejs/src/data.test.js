import { describe, it, vi, expect } from 'vitest'
import { generateReportData } from './data'

describe('generateReportData()', () => {
    it('should execute logFn if provided', () => {
        const logger = vi.fn() // fn creates an empty function that keeps track of any function executions to that function

        generateReportData(logger)
        expect(logger).toBeCalled()
    })
})