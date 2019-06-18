module.exports = (application) => {
    application.get('/', (req, res) => {
        application.app.controllers.controller_index.index(application, req, res)
    })

    application.get('/entrar', (req, res) => {
        application.app.controllers.controller_index.entrar(application, req, res)
    })
}