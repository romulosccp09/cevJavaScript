var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var segundo = agora.getSeconds()
console.log(`São exatamente ${hora}:${minuto}:${segundo}`)

if(hora > 6 && hora< 12){
    console.log('Bom dia!!')
} else if(hora > 17 && hora < 24){
    console.log('Boa noite')
} else if(hora >=0 && hora <= 5){
    console.log('boa Madrugada')
} else if(hora =12 && hora <=17){
    console.log('Boa tarde!')
} 