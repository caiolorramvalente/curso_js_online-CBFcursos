const c1 = document.getElementById("c1")

const msg = () => {
    alert("clicou")
}

c1.addEventListener("click",(evento)=>{
    const elemento = evento.target
    elemento.classList.add("mudarCor")
    
})