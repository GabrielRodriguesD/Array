//Arrays são como caixas com outras coisas dentro, que podem ser acessadas através do seu índice entre colchetes []. O primeiro índice sempre começa do 0, portanto um array de 4 posiçoes tera o indice de 0 a 3

//O array é hetero, ou seja, podemos colocar qualquer valor dentro dele, ou seja, tipos de dados diferentes. Int, String, double, booleam...

//Realizando a criação de um array:
//    indice = 0            1         2     3
const arr = ["Girafa", "camaleão", 'zebra', 3]
//  11
arr[10] = "Leão"

console.log(`
    ${arr.length}
`);

// arr.push("qualquer coisa");
// arr.push("Girafa")

// console.log(arr);

//------------------- Metodo 1 ----------


// permite adicionar valores no final do array!
const pushArray = ['Leão', 'tartaruga', 'papagaio']
console.log(pushArray);

pushArray[1] = 'Borboleta'
console.log(pushArray);

pushArray.push('escorpião')
console.log(pushArray);

pushArray.push('dragão')
console.log(pushArray);

//unshift -> adicona elementos no início do array
pushArray.unshift('Coelho')
console.log(pushArray);
//----------------------- Metodo 2 POP --

//POP remove o último valor de um determinado array
const popArray = ["Fernando" , 'Mara', 'Eric', 'Gabriel']
console.log(popArray);

//elimina o último valor do array
popArray.pop()

//remover o primeiro valor de um array ???
popArray.shift()

console.log(popArray);

//----------------------- Metodo 3 splice --
//metodo splice permite selecionar um indice e remover e adicionar valores (substituição)
//      indices   =    0      1      2      3
const spliceArray = ['jan', 'fev', 'abr', 'jun']
console.log(spliceArray);

spliceArray.splice(2, 0, 'mar')
spliceArray.splice(4, 0, 'maio')

console.log(spliceArray);

//----------------------- Metodo 4 filter --

// const filterArray = [1, 80, 2, 20 ,30 , 100, 93729]

// // const filterArray = ["aaaaaaa", "bbbbb", "ccccccccc", "ddd" ,"eeeeeeeee"]

// console.log(filterArray);

// //qualquer coisa menos numero
// //filter responsavel por reatribuir informação a um novoarray

// const novoArray = filterArray.filter((qualquerCoisa) => {
// // usa numero de letras para comparação em caso de strings

//     // return qualquerCoisa.length > 8

//     return qualquerCoisa > 10
// })

// console.log(novoArray);

const filterArray = ["guilherme", "amanda", "Rogerio", "Gabrielll", "Renata"]
console.log(filterArray);

const novoArray = filterArray.filter((qualquerCoisa) => {

    return qualquerCoisa == "amada" || qualquerCoisa == "guilherme"
})

console.log(novoArray);


//-------------------- METODO 5 MAP ---------------------------
// Map não modifica o array original, somente a função de callback poderá fazer isso! Ou seja, ela criará um novo array modificado
//        indice= 0  1  2  3  4  
const arrayMap = [1, 2, 3, 4, 5]

const arrayModificado = arrayMap.map((qualquermap) => {
    
    return qualquermap * qualquermap
    
})

console.log(arrayMap);
console.log(arrayModificado);

//----------------------------- Metodo 6 ForEach ---------------------------

const foreachArray = ["Carlos", "Andre", "Julia", "Akira"]
console.log(foreachArray);

foreachArray.forEach((nome) => { 
    console.log(nome);
})

















