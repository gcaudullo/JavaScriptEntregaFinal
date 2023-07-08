const carrito = JSON.parse(localStorage.getItem("carrito"));

const carritoVacio = document.querySelector("#carrito-vacio");
const carritoProductos = document.querySelector("#carrito-productos");
const carritoAcciones = document.querySelector("#carrito-acciones");
const carritoComprado = document.querySelector("#carrito-comprado");
let eliminarProducto = document.querySelector(".carrito-producto-eliminar");
const btnVaciar = document.querySelector("#acciones-vaciar-carrito");
const total = document.querySelector("#Total");
const btnComprar = document.querySelector("#carrito-acciones-comprar");

function actualizarCarrito() {
    if (carrito && carrito.length > 0) {

        carritoVacio.classList.add("deshabilitar");
        carritoProductos.classList.remove("deshabilitar");
        carritoAcciones.classList.remove("deshabilitar");
        carritoComprado.classList.add("deshabilitar");

        carritoProductos.innerHTML = "";

        carrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img class="producto-imagen-carrito"
                    src="${producto.imagen}"
                    alt="${producto.alt}">
                <div class="carrito-producto-titulo">
                    <small>Título</small>
                    <h3 class="producto-nombre">${producto.nombre}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>CANTIDAD</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>USD ${producto.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>USD ${producto.cantidad * producto.precio}</p>
                </div>
                <button id="${producto.id}" class="carrito-producto-eliminar"><i class="bi bi-trash3-fill"></i></button>
            `;
            carritoProductos.append(div);
        })
    } else {
        carritoVacio.classList.remove("deshabilitar");
        carritoProductos.classList.add("deshabilitar");
        carritoAcciones.classList.add("deshabilitar");
        carritoComprado.classList.add("deshabilitar");
    }
    actualizoBotonesEliminar();
    calculoTotal()
}

actualizarCarrito()


function actualizoBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar")
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito)
    })
}

function eliminarDelCarrito(e) {
    const idBtn = e.currentTarget.id;
    const index = carrito.findIndex(producto => producto.id === parseInt(idBtn))
    if (carrito[index].cantidad > 1) {
        carrito[index].cantidad--;
    } else {
        carrito.splice(index, 1)
    }
    actualizarCarrito()
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function actualizoBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar")
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}

btnVaciar.addEventListener("click", () => {
    carrito.splice(0, carrito.length)
    actualizarCarrito()
    localStorage.setItem("carrito", JSON.stringify(carrito));
})


function calculoTotal() {
    const totalCalc = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    console.log(totalCalc);
    total.innerText = `USD ${totalCalc}`

}

btnComprar.addEventListener("click", () => {
    carrito.splice(0, carrito.length)
    localStorage.setItem("carrito", JSON.stringify(carrito));
    carritoVacio.classList.add("deshabilitar");
    carritoProductos.classList.add("deshabilitar");
    carritoAcciones.classList.add("deshabilitar");
    carritoComprado.classList.remove("deshabilitar");

})

