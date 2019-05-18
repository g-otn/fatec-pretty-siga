var express = require('express')
var app = module.exports = express()
var siga = require('../util/siga')

// Autenticação e envio de dados do aluno
app.post('/', (req, res) => {
    //require('../../tests/mockSiga.js').login // Para teste
    siga.login                            // Padrão
        (req.body.usuario, req.body.senha)
        .then(dadosAluno => {
            if (dadosAluno.erro !== undefined)
                res.send(dadosAluno)
            else {
                res.render('main', dadosAluno, (erro, html) => {
                    if (erro) {
                        console.log(erro)
                        res.send({ erro: 'Ocorreu um erro no servidor e não foi possível gerar sua página de aluno' })
                    } else
                        res.send(html)
                })
            }
        })
})
