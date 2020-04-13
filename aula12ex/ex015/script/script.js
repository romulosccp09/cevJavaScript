function verificar(){
    var data = new Date()
    var ano =data.getFullYear()
    var fAno = window.document.querySelector('input#txtAno') // Atribui a variável fAno, o valor da caixa com id txtAno.
    var res = window.document.querySelector('div#res') // variável res mostra o resultado na div res.
    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique os dados, e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex') // atribui a var fsex o valor selecionado de sexo.
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img') // variável img, cria um elemento uma imagem via javaScript.
        img.setAttribute('id','foto') // cria id foto, para a variável img.
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', './imagem/menino.png')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', './imagem/homem.png')
            } else{
                //Idoso
                img.setAttribute('src', './imagem/idoso.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'

            if(idade >= 0 && idade <=10){
                //criança
                img.setAttribute('src', './imagem/menina.png')
            } else if(idade <21){
                //jovem
                img.setAttribute('src', './imagem/jovemMulher.png')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', './imagem/mulherAdulta.png')
            } else{
                //Idoso
                img.setAttribute('src', './imagem/idosa.png')
            }
        }
        res.style.textAlign = 'center' // Alinhando a resposta via Java Script.
        res.innerHTML = `Detectamos ${genero}, com idade ${idade} anos!`
        res.appendChild(img)
    }

}