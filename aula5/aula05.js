

// Atividade 1

let n = parseInt(prompt("Digite um numero: "));

for(let i = n; i >= 1; i--){
    let linha = "";

    for (let j =1; j<= i; j++){
        linha += j +"";

    }
    console.log(linha);
    
}

// Atividade 2

let n1 = parseInt(prompt("Digite um numero: "));

let somaPares = 0;
let somaImpares = 0;

for(let i = 1; i<= n1; i++){
    if(i% 2 === 0){
        somaPares += i;
    }else{
        somaImpares += i;
    }
}


console.log("Soma dos numeros pares:", somaPares);
console.log("Soma dos numeros impares:", somaImpares);

// Atividade 3

let numero = prompt("Digite um numero com tres algarismo: ex(123)")

 if(numero.length === 3){
    let novovalor = numero[2] + numero[1] + numero[0]
    console.log(novovalor);
    
 }

// Atividade 4

let valor = parseInt(prompt("Digite o valor da quantia:"));

let notas = [100, 50, 20, 10, 5, 2, 1];

for (let i = 0; i < notas.length; i++) {
    let quantidade = Math.floor(valor / notas[i]);
    
    if (quantidade > 0) {
        console.log(`${quantidade} nota(s) de R$ ${notas[i]}`);
        valor = valor % notas[i]; // Atualiza o valor restante
    }
}

if (valor > 0) {
    console.log(`Valor restante não pode ser distribuído: R$ ${valor}`);
}

// atividade 5

let valor1 = parseInt(prompt("Digite o valor da mercadoria:"));

let prestacao = Math.floor(valor1 / 3);
let entrada = valor1 - (prestacao * 2);

console.log("Valor da mercadoria: R$ " + valor1);
console.log("Valor da entrada: R$ " + entrada);
console.log("Duas prestações de: R$ " + prestacao);





