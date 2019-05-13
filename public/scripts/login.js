function realizarlogin() {
    // Limpa a mensagem de erro
    document.getElementById('preErroLogin').innerText = ''

    // Tenta criar a chamada Ajax
    let req = new XMLHttpRequest() || new ActiveXObject()
    if (req == undefined) {
        mostrarErroDeLogin('Não é possível se conectar utilizando o seu navegador.')
        return
    }

    // Resgata dados
    let formLogin = document.forms['formLogin']
    let usuario = formLogin.children[0].value
    let senha = formLogin.children[2].value

    // Segunda validação de dados (inputs não vazios)
    if (!usuario || !senha) {
        mostrarErroDeLogin('Usuário e senha não preenchidos')
        return
    }

    // Desabilita botão de login
    formLogin.children[4].disabled = true

    // Configura callbacks e realiza a requisição
    req.onload = () => verificarLogin(req.response, usuario, senha)
    req.onerror = () => mostrarErroDeLogin('A conexão com o servidor falhou')
    req.open('POST', '/login')
    req.setRequestHeader('Content-type', 'application/json')
    req.send(JSON.stringify({ usuario: usuario, senha: senha }))
}

function verificarLogin(resposta, usuario, senha) {
    try {
        resposta = JSON.parse(resposta)
    } catch {
        mostrarErroDeLogin('Dados inválidos recebidos, impossível fazer login')
        return
    }

    // Verificação de login bem-sucedido
    if (!resposta.autenticado) {
        mostrarErroDeLogin(resposta.erro)

        // Reabilita botão de login
        document.forms['formLogin'].children[4].disabled = false
        return
    }

    // Pede confirmação ao atualizar ou sair da página
    window.onbeforeunload = () => { return 'Ao reiniciar ou fechar a página será preciso realizar o login novamente'}

    // Resgata e reserva os dados resgatados
    getDados(usuario, senha)

    // Carrega a página principal
    carregarPaginas()
}

function mostrarErroDeLogin(erro) {
    let preErroLogin = document.getElementById('preErroLogin')
    preErroLogin.innerText = erro ? erro : 'Erro desconhecido'
}