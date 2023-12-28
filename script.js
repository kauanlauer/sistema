function realizarLogin() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    // Verificar se o usuário e senha correspondem aos valores fixos
    if (usuario === 'admin' && senha === '123') {
        // Redirecionar para a página principal (substitua 'pagina_principal.html' pelo nome do arquivo da sua página principal)
        window.location.href = 'pedido.html';
    } else {
        exibirMensagem("Usuário ou senha incorretos. Tente novamente.");
    }
}

function exibirMensagem(mensagem) {
    alert(mensagem);
}
