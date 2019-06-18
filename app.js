let app = require('./config/server')

const PORT = 80

app.listen(PORT, () => {
    console.log('Servidor Online')
})