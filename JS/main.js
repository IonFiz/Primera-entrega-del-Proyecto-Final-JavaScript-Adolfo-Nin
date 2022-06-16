const BBDD = [
    {
        "id":1,
        "nombre":"CABINA NXS 1",
        "img":"./images/cabina-standard.png",
        "precio":13000,
        "cantidad":1
    },
    {
        "id":2,
        "nombre":"CABINA NXS 2",
        "img":"./images/cabina-standard.png",
        "precio":14000,
        "cantidad":1
    },
    {
        "id":3,
        "nombre":"CABINA FULL",
        "img":"./images/cabina-standard.png",
        "precio":21000,
        "cantidad":1
    },
    {
        "id":4,
        "nombre":"CABINA FULL PRO",
        "img":"./images/cabina-standard.png",
        "precio":26000,
        "cantidad":1
    },
    {
        "id":5,
        "nombre":"COMBO X2",
        "img":"./images/cabina-standard.png",
        "precio":8500,
        "cantidad":1
    },
    {
        "id":6,
        "nombre":"COMBO SUB",
        "img":"./images/cabina-standard.png",
        "precio":13000,
        "cantidad":1
    },
    {
        "id":7,
        "nombre":"COMBO X4",
        "img":"./images/cabina-standard.png",
        "precio":16000,
        "cantidad":1
    },
    {
        "id":8,
        "nombre":"COMBO SUB PLUS",
        "img":"./images/cabina-standard.png",
        "precio":20000,
        "cantidad":1
    },
]

const carrito = [];

let total = 0;


function renderizarProductos(){

     let tienda = document.getElementById('tienda');
     
     BBDD.forEach((e)=>{
        
        let productoHTML = `
        <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${e.img}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${e.nombre}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.${e.precio}</p>
    <button class="btn btn-primary" onClick="agregarProductoAlCarrito(${e.id})">Anadir Al Carrito</button>
    </div> 
    </div>
    </div>
        
        `
        tienda.innerHTML += productoHTML
     });
}

renderizarProductos();

function agregarProductoAlCarrito(id){

    let producto = BBDD.find(producto=>producto.id == id);

    let productoEnCarrito = carrito.find(producto => producto.id == id);
    
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    }else {
        producto.cantidad = 1;
        carrito.push(producto);
        
    }

    renderizarCarrito();
}

function renderizarCarrito(){
    
    let carritoHTML = document.getElementById('carrito');

    html = '';

    carrito.forEach((producto, id)=>{

        html += `
        <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${producto.img}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p>${producto.precio}$</p>
    <p>Cantidad: ${producto.cantidad}</p>
    <button class="btn btn-danger" onClick="eliminarProductoAlCarrito(${producto.id})">Eliminar del Carrito</button>
    </div> 
    </div>
    </div>
        
        `

    })

    carritoHTML.innerHTML = html;

    calcularTotal();
}

function calcularTotal(){
    carrito.forEach(producto => {
        console.log(producto);
        total += producto.cantidad * producto.precio;
    })

    console.log(total)
}