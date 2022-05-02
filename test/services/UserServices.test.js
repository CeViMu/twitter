const User = require('../../app/models/user')
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

    test("Requerimiento 3: Actualizar username", ()=>{
        const user = UserService.create(1,"CeciliaMuC","Cecilia")
        UserService.updateUserUsername(user, "Vianey")
        expect(user.username).toBe("Vianey")
    })

    test("Requerimiento 4: Regresar la lista de los Usernames", ()=>{
        const user1 = UserService.create(1,"CeciliaMuC1","Cecilia")
        const user2 = UserService.create(1,"CeciliaMuC2","Cecilia")
        const user3 = UserService.create(1,"CeciliaMuC3","Cecilia")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("CeciliaMuC1")
        expect(usernames).toContain("CeciliaMuC2")
        expect(usernames).toContain("CeciliaMuC3")
    })


})