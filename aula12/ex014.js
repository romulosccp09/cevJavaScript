//Dias da Semana com switch case
// utiizando getDay Domingo(0), Segunda(1), Terça(2), Quarta(3), Quinta(4), Sexta(5), Sábado(6).
// utilizando getUTCDay Dom(1), Seg(2), Ter(3), Qua(4),Qui(5), Sex(6), Sáb(7).

var agora = new Date()
var diaSem = agora.getUTCDay()
//console.log(diaSem)

switch(diaSem){
    case 1: 
        console.log('Domingo')
        break
    case 2: 
        console.log('Segunda')
        break
    case 3:
        console.log('Terça')
        break
    
    case 4:
        console.log(`Quarta`)
        break
    case 5: 
        console.log('Quinta')
        break
    case 6: 
        console.log('Sexta')
        break
    case 7: 
        console.log('Sábado')
        break
}