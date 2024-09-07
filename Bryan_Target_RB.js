//Exercicio 1
console.log("exercicio 1:");
var i = 0;
var a = 0;
var b = 1;
var c = 0;
var d = 89;

for(i = 0; c < d; i++){
    c = a + b;
    a = b;
    b = c;

    if ( d == c){
        console.log(d + " pertence a sequencia");
    } else if (d < c){
        console.log(d + " ñ pertence a sequencia");
    }
}

//Exercicio 2 
console.log("\nexercicio 2:");
var contador = 0;
var texto = 'Target Sistemas';

for(i = 0; i < texto.length; i++){
    if (texto[i] == 'a' || texto[i] == 'A'){
        contador += 1;
    }
}

if(contador >= 1){
    console.log("O texto possui a letra 'a' e aparece "+ contador +" vezes.");
} else {
    console.log("Não existe a letra 'a' nesse texto.");
}

//exercicio 3
console.log("\nexercicio 3:");
var indice = 12;
var soma = 0;
var k = 0;

for(k = 0; k < indice; k++){
    soma = soma + k;
}

console.log("O valor total da soma é " + soma);

//exercicio 4
console.log("\nexercicio 4:");
a = 1;
b = 2;
c = 0;
d = 0;
var e = 1;
var f = 2;
var g = 1;

console.log("\na: ");
for(i = 0; i <= 4; i++){
    console.log(a);
    a += 2;
}

console.log("\nb: ");
for(i = 0; i <= 6; i++){
    console.log(b);
    b *= 2;
}

console.log("\nc: ");
for(i = 0; i <= 7; i++){
    console.log(c);
    c = g ** 2;
    g++;
}

console.log("\nd: ");
g = 2;
for(i = 0; i <= 4; i++){
    d = g ** 2;
    console.log(d);
    g += 2;
}

console.log("\ne: ");
a = 0;
b = 1;
for(i = 0; i <= 6; i++){
    console.log(e);
    e = a + b;
    a = b;
    b = e;
}

console.log("\nf: ");
console.log("A sequência é formada apenas com números com letra 'D'.");
console.log("2, 10, 12, 16, 17, 18, 19, 200...");

//exercicio 5
console.log("\nexercicio 5:");
console.log("Vamos chamar os interruptores de A, B e C, e as salas de 1, 2 e 3.");
console.log("Deixo o interruptor 'A' ligado por 10 minutos. Depois de 10 minutos desligo esse interruptor e ligo o interruptor 'B'.");
console.log("Vou ate a sala 1 e vejo se a lâmpada está ligada ou desligada.");
console.log("Se caso estiver desligada e fria é do interruptor 'C'.");
console.log("Se caso estiver desligada e quente é do interruptor 'A'.");
console.log("Se caso estiver ligada é do interruptor 'B'.");
console.log("Volto para sala dos interruptores e confiro eles.");
console.log("Vou para sala 2 e analiso como está a lâmpada.");
console.log("Desse jeito consigo saber qual é o interruptor da sala 1 e da sala 2, o interruptor que sobrar (C) é da sala que não fui.");