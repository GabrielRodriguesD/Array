//----------------------------- Sexta Guilherme Exerc 1 ---------------------------



const nome = ["nome1", "nome2", "nome3", "nome4", "nome5"]
const sobrenomes = ["sobrenome1", "sobrenome2", "sobrenome3", "sobrenome4", "sobrenome5" ]

const nomeCompleto = nome.map((nome, indice) => {
    // console.log(`${nome} ${sobrenomes[indice]}`);
    return `${nome} ${sobrenomes[indice]}`
    
})


////usando o console.log no MAP não sera necessária a função forEach
//caso return seja usado no MAP sera necessário usar a função do forEach para mostra-lo no console
nomeCompleto.forEach((qualquerParametro) => {
    console.log(qualquerParametro);
})



// nomeCompleto.forEach((nome) => {
//     console.log(nome);
// })
