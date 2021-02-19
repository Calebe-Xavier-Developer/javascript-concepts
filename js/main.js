var nome = "Calebe de Vasconcelos Xavier";
var idade = 22;
var frase = "Moro no Brazil";

alert(
  "Meu primeiro js! Seja Bem vindo " + nome + ". Você tem " + idade + " anos"
); //serve para fazer uma popup de alerta na página ao carregar

console.log(frase); //Console.log imprime no console do navegador

console.log(frase.replace("Moro no Brazil", "Quero morar em Portugal")); // .replace substitui a primeira palavra pela segunda

console.log(frase.toLocaleUpperCase()); //Deixa tudo maiusculo

console.log(nome.toLocaleLowerCase()); //Deixa tudo minusculo
