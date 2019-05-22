function mostrarAba(div) {
    let abas = document.getElementById('abas')
    for (let aba of abas.children)
        if (aba.id !== div) 
            aba.style.display = 'none'
        else
            aba.style.display = 'block';
}

function alternarMenuFixo() {
    document.querySelector('nav').classList.toggle('fixo')
    document.getElementById('menuIconeFixar').classList.toggle('selecionado')
}

function sair() {
    window.onbeforeunload = null
    document.location.reload()
}