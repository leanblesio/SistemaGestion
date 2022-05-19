const cliente =[
    {codigo:01, nombre:"Juan Alberto", direccion:"Fantacia 1234", zona:"Sur", telefono:"3413585463", horario:"09:00 - 12:00 / 13:00 - 19:00"},
    {codigo:02, nombre:"Marina", direccion:"San Martin 5234", zona:"Sur", telefono:"3414758614", horario:"09:00 - 17:00"},

]



// class Cliente{
//     constructor(codigo, nombre, direccion, zona, horario, telefono){
//         this.codigo = codigo;
//         this.nombre = nombre;
//         this.direccion = direccion;
//         this.zona = zona;
//         this.horario = horario;
//         this.telefono = telefono;
       
//     }
// //     }

// function altaCliente(params) {
//     let arrCliente = [];

//     let codigoCliente = prompt('Codigo:')
//     let nombreCliente = prompt('Nombre:');
//     let direccionCliente = prompt('Direccion: ')
//     let zonaCliente = prompt('Zona:')
//     let horarioCliente = prompt('Horario:')
//     let telefonoCliente = prompt('Telefono:')

//     arrCliente.push(new Cliente,
//         Cliente.codigo = codigoCliente,
//         Cliente.nombre = nombreCliente,
//         Cliente.direccion = direccionCliente,
//         Cliente.zona = zonaCliente,
//         Cliente.horario = horarioCliente,
//         Cliente.telefono = telefonoCliente)

//      for (const cl of arrCliente){
//             console.log(cl.nombre)
     
           
//         }
    
// }

// function bajaCliente(codigo, arreglo){
//     //Metodo para eliminar cliente
//     let Verif2 = () => parseInt(prompt('Ingrese codigo de cliente a eliminar'))

//     let verifBajaCliente = arreglo.includes(codigo)
//         if(verifBajaCliente == false){
//             alert('Cliente inexistente')

//             return Verif2;
//         } else{
//             let posicion = arreglo.indexOf(codigo)
//         }
//      arreglo.splice(posicion, 1)   

// }


// function menuCliente(letra){  
    
//     alert('MENU CLIENTE')
//     let opcionMenuCliente = prompt('1. Alta / 2.Baja / 3.Modificacion')

//     switch (opcionMenuCliente){ //ver la forma para hacer que los menus sean una funciuon y pasar parametros.

//         case 1:
//             //alta
//         break;
//         case 2:
//             //baja
//             alert('Baja cliente')
//             bajaCliente(parseInt(prompt('Ingrese codigo de cliente a eliminar')), arrCliente)

//          break;
//         case 3:
//             //modificacion
//         break;

//     }

// }

