/*//Variaveis e tipos
var nome = "Calebe de Vasconcelos Xavier";
var idade = 22;
var frase = "Moro no Brazil";

//Listas e Arrays
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

/*console.log(frase); //Console.log imprime no console do navegador

console.log(frase.replace("Moro no Brazil", "Quero morar em Portugal")); // .replace substitui a primeira palavra pela segunda

console.log(frase.toLocaleUpperCase()); //Deixa tudo maiusculo

console.log(nome.toLocaleLowerCase()); //Deixa tudo minusculo

console.log(lista.toString()); //transforma o array em string

console.log(lista.join(" - ")); //transforma em string, mas é possivel definir um separador

console.log(lista.length); //ver a tamanho total da lista

console.log(lista.reverse()); //ver os elementos em contrario

console.log(lista[1]); //Mostrar o elemento localizado em segundo lugar

/*********************************************************** */
//Condicional
/*var age = prompt("Qual sua idade?"); //Interage com o usuario

//Condicional
if (age <= 15) {
  alert("Vc é novo!");
} else {
  alert("Vc é velho!");
}

//laços de repetição
var count = 0;
while (count <= 5) {
  console.log(count);
  count++;
}

/*for (count = 0; count <= 10; count++) {
  alert(count);
}*/

//como pegar a data atual ?

/*var d = new Date(); //Date puxa o valor do fuso em que o usuario está
alert(d.getMonth() + 1); //Você pode ter pegar dados unicos como, dia, mes, ano, hora e por ai vai
*/

/*//trabalhando com funções
function soma(n1, n2) {
  return n1 + n2;
}
alert(soma(5, 10));

function setReplace(frase, nome, novo_nome) {
  return frase.replace(nome, novo_nome);
}
alert(setReplace("Eu amo o Brazil", "amo", "odeio"));

var idade = prompt("Qual sua idade ?");
function validaIdade(idade) {
  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(validaIdade(idade)); */

//Manipulando elementos da Página
function btn() {
  document.getElementById("obg").innerHTML =
    "<strong>Obrigado</strong> por clicar!";
  //getElementById pega o elemento pelo id
  //innerHTML injeta codigo html
  //alert("Ahn!");
}

function btnpage() {
  //Window.open abre em uma nova aba apartir da url colocada
  //window.location.href abre na mesma janela
  window.open("https://github.com/Calebe-Xavier-Developer");
}

//Você pode ejetar elementos hmtl via id ou apenas declarando this no elemento pelo proprio html
function hover(element) {
  // document.getElementById("hover").innerHTML =
  element.innerHTML = "Passou o Mouse em mim ! Ahnnnnnnnnn!";
}

function voltar(element) {
  //document.getElementById("hover").innerHTML = "Passe o mouse aqui!";
  element.innerHTML = "Passe o mouse aqui!";
}

function load() {
  alert("página carregada!");
}

function change(elemento) {
  console.log(elemento.value);
}
