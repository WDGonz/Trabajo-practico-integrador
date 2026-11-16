/*declaro una constante con los productos informatico*/

const productosInformaticos = [
    {
     id: 1,
     nombre: "Tarjeta de Memoria",
     descipcions: "Memoria RAM DDR3 ValueRAM.",
     precio: 75000,
     imagen: "../imgs/productos/producto_01.png",
     carrito: "./imgs/productos/carrito.svg",
     destacado: true
    },

    {
     id: 2,
     nombre: "Placa de Video ASUS",
     descipcions: "ASUS TUF Gaming Radeon™ RX 6500 XT OC Edition 4GB GDDR6 cuenta con una suprema refrigeración y gran durabilidad",
     precio: 150000,
     imagen: "../imgs/productos/producto_02.png",
     carrito: "./imgs/productos/carrito.svg",
     destacado: true
    },

    {
     id: 3,
     nombre: "Microprocesador Intel I5-12400",
     descipcions: "Núcleos totales, N.º de núcleos de rendimiento, Frecuencia turbo máxima de núcleo de rendimiento",
     precio: 120000,
     imagen: "../imgs/productos/producto_03.png",
     carrito: "./imgs/productos/carrito.svg",
     destacado: true
    },

    {
     id: 4,
     nombre: "Disco Solido",
     descipcions: "Disco Sólido Crucial 250GB M.2 P2 PCIe 3.0 X4 NVMe 2400Mbps.",
     precio: 200000,
     imagen: "../imgs/productos/producto_04.png",
     carrito: "./imgs/productos/carrito.svg",
     destacado: true
    },

    {
     id: 5,
     nombre: "Motherboard AMD B450",
     descipcions: "AM4 Socket: Supports AMD Ryzen™ 5000 series / Ryzen™ 5000 G-Series/ 3rd Gen Ryzen™.",
     precio: 1200,
     imagen: "../imgs/productos/producto_05.png",
     carrito: "./imgs/productos/carrito.svg",
     destacado: true
    },

    {
     id: 6,
     nombre: "Fuente Full Modular Gigabyte 750w",
     descipcions: "Certificación 80 PLUS Gold, Diseño completamente modular.",
     precio: 1200,
     imagen: "../imgs/productos/producto_06.png",
     carrito: "./imgs/productos/carrito.svg",
     destacado: true
    },
];

const arrayCarrito = []

const contenedorproductos = document.querySelector('#contenedorproductos')

/*declaro una funcion para poder llamarla desde cualquier parte del proyecto*/
function htmlcards(arrayProductos){

let fragment = document.createDocumentFragment()


arrayProductos.forEach(function(elemento) {
   let divProduct = document.createElement('div')
   divProduct.classList.add('producto') 

    let boton = document.createElement('button')  /*creo el elemento boton*/
    boton.classList.add('btn', 'btn-carrito')
    boton.type = 'button'
    boton.setAttribute('aria-label', `Añadir ${elemento.nombre} al carrito`)
    boton.textContent = 'Añadir al carrito'     /*añado texto al boton*/

   divProduct.innerHTML = `
                               <img src="${elemento.imagen}" alt="${elemento.nombre}">
                               <h3>${elemento.nombre}</h3>
                               <p class="descripcion-producto">${elemento.descipcions}</p>
                               <p class="precio-producto">Precio por unidad: <strong>${new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(elemento.precio)}</strong></p>
                    `
   
   divProduct.append(boton)                 
   fragment.append(divProduct)  /*se cargan en el fragmento toda la informacion cargada en el div*/
   addToCart(boton, elemento)   /*llama a la funcion boton*/

   })

   contenedorproductos.append(fragment)

}

/*Evento para el carrito de compras*/

function addToCart(boton, producto){

 boton.addEventListener('click', function(){
   arrayCarrito.push(producto)

})
}

/*llamalo la funcion para poder iterar con los productos*/
htmlcards(productosInformaticos)