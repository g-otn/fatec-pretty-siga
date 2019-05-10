var siga = require('./buscador_api.js')
var express = require('express')
var app = express()

app.use(express.json({limit: '300b'}))
app.use('/', express.static('public'))

// Handles Ajax calls related to login
app.post('/login', (req, res) => {
    console.log('POST recebido em /login')

    // Terceira validação de dados
    if (!req.body.usuario || !req.body.senha) {
        res.send({autenticado: false, erro: 'Usuário e senha não preenchidos'})
        return
    }

    siga.login(req.body.usuario, req.body.senha).then(resposta => {
        res.send(resposta)
    })
    
})

app.listen(80, () => { 
    console.log('Express escutando na porta 80')
})