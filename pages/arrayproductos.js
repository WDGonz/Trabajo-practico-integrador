/*declaro una constante con los productos informatico*/

const productosInformaticos = [
    {
     id: 1,
     nombre: "Tarjeta de Memoria",
     descipcions: "Memoria RAM DDR3 ValueRAM.",
     precio: 75000,
     imagen: "./imgs/productos/producto_01.png",
     carrito: "./imgs/productos/carrito.svg",
     destacado: true
    },

    {
     id: 2,
     nombre: "Placa de Video ASUS",
     descipcions: "ASUS TUF Gaming Radeon™ RX 6500 XT OC Edition 4GB GDDR6 cuenta con una suprema refrigeración y gran durabilidad",
     precio: 150000,
     imagen: "./imgs/productos/producto_02.png", 
     carrito: "./imgs/productos/carrito.svg",
     destacado: true
    },

    {
     id: 3,
     nombre: "Microprocesador Intel I5-12400",
     descipcions: "Núcleos totales, N.º de núcleos de rendimiento, Frecuencia turbo máxima de núcleo de rendimiento",
     precio: 120000,
     imagen: "./imgs/productos/producto_03.png",
     carrito: "./imgs/productos/carrito.svg",
     destacado: true
    },

    {
     id: 4,
     nombre: "Disco Solido",
     descipcions: "Disco Sólido Crucial 250GB M.2 P2 PCIe 3.0 X4 NVMe 2400Mbps.",
     precio: 200000,
     imagen: "./imgs/productos/producto_04.png",
     carrito: "./imgs/productos/carrito.svg",
     destacado: true
    },

    {
     id: 5,
     nombre: "Motherboard AMD B450",
     descipcions: "AM4 Socket: Supports AMD Ryzen™ 5000 series / Ryzen™ 5000 G-Series/ 3rd Gen Ryzen™.",
     precio: 1200,
     imagen: "./imgs/productos/producto_05.png", 
     carrito: "./imgs/productos/carrito.svg",
     destacado: true
    },

    {
     id: 6,
     nombre: "Fuente Full Modular Gigabyte 750w",
     descipcions: "Certificación 80 PLUS Gold, Diseño completamente modular.",
     precio: 1200,
     imagen: "./imgs/productos/producto_06.png",
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
   console.log(elemento.nombre);
   let divProduct = document.createElement('div')
   divProduct.classList.add('producto') 

    let boton = document.createElement('button')  /*creo el elemento boton*/
    boton.classList.add('btn')                   /*agrego la clase btn*/
    boton.id = `producto-${elemento.id}`        /*direcciono el elemento por id de cada producto*/
    boton.textContent = 'Añadir al carrito'     /*añado texto al boton*/

   divProduct.innerHTML += `
                        
                               <img src=.${elemento.imagen} alt="Producto#01">
                               <h4>${elemento.nombre}</h4>
                               <p>${elemento.descipcions}</p>
                               <p>Precio por unidad</p>
                               <spam>${elemento.precio}</spam>
                            
   
                    `
   
   divProduct.append(boton)                 
   fragment.append(divProduct)  /*se cargan en el fragmento toda la informacion cargada en el div*/
   addToCart(boton)   /*llama a la funcion boton*/

   })

   contenedorproductos.append(fragment)

}

/*Evento para el carrito de compras*/

function addToCart(boton){

 boton.addEventListener('click', function(evento){
// console.log(evento);
// console.log(evento.target);

// alert('Producto agregado al carrito')
 
let id = evento.target.id    /*declaro variable del evento para saber el boton que genero el click*/
console.log(id);
id = id.slice(9)   /*se filtra por el metodo slice para obtener el numero id*/
console.log(id);

let busqueda = productosInformaticos.find( (elemento) => { return elemento.id == id})  /*declaro funcion flecha*/
console.log(busqueda);
arrayCarrito.push(busqueda)  /*agergo elementos al arrayCarrito*/
console.log(arrayCarrito);

})
}

/*llamalo la funcion para poder iterar con los productos*/
htmlcards(productosInformaticos)


//  <img src=.${elemento.carrito} alt="Añadir al carrito">  //comento esta linea que era la imagen del carrito//
//me causa conflicto con la imagen del producto//