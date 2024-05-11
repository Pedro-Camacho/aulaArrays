const nomes=['pedro','clara', 'Pai', 'mae']
//add ultima
nomes.push("Caio")
//tchau ultimoitem
nomes.pop()
//adiciona na primeira
nomes.unshift()
//remove primeiro
nomes.shift()
//console.log(nomes)
/*
nomes.forEach(
    function passName(nomes){
        console.log(`Olá ${nomes}`);
    }
)
*/
/*
nomes.forEach((pessoas)=>{
    console.log(`Olá ${pessoas.toLowerCase()}`)
})
nomes.forEach(pessoas=>{console.log(`Ola ${pessoas.toLowerCase}`)})
*/

/*
const dobra=[1,2,3]
const dobrado=dobra.map(elemento=>elemento*2)
console.log(dobra)
console.log(dobrado)
*/
/*
const cordas=['oi','tudo','bem']

const caps=cordas.map(elemento=>elemento.toLocaleUpperCase())

console.log(cordas)
console.log(caps)

function upperCase(nomes){
    const test=nomes.map(elemento=>elemento.toUpperCase())
    console.log(test)
}

upperCase(cordas);

*/

const filmes=[
    {
        nome:"Gente Grande",
        diretor: "Adam Sandler",
        ano: 2012

    },
    {
        nome: "Todo mundo em panico",
        diretor: "Michael Jackson",
        ano: 2005
    },
    {
        nome: "Meninas Malvadas",
        diretor: "Lindsay Lohan",
        ano: 2002
    }
]