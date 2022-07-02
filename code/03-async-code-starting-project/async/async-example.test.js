import { expect, it } from 'vitest'
import { generateToken, generateTokenPromise } from './async-example';

it('should generate a token value ', (done) => {
    const testUserEmail = 'test@test.com';

    generateToken(testUserEmail, (err, token) => {
        try {
            expect(token).toBeDefined()
            // expect(token).toBe(2)
            done()
        } catch (err) {
            done(err)
        }
        done()
    })
})


it('should generat a token value', () => {
    const testUserEmail = 'test@testcom'
    return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined()
})

// don't need return with async/await
it('should generat a token value', async () => {
    const testUserEmail = 'test@testcom'
    const token = await generateTokenPromise(testUserEmail)

    expect(token).toBeDefined()
})