
function ejercio_uno(){
    let parte_uno = ((5+2-5)**2*5);
    let parte_dos = 8/2-30;  
    let parte_tres= 2*5-3;
    let y = (parte_uno+parte_dos)/parte_tres;
    return y; 
}
console.log(ejercio_uno());

function ejercicio_dos(){
    let z = 5;
    let n = 3;
    let m = z-n;
    let parte_uno =(z+2-n)**2*m+8/2-30;
    let parte_dos =2*5-3
    let parte_tres= (parte_uno/parte_dos)**5;
    let parte_cuatro=15*3-9/3
    let y = parte_tres+parte_cuatro
    return y;
}
console.log(ejercicio_dos());

function ejercicio_tres(presion, volumen, temperatura){
    let masa = (presion*volumen)/(0.37*(temperatura+460));
    return masa;
}
console.log(ejercicio_tres(540,320,9));




