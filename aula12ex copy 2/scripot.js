function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || Number(fano.value)>ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        
       if(fsex[0].checked){
        genero = 'homem'
        if(idade >=0 && idade < 10){
            img.setAttribute('src', 'image/bebeh.png')
        } else if (idade < 25 ){
            img.setAttribute('src', 'image/menino.png')
        } else if (idade < 50){
            img.setAttribute('src', 'image/homem.png')
        } else {
            img.setAttribute('src', 'image/velho.png')
        }


       }else if (fsex[1].checked) {
        genero = 'mulher'
        if(idade >=0 && idade < 10){
            img.setAttribute('src', 'image/bebem.png')
        } else if (idade < 25 ){
            img.setAttribute('src', 'image/menina.png')
        } else if (idade < 50){
            img.setAttribute('src', 'image/mulher.png')
        } else {
            img.setAttribute('src', 'image/velha.png')
        }


       }
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
}
