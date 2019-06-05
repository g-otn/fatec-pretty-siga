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
        conta.getSchoolGrade()          // resposta[5]
    ])
        .then(resposta => {
            dadosAluno.perfil =         resposta[0]
            dadosAluno.notasParciais =  resposta[1].sort(compararNotasParciaisDisciplina)
            dadosAluno.disciplinas =    resposta[2].sort(compararDisciplinasNome)
            dadosAluno.horarios =       resposta[3]
            dadosAluno.historico =      resposta[4]
            dadosAluno.gradeEscolar =   resposta[5]
        })
        .catch(erro => dadosAluno = { erro: erro.toString() })
    return dadosAluno
}

function compararNotasParciaisDisciplina(a, b) {
    if (a.discipline.name < b.discipline.name) 
        return -1
    if (a.discipline.name > b.discipline.name) 
        return 1
    return 0
}

function compararDisciplinasNome(a, b) {
    if (a.name < b.name) 
        return -1
    if (a.name > b.name) 
        return 1
    return 0
}
