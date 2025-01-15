const caixa1=document.getElementById("caixa1")
const caixa2=document.getElementById("caixa2")
const btnCopiar=document.getElementById("btn_copiar")
const todosCursos=[...document.querySelectorAll(".curso1")]

todosCursos.map((elemento)=>{
    elemento.addEventListener("click",(evento)=>{
        const cursoSelecionado=evento.target
        cursoSelecionado.classList.toggle("selecionada")//<- o toggle verrificar se o elemento possui ou não a classe 

    })

})
btnCopiar.addEventListener("click",()=>{
    const cursoSelecionado=[...document.querySelectorAll(".selecionada")]
    const cursosNaoSelecionado=[...document.querySelectorAll(".curso1:not(.selecionada)")]

    cursoSelecionado.map((elemento)=>{
        caixa2.appendChild(elemento)
    })
     cursosNaoSelecionado.map((elemento)=>{
       caixa1.appendChild(elemento)
    })
    
     
})
