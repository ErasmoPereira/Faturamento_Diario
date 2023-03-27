const jsonData = require('./faturamentos.json');


// Retirada dos disas que não teve faturamento
const  diasComFaturamento = jsonData.filter((value) =>{
    return value.valor > 0 
   
})


//Maior faturamento no mes
const maior = diasComFaturamento.reduce ((acumulador, value) =>{
    if(acumulador.valor > value.valor) return acumulador
    return value;
}, 0)

//Menor faturamento no mes

const menor = diasComFaturamento.reduce ((acumulador, value) =>{
    if(acumulador.valor < value.valor) return acumulador
    return value;
})

// Calculando a média mensal
let total = 0;
diasComFaturamento.forEach((val) =>{
    total += val.valor
    
    
})

const media = total/diasComFaturamento.length
const diasAcimaDaMedia = diasComFaturamento.reduce((acumulador, value) =>{
    if(value.valor > media){
        acumulador++   
    } 
    return acumulador
}, 0)

console.log(`Dias com faturamento maior que a média mensal: ${diasAcimaDaMedia}`)
console.log(`O menor faturamento foi no dia ${menor.dia}, no valor de R$ ${menor.valor}`)
console.log(`O maior faturamento foi no dia ${maior.dia}, no valor de R$ ${maior.valor}`)
