var express = require('express')
var app = module.exports = express()

app.use(express.static('public'))
app.use(express.json({ limit: '120b' })) // 120 bytes: suficiente para usuario + senha
app.use(require('./auth'))

// Redirecionamento caso página não existente
app.use((req, res) => res.redirect('/'))