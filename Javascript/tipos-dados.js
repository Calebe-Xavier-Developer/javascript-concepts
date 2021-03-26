/*
    * Cadeia de Caracteres

    ""  // aspas duplas
    ''  // aspas simples
    ``  // template literals ou template strings (crase inversa) 
    permite multiplas linhas, permite usar expressao ${}


*/
console.log(` Calebe tem ${20 + 1} anos`);
/**********************************************************/

/* 
    Number
        * Números

        22  // inteiros
        15.9  // reais ou float
        NaN  // Nota a Number
        Infinity // infinito
*/

console.log((45.6 + 54) * 0.5 === Infinity);
/**********************************************************/

/* 
    Boolean
        * somente 2 valores

            true // verdadeiro
            false // false

*/

console.log(false == !true);
/**********************************************************/


/* 
    * undefined
        * indefinido

    * null
        * nulo
        * ojeto que não possui nada dentro
        * diferente de indefinido

*/
console.log(undefined === null);
/**********************************************************/

/* 
* Object
    * Objeto
    * Propriedades / Atributos
    * Funcionalidades / Métodos
    
    { propriedades: "valor"}
*/
console.log({
    name: "Maquinas",
    color: "BlueSkye",
    criar_tag: function(){
            console.log('criar tag');
    }

});
/**********************************************************/

/* 
* Array (Vetores)
    * Imagina sendo uma lista
    * Serve para agrupar dados
    
    ["Calebe", 21]
*/
console.log([
    "Arroz", 
    "Feijão",
    "Dinheiro",
    "Pagar luz",
    "chocolate"
]);
/**********************************************************/