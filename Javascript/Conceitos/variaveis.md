# Variáveis

    * Nome simbólicos para receber algum valor
    * Atalhos de código
    * Identificadores
    * 3 palavras reservadads para criar uma variável
        * var
        * let
        * const


## JS é uma linguagem fracamente tipada e dinâmica
    * Variáveis não precisam ter um tipo previamente definido
    * Podemos mudar o conteúdo da variável



## Scope
    * Escopo determina a visibilidade de alguma variável no JS

    *Blovk statement

    ```js
    // iniciar um bloco
    {
        //aqui dentro é um bloco e posso colocar qualquer código
    }
    // fecha o bloco
    ```
    O bloco, tamém criará um novo escopo. Chamado de `block-scoped`


## var

```js
//var é global e poderá funcionar fora de um escopo de bloco
// isso se chama hoisting >
// var x
console.log('> existe x antes do bloco ?', x)
{
    // e ele coloca aqui x = 0, isso é o hoisting
    var x = 0
}
console.log('> existe x depois do bloco ?', x)
```
