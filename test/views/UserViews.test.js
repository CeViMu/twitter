const UserView = require('./../../app/views/UserView')

describe("Pruebas para UserViews", ()=>{
    test("Requerimiento 1: Regresar un objeto de error con valor payload no existe", ()=>{
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    })

    test("Requerimiento 2: Regresar un error cuando se intenta crear un nuevo usuario con un payload con propiedades invalidas", ()=>{
        const payload = {username: null, name:12, id: "id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/Error, las propiedades del payload necesitan tener un valor válido/)
    })

    test("Requerimiento 3: Regresar un error cuando se intenta crear un nuevo usuario con propiedades faltantes", ()=>{
        const payload = {username: "Username"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/Error, las propiedades del payload necesitan tener un valor válido/)
    })

    test("Requerimiento 4: Crear un usuario dado un payload válido", ()=>{
        const payload = {id: 1, username: "username", name: "name"}
        const result = UserView.createUser(payload)
        expect(result.name).toBe("name")
        expect(result.username).toBe("username")
        expect(result.id).toBe(1)
    })

})