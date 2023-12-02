/* se crea la clase para despues poder importar datos*/

  /*datos que va a recibir la class*/

  export class user {
    nombre = '';
    apellido = '';
    empresa = '';
    mail = '';
    telefono = '';
    opcion = '';

   constructor(nombre, apellido, empresa, mail, telefono, opcion){
      this.nombre = nombre,
      this.apellido = apellido,
      this.empresa = empresa,
      this.mail = mail,
      this.telefono = telefono,
      this.opcion = opcion

   }

}