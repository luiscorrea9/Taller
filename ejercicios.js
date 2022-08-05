
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

function ejercicio_cuatro(edad){
    let numero_pulsaciones=(200-edad)/10;
    return numero_pulsaciones;
}

console.log(ejercicio_cuatro(50));


function ejercicio_cinco(inversor_uno, inversor_dos, inversor_tres){
    let total_invertido=inversor_uno+inversor_dos+inversor_tres;
    let porcentaje_uno= (100*inversor_uno)/total_invertido;
    let porcentaje_dos= (100*inversor_dos)/total_invertido;
    let porcentaje_tres= (100*inversor_tres)/total_invertido;
    return ` El porcentaje del primer inversor es: ${porcentaje_uno}
    \n El porcemtaje del segundo inversor es: ${porcentaje_dos}
    \n El porcentaje del tercer inversor es: ${porcentaje_tres}
    \n El valor total invertido es: ${total_invertido}`;
}
console.log(ejercicio_cinco(50,60,70));

function ejercicio_final(monto_prestamo){
    let interes=monto_prestamo*0.24;
    let monto_total=monto_prestamo+interes;
    let cuota_especial=(monto_total/2)/4;
    let cuota_ordinaria=(monto_total/2)/20;
    return `El monto total a pagar es: ${monto_total}
    \n El monto por cuotas especiales es: ${cuota_especial}
    \n El monto pot cuotas ordinarias es: ${cuota_ordinaria}`;
}

console.log(ejercicio_final(100000));