var nome = "Calebe de Vasconcelos Xavier";
var idade = 22;
var frase = "Moro no Brazil";

var lista = ["maça", "pêra", "laranja"];
lista.push("uva"); //colocar elemento na lista
lista.pop(); //tirar o ultimo eleemnto da lista

var fruta = { nome: "maçã", cor: "vermelha" };

console.log(fruta.nome);

var frutas = [
  { nome: "laranja", cor: "laranja" },
  { nome: "Morango", cor: "vermelho" },
];

console.log(frutas[1].cor);

/*alert(
  "Meu primeiro js! Seja Bem vindo " + nome + ". Você tem " + idade + " anos"
); //serve para fazer uma popup de alerta na página ao carregar */

console.log(frase); //Console.log imprime no console do navegador

console.log(frase.replace("Moro no Brazil", "Quero morar em Portugal")); // .replace substitui a primeira palavra pela segunda

console.log(frase.toLocaleUpperCase()); //Deixa tudo maiusculo

console.log(nome.toLocaleLowerCase()); //Deixa tudo minusculo

console.log(lista.toString()); //transforma o array em string

console.log(lista.join(" - ")); //transforma em string, mas é possivel definir um separador

console.log(lista.length); //ver a tamanho total da lista

console.log(lista.reverse()); //ver os elementos em contrario

console.log(lista[1]); //Mostrar o elemento localizado em segundo lugar
