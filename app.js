let titulo = document.querySelector('h1');
titulo.textContent = 'Hora do Desafio';
// Ou, para adicionar estilo HTML:
// titulo.innerHTML = '<span style="color:red;">Hora do Desafio</span>';


function verificarConsole() {
    console.log('O botão foi clicado!');
}

function exibirAlertajs() {
    alert('Eu amo javascript!');
}

function coletarNome() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você.`);
}


function exibirSoma() {
    let valor1 = Number(prompt('Digite o primeiro número:'));
    let valor2 = Number(prompt('Digite o segundo número:'));

    if (isNaN(valor1) || isNaN(valor2)) {
        alert('Você precisa digitar números válidos!');
        return;
    }

    let resultado = valor1 + valor2;
    alert(`A soma dos valores é: ${resultado}`);
}
