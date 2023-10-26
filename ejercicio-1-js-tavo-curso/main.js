//ejercicio 1

function factorial(num){
    //Step 1: display "dame el numero a factorializar e.e:"
    //Step 2: input the number from the user and store it in a variable called num

    num = prompt("dame el numero a factorializar e.e:")

    //Step 3: obten los numeros naturales iguales o anteriores a el

    let multiplicador = num
    let resta = 2
    let restador = 1;
    
    while(resta > 1){

        resta = num - restador;
        restador = ++restador;

        //Step 4: Ir multiplicando esos numeros

        multiplicador = multiplicador * resta;
    } 

    //Step 5: Display "El factorial de " + num + " es " + multiplicador

    console.log ("El factorial de " + num + " es " + multiplicador);
}

factorial();