var app = require('express')()
var routes = require('./routes')

app.set('view engine', 'ejs')

app.use(routes)

app.listen(process.env.PORT, () => {
    console.log(`app executando na porta ${process.env.PORT}`)
})