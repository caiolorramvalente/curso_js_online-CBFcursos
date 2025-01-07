const soma=(...valores)=>{

    
    let resultado=0

    for(v of valores){
        resultado+=v
    }
    return resultado
    

}

console.log(soma(12,12))