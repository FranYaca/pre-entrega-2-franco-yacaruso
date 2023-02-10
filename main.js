
//CARGA DE STOCK



//objeto

class Producto {
    constructor (nombre,precio,stock){
        this.nombre = nombre
        this.precio = precio
        this.stock = stock


    }
    

}



//array
let lista_productos = []

//carga de stock

for(let i = 0; i < 3; i = i + 1){
    let nombre = prompt("Ingrese nombre");
    let precio = parseInt(prompt("Ingrese precio"));
    let stock = parseInt(prompt("Ingrese stock"));
    

    let nuevo_producto = new Producto(nombre, precio, stock);

    lista_productos.push(nuevo_producto);

}


console.log("Detalles de los productos: ", lista_productos);

//control de stock

for(let obj_producto of lista_productos){
    console.log(obj_producto);
if(obj_producto.stock > 0){
    console.log(obj_producto.nombre, "Disponible");
}
else{
    console.log(obj_producto.nombre, "Sin stock");
}

}

//Filtrado de productos con stock para la venta

function productos_venta (producto){
    return producto.stock > 0
}

let resultado_filter = lista_productos.filter(productos_venta);
console.log("Productos con stock para la venta: ", resultado_filter);

//funcion para calcular el iva y el precio final de cada producto

function agregar_iva(producto){
    let iva = producto.precio * 0.21;

    return {
        nombre: producto.nombre,
        precio: producto.precio + iva,
        stock: producto.stock
         
    }
}

console.log("Produnctos sin iva: ", lista_productos)
let resultado_map = lista_productos.map(agregar_iva);
console.log("Productos con iva: ",resultado_map);

