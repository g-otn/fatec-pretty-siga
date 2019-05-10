var req// = new XMLHttpRequest()

function realizarlogin() {
    req = new XMLHttpRequest() || new ActiveXObject()
    if (req == undefined) {
        alert('Não é possível se conectar utilizando o seu navegador.')
        return
    }

    let formLogin = document.forms['formLogin']
    let usuario = formLogin.children[0].value
    let senha = formLogin.children[2].value
    // Segunda validação de dados (inputs não vazios)
    if (!usuario || !senha) {
        alert('Usuário e senha não preenchidos')
        return
    }

    // Configura callbacks e a requisição e envia os dados
    req.onload = receberResposta
    req.open('POST', 'http://localhost/login')
    req.setRequestHeader('Content-type', 'application/json')
    req.send(JSON.stringify({ usuario: usuario, senha: senha }))
}

function receberResposta() {
    if (req.status !== 200) {
        alert(`Ocorreu um erro: ${req.statusText} (${req.status})`)
        return
    }

    let res = JSON.parse(req.response)
    console.log(res)
    // onbeforeunload
}