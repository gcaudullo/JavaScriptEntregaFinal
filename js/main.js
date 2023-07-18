const productos = [];
const urlProductos = "./productos.json";


class producto {
    constructor(id, nombre, imagen, alt, categoria, precio) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.alt = alt;
        this.categoria = categoria;
        this.precio = precio;
    }
}

async function cargoArrayProductos() {
    try {
        const response = await fetch(urlProductos);
        const data = await response.json();
        productos = data;
        console.log(productos);
        cargarProductos();
    }
    catch (error) {
        console.log("Error al cargar productos:", error)
    }


}


const contenedorProductos = document.querySelector("#contenedor-productos")
const botonesCat = document.querySelectorAll(".btn-cat")
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const cantPrdEnCarrito = document.querySelector("#numero");

function cargarProductos(productos) {
    contenedorProductos.innerHTML = "";
    productos.forEach(producto => {
        const { id: id, imagen: imagen, alt: alt, nombre: nombre, precio: precio } = producto
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${imagen}" alt="${alt}">
        <div class="producto-detalles">
            <h3 class="producto-nombre">${nombre}</h3>
            <p class="producto-precio"><strong>USD ${precio}</strong></p>
            <button class="producto-agregar" id="${id}">Agregar</button>
        </div>
        `;
        contenedorProductos.append(div);
    });
    actualizoBotonesAgregar();
}

cargoArrayProductos()
console.log("cargue productos")


botonesCat.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCat.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "Todos") {
            const productoCategoria = productos.find(producto => producto.categoria === e.currentTarget.id);
            tituloPrincipal.innerHTML = productoCategoria.categoria;

            const btnprod = productos.filter(producto => producto.categoria === e.currentTarget.id);
            cargarProductos(btnprod);
        } else {
            tituloPrincipal.innerHTML = "Todos nuestros productos"
            cargarProductos(productos)

        }

    })
})

function actualizoBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar")
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}

let carrito
const carritoLStorage = JSON.parse(localStorage.getItem("carrito"));
if (carritoLStorage) {
    carrito = carritoLStorage;
    actualizoCantPrdEnCarrito();
} else {
    carrito = [];
}

function agregarAlCarrito(e) {
    const idBtn = e.currentTarget.id;
    const productoAAgregar = productos.find(producto => producto.id === parseInt(idBtn));

    if (carrito.some(producto => producto.id === parseInt(idBtn))) {
        const index = carrito.findIndex(producto => producto.id === parseInt(idBtn));
        carrito[index].cantidad++;

    } else {
        productoAAgregar.cantidad = 1;
        carrito.push(productoAAgregar);
    }
    actualizoCantPrdEnCarrito();
    localStorage.setItem("carrito", JSON.stringify(carrito));
    Toastify({
        text: `El Producto ${productoAAgregar.nombre} \n fue agregado al carrito`,
        duration: 3000,
        destination: "../carrito.html",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

function actualizoCantPrdEnCarrito() {
    let prdEnCarrito = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numero.innerText = prdEnCarrito;
}