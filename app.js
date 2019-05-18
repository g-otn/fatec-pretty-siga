var app = require('express')()

app.set('view engine', 'ejs')

app.use(require('./routes'))

app.listen(process.env.PORT, () => {
    console.log(`app executando na porta ${process.env.PORT}`)
})