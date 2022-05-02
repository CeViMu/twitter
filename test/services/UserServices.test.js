const UserService = require('./../../app/services/UserService')

describe("Test para UserService", ()=>{
    test("Requerimiento 1: Crear un nuevo usuario", ()=>{
        const user = UserService.create(1,"CeciliaMuC","Cecilia")
        expect(user.id).toBe(1)
        expect(user.username).toBe("CeciliaMuC")
        expect(user.name).toBe("Cecilia")
        expect(user.bio).not.toBeUndefined()
    })
})