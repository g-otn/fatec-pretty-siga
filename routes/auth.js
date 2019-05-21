var express = require('express')
var app = module.exports = express()
//var siga = require('../util/siga')        // Padrão
var siga = require('../tests/mockSiga') // Para teste

// Autenticação e envio de dados do aluno
app.post('/', (req, res) => {
    siga.login(req.body.usuario, req.body.senha)
        .then(dadosAluno => {
            if (dadosAluno.erro !== undefined)
                res.send(dadosAluno)
            else
                res.render('main', dadosAluno, (erro, html) => {
                    if (erro)
                        res.send({ erro: 'Ocorreu um erro no servidor e não foi possível gerar sua página de aluno' })
                    else
                        res.send(html)
                })
        })
})
