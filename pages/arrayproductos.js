const productosInformaticos = [
    {
     id: 1,
     nombre: "Tarjeta de Memoria",
     descripcion: "Memoria RAM DDR3 ValueRAM.",
     precio: 75000,
     imagen: "../imgs/productos/producto_01.png",
     carrito: "../imgs/productos/carrito.svg",
     destacado: true
    },

    {
     id: 2,
     nombre: "Placa de Video ASUS",
     descripcion: "ASUS TUF Gaming Radeon™ RX 6500 XT OC Edition 4GB GDDR6 cuenta con una suprema refrigeración y gran durabilidad",
     precio: 150000,
     imagen: "../imgs/productos/producto_02.png",
     carrito: "../imgs/productos/carrito.svg",
     destacado: true
    },

    {
     id: 3,
     nombre: "Microprocesador Intel I5-12400",
     descripcion: "Núcleos totales, N.º de núcleos de rendimiento, Frecuencia turbo máxima de núcleo de rendimiento",
     precio: 120000,
     imagen: "../imgs/productos/producto_03.png",
     carrito: "../imgs/productos/carrito.svg",
     destacado: true
    },

    {
     id: 4,
     nombre: "Disco Solido",
     descripcion: "Disco Sólido Crucial 250GB M.2 P2 PCIe 3.0 X4 NVMe 2400Mbps.",
     precio: 200000,
     imagen: "../imgs/productos/producto_04.png",
     carrito: "../imgs/productos/carrito.svg",
     destacado: true
    },

    {
     id: 5,
     nombre: "Motherboard AMD B450",
     descripcion: "AM4 Socket: Supports AMD Ryzen™ 5000 series / Ryzen™ 5000 G-Series/ 3rd Gen Ryzen™.",
     precio: 1200,
     imagen: "../imgs/productos/producto_05.png",
     carrito: "../imgs/productos/carrito.svg",
     destacado: true
    },

    {
     id: 6,
     nombre: "Fuente Full Modular Gigabyte 750w",
     descripcion: "Certificación 80 PLUS Gold, Diseño completamente modular.",
     precio: 1200,
     imagen: "../imgs/productos/producto_06.png",
     carrito: "../imgs/productos/carrito.svg",
     destacado: true
    },
];

const arrayCarrito = []
const contenedorproductos = document.querySelector('#contenedorproductos')
const estadoCarrito = document.querySelector('#estado-carrito')
const formatoPrecio = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0
})

function htmlcards(arrayProductos) {
    const fragment = document.createDocumentFragment()

    arrayProductos.forEach(function(elemento) {
        const tarjeta = document.createElement('article')
        tarjeta.classList.add('producto')

        const marcoImagen = document.createElement('div')
        marcoImagen.classList.add('producto-imagen')

        const imagen = document.createElement('img')
        imagen.src = elemento.imagen
        imagen.alt = elemento.nombre
        imagen.loading = 'lazy'
        marcoImagen.append(imagen)

        const nombre = document.createElement('h3')
        nombre.textContent = elemento.nombre

        const descripcion = document.createElement('p')
        descripcion.classList.add('producto-descripcion')
        descripcion.textContent = elemento.descripcion

        const precio = document.createElement('p')
        precio.classList.add('producto-precio')
        precio.textContent = formatoPrecio.format(elemento.precio)

        const boton = document.createElement('button')
        boton.type = 'button'
        boton.classList.add('agregar-al-carrito')
        boton.setAttribute('aria-label', `Añadir ${elemento.nombre} al carrito`)

        const iconoCarrito = document.createElement('img')
        iconoCarrito.src = elemento.carrito
        iconoCarrito.alt = ''
        iconoCarrito.setAttribute('aria-hidden', 'true')

        const textoBoton = document.createElement('span')
        textoBoton.textContent = 'Añadir al carrito'
        boton.append(iconoCarrito, textoBoton)

        tarjeta.append(marcoImagen, nombre, descripcion, precio, boton)
        fragment.append(tarjeta)
        addToCart(boton, elemento)
    })

    contenedorproductos.append(fragment)
}

function addToCart(boton, producto) {
    boton.addEventListener('click', function() {
        arrayCarrito.push(producto)
        estadoCarrito.textContent = `${producto.nombre} se agregó al carrito. Productos en el carrito: ${arrayCarrito.length}.`
    })
}

htmlcards(productosInformaticos)