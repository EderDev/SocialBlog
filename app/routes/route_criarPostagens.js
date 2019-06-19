module.exports = (application) => {
    application.get('/criar_postagem', (req, res) => {
        application.app.controllers.criar_postagem.criarPostagem(application, req, res)
    })

    application.get('/criar_postagem/nova', (req, res) => {
        application.app.controllers.criar_postagem.nova(application, req, res)
    })
}