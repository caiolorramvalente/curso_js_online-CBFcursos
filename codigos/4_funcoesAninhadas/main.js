const soma=(...valores)=>{

    const somar=val=>{

        let resultado=0

        for(v of val)
            resultado+=v
            return resultado
        

    }
    return somar(valores)
}
console.log(soma(2,4,4))