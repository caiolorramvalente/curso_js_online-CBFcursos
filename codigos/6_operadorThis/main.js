function Alunos(nome,nota){
    this.nome=nome
    this.nota=nota

    this.dadosPessoa = function(){
        setTimeout(()=>{

            console.log(this.nome)
            console.log(this.nota)

        }),2000}// esta funcionado pois a arrow function esta autilizando o contexto do pai 

    this.dadosFormaIncoreta = function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)

            
        }),2000}// não esta funcionado pois com a criação de um function anonima faz ela temtar usar o propio contexto ao inves de usar o do componente pai

}
const todos=new Alunos('caio',90)
todos.dadosPessoa()
todos.dadosFormaIncoreta()