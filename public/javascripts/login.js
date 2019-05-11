function realizarlogin() {
    let req = new XMLHttpRequest() || new ActiveXObject()
    if (req == undefined) {
        mostrarErroDeLogin('Não é possível se conectar utilizando o seu navegador.')
        return
    }

    let formLogin = document.forms['formLogin']
    let usuario = formLogin.children[0].value
    let senha = formLogin.children[2].value
    // Segunda validação de dados (inputs não vazios)
    if (!usuario || !senha) {
        mostrarErroDeLogin('Usuário e senha não preenchidos')
        return
    }

    // Configura callbacks e a requisição e envia os dados de login
    req.onprogress = (e) => console.log(e)
    req.onload = () => verificarLogin(req)
    req.onerror = () => mostrarErroDeLogin('A conexão com o servidor falhou')
    req.open('POST', 'http://localhost/login')
    req.setRequestHeader('Content-type', 'application/json')
    req.send(JSON.stringify({ usuario: usuario, senha: senha }))
}

function verificarLogin(req) {
    if (req.status !== 200) {
        mostrarErroDeLogin(`Ocorreu um erro: ${req.statusText} (${req.status})`)
        return
    }

    let res
    try {
        res = JSON.parse(req.response)
    } catch {
        mostrarErroDeLogin('Dados inválidos recebidos, impossível fazer login')
        return
    }
    console.log(res)

    // Verificação de login bem-sucedido
    if (!res.autenticado) {
        mostrarErroDeLogin(res.erro)
        return
    }

    // Atribui os dados resgatados

    // Pede confirmação ao atualizar ou sair da página
    window.onbeforeunload = () => { return 'Ao reiniciar ou fechar a página será preciso realizar o login novamente'}

    // document.body = null
}

function mostrarErroDeLogin(erro) {

    let preErroLogin = document.getElementById('preErroLogin')
    preErroLogin.innerText = erro
}