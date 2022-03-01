// FACTOR PARA MULTIPLICAR
let validateNumber = () => {
    let value = parseInt(prompt('Ingrese un numero del 1 al 20', 'Ingresa valor'));
    if (value > 0 && value <= 20) { // CONDICION PARA ENTRAR

        for (let i = 1; i <= value; i++) {
            let res = 1;
            for (let j = 1; j <= i; j++) {
                res = res * j;
            }
            console.log(`${i} * ${value} = ${(value * i)}`); // MULTIPLICACION
            console.log(`Factorial de ${i} es: ${res}`); // FACTORIAL

            // COL1
            let node1 = document.createElement("div");
            let number1 = document.createTextNode(`${i} X ${value} = ${(value * i)}`);
            node1.appendChild(number1);
            document.getElementById("col1").appendChild(node1);

            // COL2
            let node2 = document.createElement("div");
            let number2 = document.createTextNode(`Factorial de ${i} es: ${res}`);
            node2.appendChild(number2);
            document.getElementById("col2").appendChild(node2);
        }
    } else {
        alert('Número fuera del rango');
        validateNumber();
    }
}
validateNumber();