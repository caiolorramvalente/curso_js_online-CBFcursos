const caixa1=document.querySelector("#caixa1")
const todosCursos=[...document.querySelectorAll('.curso1')]
const c1_2=document.querySelector("#c1_2")

// console.log(caixa1.children)// mostra todos os filhos do elemento caixa1
// console.log(caixa1.children[1])// mostra o primeiro filho do elemnto caixa1
// console.log(document.getRootNode())

// console.log(caixa1.hasChildNodes())// retornora true caso o elemento tenha filhos caso contrario retornar false

// console.log(todosCursos[0].children.length>0?"este elemento possui filhos":"este elento nao possui filhos")



// todosCursos.map((cursos)=>{
//     cursos.addEventListener("click",(event)=>{
//         console.log(caixa1.firstElementChild.innerHTML='DEU BOM')// testando a manipulação com evento de cliques

//     })
// })
console.log(c1_2.parentNode.parentNode.parentNode)//retorna o avo do elemento
console.log(c1_2.parentNode.parentNode.parentNode.children[1])//retornar o filho que eu escolher