var express = require('express')
var app = express()
var siga = require('./siga.js')

// Permite ler dados que foram recebidos em formato json
app.use(express.json({ limit: '78b' })) // 78 bytes: usuario e senha com 20 caracteres cada e tipoDado, tudo em formato JSON em string
// Serve arquivos estáticos de /public na raiz
app.use(express.static('public'))

// Trata chamadas xhr POST em /login, usado por /public/scripts/login.js para autenticação do aluno
app.post('/login', (req, res) => {
    // Terceira validação de dados
    if (!req.body.usuario || !req.body.senha || !req.body.usuario.length > 20 || !req.body.senha.length > 20) {
        res.send({ autenticado: false, erro: 'Usuário e senha não preenchidos' })
        return
    }

    siga.tentarLogin(req.body.usuario, req.body.senha)
        .then(resposta => res.send(resposta))
})

// Trata chamadas xhr POST em /dados, usado por /public/scripts/dados.js para requisitar dados do aluno
app.post('/dados', (req, res) => {
    siga.getDados(req.body.usuario, req.body.senha, req.body.tipoDado)
        .then(resposta => res.send(resposta))
})

// Redireciona para raiz se nenhum tratamento respondeu ao chamado (ex: GET uma página invalída)
app.use((req, res) => res.redirect('/'))

// Inicia o servidor na porta HTTP
app.listen(80, () => {
    console.log('Express escutando na porta 80')
})