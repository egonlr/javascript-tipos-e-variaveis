function imprimeTexto(texto) {
    console.log(texto);
}

function soma(x, y) {
    return x + y;
}

function multiplica(x, y) {
    return x * y;
}

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`
}

let palavra = "Atroz";

imprimeTexto(palavra);

imprimeTexto(soma(4, 5));

imprimeTexto(nomeIdade("Egon", 54));

imprimeTexto(multiplica(soma(3, 4), soma(2, 1)));