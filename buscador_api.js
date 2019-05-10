const fatecApi = require('fatec-api')

async function login(login, senha) {
    let conta = new fatecApi.Account(login, senha)
    let respostaApi

    // Tenta recuperar o perfil e o atribui a variável dados
    await conta.getProfile()
        .then(perfil => {
            respostaApi = {
                autenticado: true,
                dados: perfil
            }
        })
        .catch(erro => {
            respostaApi = {
                autenticado: false,
                erro: erro.toString()
            }
        })
    return respostaApi
}

exports.login = login