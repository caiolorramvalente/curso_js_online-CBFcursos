let jogador1={nome:'bruce',vidas:5,velocidade:100}

let jogador2={nome:'eduardo',vidas:3,forca:150}

// agora com o operador spred consigo concatenar as infos do jogador um com o jogador dois

let jogador3={...jogador1,...jogador2}

console.log('resultado:' ,jogador3)


//exemplo com functions

    const somar=(n1,n2,n3) => {
        return n1+n2+n3
    }

let valores=[12,2,10]

somar(...valores)


let objetos = document.getElementsByTagName("div")
let objetos2 = [...document.getElementsByTagName("div")]
console.log(objetos)
console.log(objetos2)

objetos2.forEach(Element=>{
    console.log(Element)
    Element.innerHTML='deu certo'
})

