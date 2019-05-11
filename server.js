var siga = require('./siga.js')
var express = require('express')
var app = express()

app.use(express.json({limit: '300b'}))
app.use('/', express.static('public'))

// Handles Ajax calls from public/javascripts/login.js
app.post('/login', (req, res) => {
    // Terceira validação de dados
    if (!req.body.usuario || !req.body.senha) {
        res.send({autenticado: false, erro: 'Usuário e senha não preenchidos'})
        return
    }

    siga.tentarLogin(req.body.usuario, req.body.senha).then(resposta => {
        res.send(resposta)
    })
    
})

app.listen(80, () => { 
    console.log('Express escutando na porta 80')
})