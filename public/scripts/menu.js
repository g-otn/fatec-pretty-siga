function mostrarDiv(div) {
    let abas = document.getElementById('abas')
    for (aba in abas.children)
        if (aba.id !== div)
            aba.style.display = 'none'
        else
            aba.style.display = 'inline';
}

function sair() {
    window.onbeforeunload = null
    document.location.reload()
}