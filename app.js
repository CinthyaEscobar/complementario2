let arrayProductos = [];

class Producto {
    constructor(nombre, marca, precio) {
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
    }
}

const productos = [
    { nombre: 'Delineador de ojos', marca: 'Maybelline', precio: 4000 },
    { nombre: 'Base de maquillaje', marca: 'Loreal', precio: 7500 },
    { nombre: 'Paleta de sombra de ojos', marca: 'NYX', precio: 14000 }

]

let opcion = prompt(
    " \n Bienvenido/a, Por favor, ingrese una opcion: \n 1: Agregar Producto \n 2: Mostrar Productos \n 3: Salir"
);

while ( opcion !== "3"){
    if (opcion === "1"){
        agregarProducto(arrayProductos);
    }
    if (opcion === "2"){
        verProductos(arrayProductos);
    }
    
    opcion = prompt (
        "Vuelva a ingresar una opcion: \n 1: Agregar producto nuevo \n 2: Mostrar carrito  \n 3: Salir"
    );
}


function verProductos() {
    productos.map((prod) => {
        alert(`Productos ya guardados:\n Nombre: ${prod.nombre} \n Precio $${prod.precio} \n Marca: ${prod.marca}`)
    })

    arrayProductos.forEach((producto)=>{
        alert(`Productos agregados: \n Nombre: ${producto.nombre} \n Marca: $${producto.precio} \n Precio:${producto.marca}`)
    })
}


function agregarProducto(arrayProductos) {
    let nombre = prompt('Ingrese nombre producto')
    let marca = prompt('Ingrese marca producto')
    let precio = prompt('Ingrese precio producto')
    const nuevoProducto = new Producto(nombre, marca, precio)
    arrayProductos.push(nuevoProducto)
    alert('Nuevo producto añadido')
    console.log(nuevoProducto);
}








