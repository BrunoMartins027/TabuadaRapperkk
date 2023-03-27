
let calculo = prompt("robo rapper da tabuada \n" +
"Informe um numero ai parça")

let resultado = ""
for (let fator = 1; fator <= 20; fator++) {
    resultado += "->" + calculo + " * " + fator + " = " + (calculo * fator) + "\n"
    
}
alert("resultado da tabuada do rapper" + calculo + "\n\n" + resultado)