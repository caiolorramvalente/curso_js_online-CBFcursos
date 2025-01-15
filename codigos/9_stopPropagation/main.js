const caixa1 = document.querySelector("#caixa1") 
const btnc1 = document.querySelectorAll('#c1')
const cursos= [...document.querySelectorAll('.curso1')]


caixa1.addEventListener("click",(evento)=>{
    console.log(evento)
})
cursos.map((Curso)=>{
    Curso.addEventListener("click",(event)=>{
        event.stopPropagation()
    })
})

