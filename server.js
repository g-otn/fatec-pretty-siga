var express = require('express')
var app = express()
var siga = require('./siga.js')

app.set('view engine', 'ejs');

// Permite ler dados que foram recebidos em formato json
app.use(express.json({ limit: '120b' })) // 120 bytes: suficiente para todas as requisições
// Serve os arquivos estáticos de /public na raiz
app.use(express.static('public'))

// Captura xhr POST enviado por /public/scripts/login.js para autenticação do aluno
app.post('/', (req, res) => {
    // Terceira validação de dados
    if (!req.body.usuario || !req.body.senha || !req.body.usuario.length > 20 || !req.body.senha.length > 20) {
        res.send({ erro: 'Usuário e senha não preenchidos' })
        return
    }

    require('./api-test/mockSiga.js').login // para teste, retorna dados de aluno já salvos em arquivo local
    //siga.login
    (req.body.usuario, req.body.senha)
        .then(dadosAluno => {
            if (dadosAluno.erro !== undefined) {
                res.send(dadosAluno)
            }
            else
                res.render('main', dadosAluno, (erro, html) => {
                    
                    if (erro)
                        res.send({ erro: 'Não foi possível gerar sua página de aluno' })
                    else
                        res.send(html)
                })
        })
})

// Redireciona para raiz se nenhum tratamento respondeu ao chamado (ex: GET uma página invalída)
app.use((req, res) => res.redirect('/'))

// "Inicia" o servidor
app.listen(process.env.PORT, () => {
    console.log('Express escutando na porta ' + process.env.PORT)
})