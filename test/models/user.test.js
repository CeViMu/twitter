const User = require('./../../app/models/user')

describe("Unit Test for User class", () => {
    test ("Requerimiento 1: Creación de User", () => {
        const user = new User (1,"CeciliaMuC","Cecilia","Bio")
        expect(user.id).toBe(1)
        expect(user.username).toBe("CeciliaMuC")
    })
  
    test("Requerimiento 2: Fechas en atributos de User", ()=>{
        const user = new User(1,"CeciliaMuC","Cecilia","Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdate).not.toBeUndefined()
    })
})
