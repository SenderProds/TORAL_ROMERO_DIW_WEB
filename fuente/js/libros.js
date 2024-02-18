let botonesCarrito = document.querySelectorAll("#btnAdd");
let productosCarrito = 0;

let poppupCarrito = document.getElementById('carrito');
let cantidadProductos = document.getElementById('productos');

console.log(botonesCarrito);

botonesCarrito.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        productosCarrito++;

        if(poppupCarrito.classList.contains('ocultar')){
            poppupCarrito.classList.remove('ocultar');
            poppupCarrito.classList.add('mostrarCarrito');

            cantidadProductos.textContent = productosCarrito;
        }else{
            cantidadProductos.textContent = productosCarrito;

        }

    });


});