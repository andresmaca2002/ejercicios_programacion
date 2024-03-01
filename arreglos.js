let nombres = ["felipe","danilo","laura "];
console.log (nombres);

nombres.push ("andres obando ","fernando ");
console.log(nombres);

let equipos = ["nacional", "america",  "cali" ];
console.log (equipos[1]);
//averiguar el total de los elementos 
let motos = ["yamaha","kawasaki ", "honda ", "suzuki ", "ducati",];
console.log (motos.length );

// sumar los numeros de  un areglo 
let numeros = [2,7,5,3,2,];
let suma = numeros.reduce(( acomulador , valorActual )=> + valorActual,0 );
// encontrar el numero mayor de un a rreglo 
let numeroMayor = math.max(...numeros ); 
console.log(numeroMayor);
// invertir los textos de un arreglo 
let frutas = [ "manzanas ", "pera", "guayaba" , "lulo "," mango "]
let frutasinvertidas = frutas.slice (). reverse ();
console.log(frutasinvertidas );
    // agrupar arreglos 
    let mujeres = [ "laura ","sofia", "valentina", " daniela "];
    let