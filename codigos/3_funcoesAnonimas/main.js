const f = new Function("n1","n2","return n1 + n2")// funcao construtora e anonima


console.log(f(2,3)) // essa função não consegue ser utilizada em nevegador pois é bloquada pelo Content Security Policy (CSP)  do browser