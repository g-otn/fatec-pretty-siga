const fatecApi = require('fatec-api')

exports.login = async (usuario, senha) => {
    let resposta = {}
    let conta = new fatecApi.Account(usuario, senha)
    await conta.login()
        .catch(erro => resposta.erro = erro.toString()) // Se não conseguir logar, retorna o erro
    if (conta.isLogged())
        await getDadosAluno(conta)
            .then(dadosAluno => resposta = dadosAluno) // Resgata os dados do aluno
    return resposta
}

async function getDadosAluno(conta) {
    let dadosAluno = {}
    await Promise.all([
        conta.getProfile(),
        conta.getPartialGrades(),
        conta.getEnrolledDisciplines(),
        conta.getSchedules(),
        conta.getHistory(),
        conta.getSchoolGrade(),
        conta.getAcademicCalendar()
    ])
        .then(resposta => {
            //for (let i = 0; i < resposta.length; i++) { }
            dadosAluno = resposta
        })
        .catch(erro => dadosAluno = { erro: erro.toString() })
    return dadosAluno
}
