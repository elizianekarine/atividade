window.onload = function calc(){
    let valor1 = parseInt (prompt ('Digite o primeiro número'));
    let valor2 = parseInt (prompt ('Digite o segundo número'));
    let resultado, resultado2, resultado3,resultado4;
    
    
    resultado1= valor1 + valor2;
    resultado2= valor1 - valor2;
    resultado3= valor1 * valor2;
    resultado4= valor1 / valor2;
    
    document.write("A + B:" + resultado1 + "<br>");
    document.write("A - B:" + resultado2 + "<br>");
    document.write("A * B:" + resultado3 + "<br>");
    document.write("A / B:" + resultado4 + "<br>");
    
    }
    
    