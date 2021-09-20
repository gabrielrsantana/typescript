class Carro{
   // recomendam usar nome!=string pra ser undefined
    nome:string 
    modelo:string
    ano:number

    constructor(nome:string,modelo:string,ano:number){
        this.nome = nome;
        this.modelo = modelo;
        this.ano = ano;
    }//

    escreverPropriedades(){
        console.log("Nome =",this.nome);
        console.log("modelo =",this.modelo);
        console.log("ano=",this.ano);
    }

}//classe
let ferrari = new Carro("Ferrari","458",2010);

ferrari.escreverPropriedades();