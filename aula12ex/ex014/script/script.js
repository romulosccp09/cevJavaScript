function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()
    
    msg.innerHTML = `Hora certa são ${hora}:${min}:${sec}!`

    if(hora >= 0 && hora< 12){
        img.src = 'imagens/manha.png'
        document.body.style.background = '#fce590'
        msg.innerHTML = 'BOM DIA'
    } else if(hora >=12 && hora < 16){
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#cf9a17'   
    } else if( hora >=18 && hora <= 23){
        img.src = 'imagens/noite.png'
        document.body.style.background = "#8b3000"
    }
}