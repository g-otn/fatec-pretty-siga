async function getDados(usuario, senha) {
    let reqs = new Array(6)
    for (let i = 0; i < reqs.length; i++) {
        reqs[i] = new XMLHttpRequest() || new ActiveXObject()
        reqs[i].onerror = () => {}
        reqs[i].onload = () => atribuirDados(reqs[i].response, i + 1)
        reqs[i].open('POST', '/dados')
        reqs[i].setRequestHeader('Content-type', 'application/json')
        reqs[i].send(JSON.stringify({ usuario: usuario, senha: senha, tipoDado: i + 1 }))
    }
}

function atribuirDados(resposta, tipoDado) {
    try {
        resposta = JSON.parse(resposta)
    } catch {
        return
    }

    switch (tipoDado) {
        case 1: // Perfil
            perfil = resposta
            break
        case 2: // Notas Parciais
            notasParciais = resposta
            break
        case 3: // Disciplinas
            disciplinas = resposta
            break
        case 4: // Horários
            horarios = resposta
            break
        case 5: // Histórico
            historico = resposta
            break
        case 6: // Grade Escolar
            gradeEscolar = resposta
            break
        case 7: // Calendário Acadêmico
            calendario = resposta
    }
}