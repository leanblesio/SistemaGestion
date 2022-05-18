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