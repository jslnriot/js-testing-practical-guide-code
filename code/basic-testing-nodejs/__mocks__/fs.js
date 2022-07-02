import { vi } from 'vitest'

export const promises = {
    writeFile: vi.fn((path, data) => {
        console.log('test test test')
        return new Promise((resolve, reject) => {
            resolve(); // resolve to nothing like the original write file
        })
    })
}