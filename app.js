let numerosSorteados = [];
let numero;

function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    if (de > ate){
        textoNaTelaID('resultado', `Erro:"Do número" (${de}) deve ser menor que "Até o número" ${ate}.`);
    } else  if (quantidade < 1){
        textoNaTelaID('resultado', `Erro:A "Quantidade de números" (${quantidade}) deve ser pelo menos 1.`);
    } else {
        sortearNumeroAleatorio(quantidade, de, ate);
        textoNaTelaID('resultado', `<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label>`);
        document.getElementById('btn-reiniciar').className = 'container__botao';
    }
}

function sortearNumeroAleatorio(quantidade, de, ate){
    for(let i = 0; i < quantidade; i++){    
        numero = Math.floor(Math.random() * (ate - de + 1)) + de;
        while (numerosSorteados.includes(numero)){
            numero = Math.floor(Math.random() * (ate - de + 1)) + de;
        }
        numerosSorteados.push(numero);
    }
    return numerosSorteados;
}

function textoNaTelaID (id, texto){
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

function reiniciar() {
    numerosSorteados = [];
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados até o momento: nenhum até agora</label>`;
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('btn-reiniciar').className = 'container__botao-desabilitado';
}
