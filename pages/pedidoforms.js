/*llamamos al formulario para argegarle un evento*/

import { User } from "../pages/user.class.js"   /*importamos la class para usarla*/

const form = document.querySelector('#pedidoforms')
const pedidoarray = [];



form.addEventListener ('submit', (e) => {
        e.preventDefault()
        let formData = new formData(form)   /*capturamos los datos del formulario*/
        let nombre = formData.get('nombre') 
        let apellido = formData.get('apellido')
        let empresa = formData.get('empresa')
        let mail = formData.get('mail')
        let telefono = formData.get('telefono')
        let opcion = formData.get('opcion')

     if ((nombre !== '') && (apellido !== '') && (empresa !=='') && (mail !=='') && (telefono !=='') && (opcion !== '')){
        let user = new User(nombre, apellido, empresa, mail, telefono, opcion)
        console.log(user);
        pedidoarray.push(user) 
        localStorage.setItem('users', JSON.stringify(pedidoarray)) /*convertimos el user en una cadena de string*/
       /* window.location = "../pages/productos.html"  /*estoy pidiendo que me envie a la pagina de productos*/

     }else {
        alert('Debe ingresar todos los campos')
     }

    })
    