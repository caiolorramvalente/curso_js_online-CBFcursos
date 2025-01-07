// function* cores(){
//     yield "Vermelho"
//     yield "Verde"
//     yield "Azul"

// }
// const interator=cores()
// console.log(interator.next().value)
// console.log(interator.next().value)

// function* perguntas(){
//     const nome = yield "Qual seu nome?"

//     const esporte = yield "qual esporte Pratica?" 

//     return "seu nome é :"+ nome +"\nseu esporte é : "+esporte
// }
// const interator=perguntas()
// console.log(interator.next().value)
// console.log(interator.next('caio').value)
// console.log(interator.next('surfe').value)

function* contador(){
    let i=0
    while(true){
        yield i++

        if(i>5){
            break
        }
    }
}
const interator=contador()

for(c of interator){
    console.log(c)
}