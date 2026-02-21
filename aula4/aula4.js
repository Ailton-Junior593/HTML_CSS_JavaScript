let nomes1 = ["Felipe", "Chico", "João", "Gabriel"]

console.log(nomes1.length);
console.log(nomes1[0]);
console.log(nomes1[1]);
console.log(nomes1[2]);
console.log(nomes1[3]);


// Atividade 1

let cores1 = ["Vermelho", "Verde", "Azul", "Amarelo"]

console.log(cores[3]);



do{
    let novacor = prompt("Digite uma nova cor: ")
    if(novacor === "sair"){break}
    cores1.push(novacor)
}while(true)

console.log(cores1);

//Atividade 2

let animais = ["Cachorro", "Gato", "Papagaio"];
animais.push("Tartaruga");
animais.shift();
animais.unshift("Coelho");
animais[2] = "Hamster";
console.log("Comprimento do array:", animais.length);
console.log("Elemento na posição 1:", animais[1]);
console.log("Array final:", animais);

//Atividade 3



let cores = ["Vermelho", "Verde", "Azul"];


cores.push("Amarelo", "Roxo");
cores.pop();
cores.splice(1, 1, "Laranja", "Marrom");

let novasCores = cores.slice(0, 2);
let stringCores = cores.join(", ");

cores.reverse();

console.log("Array cores:", cores);
console.log("Array novasCores:", novasCores);
console.log("String das cores:", stringCores);

// Atividade 4

let numeros = [3, 8, 15, 22, 7, 10];


for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];

    
    if (numero % 2 === 0) {
        console.log(numero + " é par");
    } else {
        console.log(numero + " é ímpar");
    }
}

// Atividade 5


let nomes = ["Ana", "Carlos", "Mariana", "João"];


for (let nome of nomes) {
    console.log("Seja bem-vindo(a), " + nome + "!");
}