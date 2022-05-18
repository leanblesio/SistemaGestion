//PERSISTENCIA
const Clientes = []; //array de objetos con clientes
const Pedidos = []; //array de objetos con pedidos
const Proveedores = []; //array de objetos con proveedores
const Productos = []; //array de objetos con productos
const Stocks = []; //array de objetos con stocks


//Generar un mnetodo del objeto ARRAY que compruebe si existe  ese valor
Array.prototype.Existe = function(x){
 let mapping = this.map(x=> x.nombre) //Solo para comparar nombres array de string
 return new Set(mapping).has(x) //hay dentro de esta lista el valor x?

}

class CRUD{

        constructor(colleccionTipo){ //Si es cliente, pedido, proveedor, producto, stocks.
            this.colleccionTipo = colleccionTipo.toLowerCase();
            switch(colleccionTipo.toUpperCase()){
                case "CLIENTES":
                    this.array = Clientes;
                    break;
                
                case "PEDIDOS":
                    this.array = Pedidos;
                
                case "PROVEEDORES":
                    this.array = Proveedores;
                    break;
                    
                case "PRODUCTOS":
                    this.array = Productos;
                    break;
                 
                case "STOCKS":
                    this.array = Stocks;    
                    
            }
        }

        Create(objetoTipo){
            if(this.array.Existe(objetoTipo)){
                console.log('YA EXISTE')
            }

        }

}


let crudClientes = new CRUD("CLIENTES"); 
crudClientes.Create(new Clientes());//INGRESAR FUNCION PARA QUE TOME LOS DATOS



//ENTIDAD CLIENTE
class Cliente{
    constructor(codigo, nombre, direccion, zona, horario, telefono){
        this.codigo = codigo;
        this.nombre = nombre;
        this.direccion = direccion;
        this.zona = zona;
        this.horario = horario;
        this.telefono = telefono;
       
    }
    }


//ENTIDAD PEDIDO 
class Pedido{
    constructor(cliente, fechaEntrega, producto, cantidad, total, iva, envio, formaPago){
        Cliente = cliente;
        this.fechaEntrega = fechaEntrega;
        this.producto = producto;
        this.cantidad = cantidad;
        this.total = total;
        this.iva = iva;
        this.envio = envio;
        this.formaPago = formaPago;
    }
}

//ENTIDAD PROVEEDOR
class Proveedor{
    constructor(nombre, direccion, horario, telefono, producto){
        this.nombre = nombre;
        this.direccion = direccion;
        this.horario = horario;
        this.telefono = telefono;
        this.producto = producto;
    }
    
    }

//ENTIDAD PRODUCTO 
class Producto{
    constructor(codigo, descripcion, precio, costo, stock){
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.costo = costo;
        this.Stock = stock;
    }
}

//ENTIDAD STOCK
class Stock{
    constructor(Producto, stock, stockMinimo){
        Producto = producto;
        this.stock = stock;
        this.stockMinimo = stockMinimo
    }
}

