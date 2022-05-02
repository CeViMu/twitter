const UserView = require('./../../app/views/UserView')

describe("Pruebas para UserViews", ()=>{
    test("Requerimiento 1: Regresar un objeto de error con valor payload no existe", ()=>{
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    })

})