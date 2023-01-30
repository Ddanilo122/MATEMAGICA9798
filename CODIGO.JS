function add(){
var usuario1 =document.getElementById('nome1').value
 var usuario2=document.getElementById('nome2').value
localStorage.setItem('pessoa1',usuario1)
localStorage.setItem('pessoa2',usuario2)
window.location="TELA2.HTML"
}
function carregar(){
    var nm1=localStorage.getItem('pessoa1')
    document.getElementById('legendaNm1').innerHTML= nm1

    var nm2=localStorage.getItem('pessoa2')
    document.getElementById('legendaNm2').innerHTML=nm2
    document.getElementById('playerResposta').innerHTML=nm1
    document.getElementById('playerPergunta').innerHTML=nm2
}
 function enviarPalavra(){
    number1=document.getElementById('numer1').value
    number2=document.getElementById('numer2').value
    resposta=parseInt(number1)*parseInt(number2)
questao='<h4>'+number1+'X'+number2+'</h4>';
caixa="<br>Resposta:<input type='number' id='input_check_box'>";
buton="<br><br><button class='btn btn-info'onclick='check()'>Verificar</button>"
row=questao+caixa+buton;
document.getElementById('output').innerHTML=row
document.getElementById('numer1').value=''
document.getElementById('numer2').value=''


}
 