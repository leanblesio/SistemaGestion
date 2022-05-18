//PERSISTENCIA
const Clientes = []; //array de objetos con clientes
const Pedidos = []; //array de objetos con pedidos
const Proveedores = []; //array de objetos con proveedores
const Productos = []; //array de objetos con productos
const Stocks = []; //array de objetos con stocks

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

