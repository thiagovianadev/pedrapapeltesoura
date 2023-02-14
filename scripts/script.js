var vez = 0
var op_player = 0
function cliquepd(){
    if (vez==0){
    var opplay = document.getElementsByClassName('pl')
    //var res = document.getElementById('resulplay')
    var res = document.querySelector('#resulplay')
    for (var i=0;i<opplay.length;i++){
    opplay[i].style.backgroundColor = '#3b5009'
    }
    res.innerHTML = '<img src="imagens/pedra.png" alt="">'
    vez++
    op_player = 1
    vezComp()
}
}
function cliquepp(){
    if (vez==0){
    var opplay = document.getElementsByClassName('pl')
    //var res = document.getElementById('resulplay')
    var res = document.querySelector('#resulplay')
    for (var i=0;i<opplay.length;i++){
    opplay[i].style.backgroundColor = '#3b5009'
    }
    res.innerHTML = '<img src="imagens/paper.png" alt="">'
    vez++
    op_player = 2
    vezComp()
}}
function cliquets(){
    if (vez==0){
    var opplay = document.getElementsByClassName('pl')
    //var res = document.getElementById('resulplay')
    var res = document.querySelector('#resulplay')
    for (var i=0;i<opplay.length;i++){
    opplay[i].style.backgroundColor = '#3b5009'
    }
    res.innerHTML = '<img src="imagens/scissor.png" alt="">'
    vez++
    op_player = 3
    vezComp()
}
}
var vezc =Math.floor(Math.random() * 3 + 1)
function vezComp(){
    var rescomp = document.querySelector('#resulcomp')
    switch (vezc){
        case 1: 
        rescomp.innerHTML = '<img src="imagens/pedra.png" alt="">'
        break
        case 2: 
        rescomp.innerHTML = '<img src="imagens/paper.png" alt="">'
        break
case 3: 
rescomp.innerHTML = '<img src="imagens/scissor.png" alt="">'
break
}
resultado()
}
setTimeout(function resultado(){
    var resfinal = document.querySelector('#resultado')
if (op_player == 1){
    if (vezc ==1){
        resfinal.innerHTML = 'empate'
    } else if (vezc == 2){
        resfinal.innerHTML = 'você perdeu'
    } else if (vezc == 3){
        resfinal.innerHTML = 'você ganhou'
    }
}
if (op_player == 2){
    if (vezc ==1){
        resfinal.innerHTML = 'você ganhou'
    } else if (vezc == 2){
        resfinal.innerHTML = 'empate'
    } else if (vezc == 3){
        resfinal.innerHTML = 'você perdeu'
    }
}
if (op_player == 3){
    if (vezc ==1){
        resfinal.innerHTML = 'você perdeu'
    } else if (vezc == 2){
        resfinal.innerHTML = 'você ganhou'
    } else if (vezc == 3){
        resfinal.innerHTML = 'empate'
    }
}
},1000)