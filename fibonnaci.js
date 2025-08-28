function Fibonnaci (limite){
    let inicio = 1;
    let fim = 0;
    let sequencia = 0;

    console.log(`Esses são os ${limite} primeiros valores de fibonnaci`)


    for(let count = 1 ; count <= limite; count++){
        console.log(fim);
        sequencia = inicio + fim;
        fim = inicio;
        inicio = sequencia;
    }

    console.log(`Esses são os ${limite} primeiros valores de fibonnaci`)
}
Fibonnaci(100);