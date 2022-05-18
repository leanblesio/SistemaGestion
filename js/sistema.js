console.log('Sistema de gestion')
let finDato = 0;


function validacion(opcionElejida){
   
    let opcionValida = (opcionElejida >= 0 && opcionElejida <= 4) //determinar opcion valida
    let preguntaOpcion = () => validacion(parseInt((prompt('Ingrese opcion del menu'))));
    console.log('Opcion elejida: '+opcionElejida)
    console.log('opcion valida: ' +opcionValida)

    if(isNaN(opcionElejida) ){
        return preguntaOpcion();
    } 
    if(!opcionValida){
        return preguntaOpcion();
    }else{
        return opcionElejida;
    }
}


while (finDato == 0){
let opcionMenu = validacion(parseInt(prompt('MENU: 1.Cliente / 2.Proveedor / 3.Pedido / 4.Despacho / 0.Salir')))
console.log('Opcion de menu: ', +opcionMenu)

switch(opcionMenu){
    case 1:
    // aca tendria que iniciar el clientes.js
    console.log('Menu de cliente. ')

    fucCliente();
    

    break;

    case 2:
    //
    console.log('Menu de proveedores. ')
    break;

    case 3:
    //
    console.log('Menu de Pedido. ')
    break;

    case 4:
    //
    console.log('Menu de Despacho. ')
    break;

    case 0:
    //Salir
    console.log('Salir. ')
    break;
}



}