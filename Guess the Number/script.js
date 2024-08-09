
var numeroParaSerEncontrado = 0;
var tentativas = 0;

 function atualizar(){
    var elemento = document.getElementById('inputNumero').value

    elemento = ''

    numeroParaSerEncontrado = parseInt(Math.random() * 101)

    console.log('numero: ' + numeroParaSerEncontrado);

 }

 atualizar()

 function verificarNumero(){
   var numero = document.getElementById('inputNumero').value

   if(numero > 100 || numero < 0) {
    alert ('Aposta inválida.')
    return;
   } if (numero > numeroParaSerEncontrado){
    tentativas++
    alert('O número a ser encontrado é MENOR!🚨')
   } else if (numero < numeroParaSerEncontrado) {
    tentativas++
    alert('O número a ser encontrado é MAIOR!🚨')
   } else {
    alert(`Parabéns, você acertou em 💰${tentativas} tentativas! 🏆`)
   }
 }

