// Adicione este código ao seu arquivo pd.js

function inserirPedido() {
    const clienteId = document.getElementById('clienteId').value;
    const nome = document.getElementById('nome').value;
    const celular = document.getElementById('celular').value;
    const endereco = document.getElementById('endereco').value;
    const tipoServico = document.getElementById('tipoServico').value;
    const numeroTelefone = document.getElementById('numeroTelefone').value;
    const observacoes = document.getElementById('observacoes').value;
    const valor = document.getElementById('valor').value;

    // Lógica para inserir o pedido (pode ser uma chamada para o backend)
    // Exemplo: enviar os dados para o backend usando uma solicitação AJAX

    // Exibir mensagem de sucesso (ou tratar erros)
    exibirMensagem("Pedido inserido com sucesso!");
}

function exibirMensagem(mensagem) {
    alert(mensagem);
}
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggle-sidebar');
    const content = document.getElementById('content');

    toggleBtn.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });

    document.addEventListener('click', function (event) {
        const isClickInsideSidebar = sidebar.contains(event.target) || toggleBtn.contains(event.target);
        const isClickInsideContent = content.contains(event.target);

        if (!isClickInsideSidebar && !isClickInsideContent) {
            sidebar.classList.remove('active');
        }
    });
});
