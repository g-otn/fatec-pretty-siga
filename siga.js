const fatecApi = require('fatec-api')

exports.tentarLogin = async (usuario, senha) => {
    let resposta = { autenticado: false }
    let conta = new fatecApi.Account(usuario, senha)
    await conta.login()
        .catch(erro => resposta.erro = erro.toString())         // Se não logar, guarda o erro
        .finally(() => resposta.autenticado = conta.isLogged()) // Guarda se conseguiu logar ou não
    return resposta
}

exports.getDados = async (usuario, senha, tipoDado) => {
    let resposta = {}
    let conta = new fatecApi.Account(usuario, senha)
    switch (tipoDado) {
        case 1: // Perfil
            await conta.getProfile()
                .then(perfil => resposta.perfil = perfil)
                .catch(erro => resposta.erro = erro)
            break
        case 2: // Notas Parciais
            await conta.getPartialGrades()
                .then(perfil => resposta.notasParciais = perfil)
                .catch(erro => resposta.erro = erro)
            break
        case 3: // Disciplinas
            await conta.getEnrolledDisciplines()
                .then(disciplinas => resposta.disciplinas = disciplinas)
                .catch(erro => resposta.erro = erro)
            break
        case 4: // Horários
            await conta.getSchedules()
                .then(horarios => resposta.horarios = horarios)
                .catch(erro => resposta.erro = erro)
            break
        case 5: // Histórico
            await conta.getHistory()
                .then(historico => resposta.historico = historico.entries)
                .catch(erro => resposta.erro = erro)
            break
        case 6: // Grade Escolar
            await conta.getSchoolGrade()
                .then(gradeEscolar => resposta.gradeEscolar = gradeEscolar)
                .catch(erro => resposta.erro = erro)
            break
        case 7: // Calendário Acadêmico
            await conta.getAcademicCalendar()
                .then(calendario => resposta.calendario = calendario)
                .catch(erro => resposta.erro = erro)
        default:
            resposta.erro = 'O servidor recebeu dados inválidos'
    }
    return resposta
}
