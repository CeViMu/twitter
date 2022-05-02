const UserService = require('./../../app/services/UserService')

describe("Test para UserService", ()=>{
    test("Requerimiento 1: Crear un nuevo usuario", ()=>{
        const user = UserService.create(1,"CeciliaMuC","Cecilia")
        expect(user.id).toBe(1)
        expect(user.username).toBe("CeciliaMuC")
        expect(user.name).toBe("Cecilia")
        expect(user.bio).not.toBeUndefined()
    })

    test("Requerimiento 2: Obtener todos datos de usuario en una lista", ()=>{
        const user =UserService.create(1,"CeciliaMuC","Cecilia")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("CeciliaMuC")
        expect(userInfoInList[2]).toBe("Cecilia")
        expect(userInfoInList[3]).toBe("Sin bio")
    })

})