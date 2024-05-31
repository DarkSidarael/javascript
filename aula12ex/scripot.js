function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById("imagem")
    var data = new Date()
    var tx = document.getElementById('tx')
     var hora = data.getHours()
    // var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        tx.innerHTML = 'Bom dia!'
        img.src = 'image/Sem Título-1.png'
    }else if (hora >= 12 && hora <= 18){
        tx.innerHTML = 'Boa Tarde!'
        img.src = 'image/Sem Título-2.png'
        document.body.style.background = '#C38A89'
    }else{
        tx.innerHTML = 'Boa Noite!'
        img.src = 'image/Sem Título-3.png'
        document.body.style.background = '#7958B1'
    }
}

