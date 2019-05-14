const fatecApi = require('fatec-api')

exports.login = async (usuario, senha) => {
    let resposta = {}
    let conta = new fatecApi.Account(usuario, senha)
    // Tentar logar
    await conta.login()
        .catch(erro => resposta.erro = erro.toString()) // Se não conseguir logar, retorna o erro
    // Se logar, resgata os dados do aluno
    if (conta.isLogged())
        await getDadosAluno(conta)
            .then(dadosAluno => resposta = dadosAluno)
    return resposta
}

async function getDadosAluno(conta) {
    let dadosAluno = {}
    await Promise.all([
        conta.getProfile(),             // resposta[0]
        conta.getPartialGrades(),       // resposta[1]
        conta.getEnrolledDisciplines(), // resposta[2]
        conta.getSchedules(),           // resposta[3]
        conta.getHistory(),             // resposta[4]
        conta.getSchoolGrade(),         // resposta[5]
        conta.getAcademicCalendar()     // resposta[6]
    ])
        .then(resposta => {
            dadosAluno.perfil = resposta[0]
            dadosAluno.notasParciais = resposta[1]
            dadosAluno.disciplinas = resposta[2]
            dadosAluno.horarios = resposta[3]
            dadosAluno.historico = resposta[4]
            dadosAluno.gradeEscolar = resposta[5]
            dadosAluno.calendario = resposta[6]
        })
        .catch(erro => dadosAluno = { erro: erro.toString() })
    return dadosAluno
}
