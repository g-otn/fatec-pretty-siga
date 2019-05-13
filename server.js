var express = require('express')
var app = express()
var siga = require('./siga.js')

// Permite ler dados que foram recebidos em formato json
app.use(express.json({ limit: '120b' })) // 120 bytes: suficiente para todas as requisições
// Serve os arquivos estáticos de /public na raiz
app.use(express.static('public'))

// Captura xhr POST enviado por /public/scripts/login.js para autenticação do aluno
app.post('/login', (req, res) => {
    // Terceira validação de dados
    if (!req.body.usuario || !req.body.senha || !req.body.usuario.length > 20 || !req.body.senha.length > 20) {
        res.send({ autenticado: false, erro: 'Usuário e senha não preenchidos' })
        return
    }

    // Responde se foi possível se autenticar com o usuário e senha da requisição
    siga.tentarLogin(req.body.usuario, req.body.senha)
        .then(resposta => res.send(resposta))
})

// Captura xhr POST enviado por /public/scripts/dados.js para requisitar dados do aluno
app.post('/dados', (req, res) => {
    // Responde com dados do aluno autenticado com o usuário e senha da requisição
    siga.getDados(req.body.usuario, req.body.senha, req.body.tipoDado)
        .then(resposta => res.send(resposta))
})

// Redireciona para raiz se nenhum tratamento respondeu ao chamado (ex: GET uma página invalída)
app.use((req, res) => res.redirect('/'))

// "Inicia" o servidor
app.listen(process.env.PORT, () => {
    console.log('Express escutando na porta ' + process.env.PORT)
})