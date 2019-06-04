function realizarlogin() {
    // Limpa a mensagem de erro
    document.getElementById('erroLogin').innerText = ''

    // Tenta criar a chamada Ajax
    let req = new XMLHttpRequest() || new ActiveXObject()
    if (req == undefined) {
        mostrarErroDeLogin('Não é possível se conectar utilizando o seu navegador.')
        return
    }

    // Resgata dados
    let formLogin = document.forms['login']
    let usuario = formLogin.children[0].value
    let senha = formLogin.children[2].value

    // Segunda validação de dados (inputs não vazios)
    if (!usuario || !senha) {
        mostrarErroDeLogin('Usuário e senha não preenchidos')
        return
    }

    // Modificação na página para indicar o processo
    formLogin.children[4].disabled = true
    document.body.style.cursor = 'progress'

    // Configura callbacks e realiza a requisição
    req.onload = () => verificarLogin(req.response)
    req.onerror = () => mostrarErroDeLogin('A conexão com o servidor foi perdida')
    req.open('POST', '/')
    req.setRequestHeader('Content-type', 'application/json')
    req.send(JSON.stringify({ usuario: usuario, senha: senha }))
}

function verificarLogin(resposta) {
    // Verifica se a resposta está em JSON (stringfy-ed) ou HTML
    try {
        // Se a resposta está JSON, ela contém um atributo erro
        resposta = JSON.parse(resposta) // Deve dar erro aqui
        mostrarErroDeLogin(resposta.erro)
    } catch {
        // Se não está em JSON, a reposta é um HTML

        // Pede confirmação ao atualizar ou sair da página
        //window.onbeforeunload = () => { return '' }

        // Substitui todo o corpo atual (página de login) pelo o recebido
        document.body.innerHTML = resposta
        
        document.title = 'Fatec Pretty Siga'
        document.body.style.cursor = 'default'

        mostrarAba('abaDisciplinas')
    }
}

function mostrarErroDeLogin(erro) {
    let preErroLogin = document.getElementById('erroLogin')
    preErroLogin.innerText = erro ? erro : 'Erro desconhecido'
    let formLogin = document.forms['login']
    formLogin.children[4].disabled = false
    document.body.style.cursor = 'default'
}