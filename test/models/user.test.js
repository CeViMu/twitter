const User = require('./../../app/models/user')

describe("Unit Test for User class", () => {
    test ("Create an User object", () => {
        const user = new User (1,"CeciliaMuC","Cecilia","Bio")
        expect(user.id).toBe(1)
        expect(user.username).toBe("CeciliaMuC")
    })
  
})