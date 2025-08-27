
function calcularNotaA1(exercicios, trabalho, prova){
    return exercicios + trabalho + prova
  }
  

  function calcularNotaA2(exercicios, trabalho, prova){
   return exercicios + trabalho + prova
  }

  function calcularNotaFinal(notaA1, notaA2){
    return (notaA1 * 0.4) + (notaA2 * 0.6)
  }
  

  module.exports = {
    calcularNotaA1,
    calcularNotaA2,
    calcularNotaFinal
  }