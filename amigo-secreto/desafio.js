//Crie uma função que valide se um número é positivo, negativo ou zero.
function validarNumero(numero){
    if(numero < 0 ){
        return "Positivo";
    }else if (numero > 0 ){
        return "Negativo";
    } else{
        return "Zero";
    }

}
console.log(validarNumero(5));

//Implemente uma função que verifique se uma pessoa é maior de idade.
function validarIdade(idade){
    return idade >= 18 ? "Maior de idade" : "Menor de idade";

}
console.log(validarIdade(15));

//Desenvolva uma função que valide se uma string é vazia ou não.
function validaString(texto){
    return texto === "" ? "String vazia" : "String nao vazia";
}

console.log(validarString("Aqui há um texto?"))
console.log(validarString(""))

//Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho

function validaArray(arr){
    return arr.lenght;
}

const minhaLista = [1,2,3,4,5,6,7,8,9,10];
console.log(validaArray(minhaLista));


//Crie um array e utilize a função includes para verificar se um elemento específico está presente
const meuArray = [10,20,30,40,50];
console.log("O array contem o numero 40 ?",meuArray.includes(40));


//Implemente uma função que receba um array e um elemento, e retorne se o elemento está presente no array.

function verificaArray(array,elemento){
    return array.includes(elemento);
}

const array2 = [10,20,30,40,50];
const meuElemento = 30;
const elementoPresente = verificaArray(array2,meuElemento);


if(elementoPresente){
    console.log(`o elemento ${elementoPresente} esta presente no array`);
}else {
    console.log(`o elemento ${elementoPresente} não esta presente no array`);
}


// Crie um array de strings e utilize includes para verificar se uma determinada string está presente.

const palavras = ['banana', 'maça', 'pera','melancia'];
console.log("a palavra banana esta no array", palavras.includes('banana'));