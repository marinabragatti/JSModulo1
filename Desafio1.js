//Exercício 1
var endereco = {
    rua : "Rua dos Pinheiros",
    numero : 1293,
    bairro : "Centro",
    cidade : "São Paulo",
    UF: "SP"
};


console.log("O usuário mora em " + endereco.cidade + "/" + endereco.UF + ", no bairro " + endereco.bairro + ", na " + endereco.rua + " com número "+ endereco.numero);
//console.log("O usuário mora em ${endereco.cidade}/${endereco.UF}, no bairro ${endereco.bairro}, na ${endereco.rua} com número ${endereco.numero}");

//Exercício 2
function pares(x, y){
    var i;
    for(i = x; i <= y; i++){
        if((i%2) == 0){
            console.log(i);
        }
    }
};

pares(32, 321);

//Exercício 3

function temHabilidade(skills){
   if(skills.indexOf("Node") > -1){
       console.log("true");
   }else{
       console.log("false");
   }   
}

var skills = ['Javascript', 'React', 'React Native'];
temHabilidade(skills);

//Exercício 4

function experiencia(anos){
    if(anos >= 0 && anos <= 1)
        console.log("Iniciante");
    else if(anos > 1 && anos <= 3)
        console.log("Intermediário");
    else if(anos > 3 && anos <= 6)
        console.log("Avançado");
    else
        console.log("Jedi Master");
}

var anosEstudo = 5;
experiencia(anosEstudo);

//Exercício 5

function listarHabilidades(){

    for(const value of usuarios){
        console.log("O " + value.nome + " possui as habilidades: " + value.habilidades.join(" , "));
    }
}

var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

listarHabilidades();