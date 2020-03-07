// creamos un funcion que nos ayude a nuestro componten a 
// cambiar de color segun se vaya acabando el presupuesto 

export const revisarPresupuesto = (presupuesto, restante) => {
    let clase; 
    if( ( presupuesto/4) > restante) {
        // si el presupuesto es mayor al 75 % del gasto 
        // cambiamos la cclase a que ya se nos acaba el presu´pues
        clase = 'alert alert-danger';
    }else if((presupuesto/2) > restante) {
        // si y gastamos ams del 50 % gastamos la clase 
        clase = 'alert alert-warning';
    } else { 
        // si no gastamos vamo bien
        clase = 'alert alert-success';
    }

    return clase;
}