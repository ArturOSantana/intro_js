let lado1 =5
let lado2 = 1
let lado3 = 5



if (lado1 == lado2 && lado2 == lado3){
    console.log("É um triangulo equilatero")
}else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3){
        console.log("É um triangulo Escaleno")
}else {
    console.log("É um triangulo Isosceles")
}

