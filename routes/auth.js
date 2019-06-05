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
            else if (Object.keys(dadosAluno).length == 0) // dadosAluno: {}
                res.send({ erro: 'Não foi possível obter os dados do SIGA, a página do SIGA está no ar?'})
            else
                res.render('main', dadosAluno, (erro, html) => {
                    if (erro) {
                        res.send({ erro: 'Ocorreu um erro no servidor e não foi possível gerar sua página de aluno' })
                    } else
                        res.send(html)
                })
        })
})
