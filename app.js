let numerosSorteados = [];

function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    console.log(`O campo "De" está valendo ${de}`);
    console.log(`O campo "Ate" está valendo ${ate}`);
    if (de > ate){
        textoNaTelaID('resultado', `Erro:"Do número" (${de}) deve ser menor que "Até o número" ${ate}.`);
    } else  if (quantidade < 1){
        textoNaTelaID('resultado', `Erro:A "Quantidade de números" (${quantidade}) deve ser pelo menos 1.`);
    } else {
        let contador = 0;
        while(contador < quantidade){
            numerosSorteados.push(Math.floor(Math.random() * (ate - de + 1)) + de);
            contador ++;
            console.log(numerosSorteados);
        }
        resultadoNaTela(numerosSorteados);
        document.getElementById('btn-reiniciar').className = 'container__botao';
    }
}

function textoNaTelaQuerry(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerText = texto;
}

function textoNaTelaID (id, texto){
    let campo = document.getElementById(id);
    campo.innerText = texto;
}
function resultadoNaTela(numerosSorteados){
    let campo = document.getElementById('resultado');
    campo.innerText = `Números sorteados até o momento: ${numerosSorteados}`;
}

function reiniciar() {
    numerosSorteados = [];
    document.getElementById('resultado').innerHTML = 'Números sorteados:  nenhum até agora';
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('btn-reiniciar').className = 'container__botao-desabilitado';
}