function carregar() {
    var msg = document.querySelector('div#mensagem')
    var foto = document.querySelector('img#imagem')
    //var foto = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `${hora} `

     if (hora > 0 && hora < 12) {
            msg.innerHTML=`${hora} Da Manhã`  
            foto.src='manha-img.png'
            document.body.style.background ='#e2cd9f'
        }else if (hora >=12 && hora < 18 ) {
            msg.innerHTML = `${hora} Da Tarde`
            foto.src='tarde-img.png'
            document.body.style.background = '#b9846f'
        }else {
            msg.innerHTML = `${hora} Da Noite`
            foto.src='noite-img.png'
            document.body.style.background = '#515154'
}
}