function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var mes = data.getMonth()
    var day = data.getDay()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 5) {
                //Bebê
                img.setAttribute('src', '../Site Pessoa/img/bebemenino.png')
            }else if (idade >= 5 && idade < 12) {
                //Criança
                img.setAttribute('src', '../Site Pessoa/img/criançamenino.png')
            } else if (idade >= 12 && idade < 21) {
                //Adolescente
                img.setAttribute('src', '../Site Pessoa/img/adolescentemenino.png')
            } else if (idade >= 21 && idade < 30) {
                //Jovem Adulto
                img.setAttribute('src', '../Site Pessoa/img/jovemhomem.png')
            } else if (idade >= 30 && idade < 65) {
                //Adulto
                img.setAttribute('src', '../Site Pessoa/img/adultohomem.png')
            } else if (idade >= 65 && idade < 130) {
                //Idoso
                img.setAttribute('src', '../Site Pessoa/img/idosohomem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 5) {
                //Bebê
                img.setAttribute('src', '../Site Pessoa/img/bebemenina.png')
            }else if (idade >= 5 && idade < 12) {
                //Criança
                img.setAttribute('src', '../Site Pessoa/img/criançamenina.png')
            } else if (idade >= 12 && idade < 21) {
                //Adolescente
                img.setAttribute('src', '../Site Pessoa/img/adolescentemenina.png')
            } else if (idade >= 21 && idade < 30) {
                //Jovem Adulto
                img.setAttribute('src', '../Site Pessoa/img/jovemmulher.png')
            } else if (idade >= 30 && idade < 65) {
                //Adulto
                img.setAttribute('src', '../Site Pessoa/img/adultomulher.png')
            } else if (idade >= 65 && idade < 130) {
                //Idoso
                img.setAttribute('src', '../Site Pessoa/img/idosomulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}