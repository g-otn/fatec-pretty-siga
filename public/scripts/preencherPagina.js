function carregarPaginas() {
    // Carrega o HTML principal (menu e cabeçalho)
    //let req = new XMLHttpRequest() || new ActiveXObject()
    var req = new XMLHttpRequest()
    req.onerror = () => mostrarErroDeLogin('Não foi possível carregar a página principal, a conexão com o servidor parou')
    req.onload = () => document.body.innerHTML = req.response
    req.open('GET', 'principal.html')
    req.send()
}