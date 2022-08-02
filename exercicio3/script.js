const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
const pokemon2 = {...pokemon1}
pokemon2.nome = "Squirtle"
pokemon2.tipo = "Água"
console.log(pokemon1);
console.log(pokemon2);
pokemon1.ataques = []
pokemon1.ataques.push({
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
})
pokemon2.ataques = [...pokemon1.ataques]
pokemon1.ataques.push({
    nome: "Folha Navalha",
    dano: 45,
    tipo: "grama",
    precisao: 100
})
pokemon2.ataques.push({
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100
})

console.log("Bulbasaur use Folha Navalha: ",pokemon1.ataques[1]);
console.log("Squirtle use Jato de Água agora: ",pokemon2.ataques[1]);