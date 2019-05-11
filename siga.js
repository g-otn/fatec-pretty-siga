const fatecApi = require('fatec-api')

exports.tentarLogin = async (login, senha) => {
    let resposta = { autenticado: false }
    let conta = new fatecApi.Account(login, senha)
    await conta.login()
        .then(() => resposta.dados = recuperarDados(conta))           // Se logar, recupera os dados
        .catch(err => resposta.erro = err.toString())           // Se não logar, guarda o erro
        .finally(() => resposta.autenticado = conta.isLogged()) // Guarda se conseguiu logar ou não
    return resposta
}

async function recuperarDados(conta) {
    //let conta = new fatecApi.Account(login, senha) // debug: auto completion help
    let resposta = {}
    await Promise.all([conta.getAcademicCalendar()])
    .then((calendario) => {
        resposta.calendario = calendario
    })
    return resposta
    // TODO
}