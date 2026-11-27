import { user } from "./user.class.js";

const form = document.querySelector("#pedidoforms");
const confirmationDialog = document.querySelector("#pedido-confirmacion");
const confirmationMessage = document.querySelector("#pedido-confirmacion-mensaje");
const closeButton = document.querySelector(".pedido-confirmacion__cerrar");
const pedidoarray = [];

if (
    !(form instanceof HTMLFormElement) ||
    !(confirmationDialog instanceof HTMLDialogElement) ||
    !(confirmationMessage instanceof HTMLElement) ||
    !(closeButton instanceof HTMLButtonElement)
) {
    throw new Error("No se encontraron los elementos necesarios del formulario de pedido.");
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const nombre = formData.get("nombre").trim();
    const apellido = formData.get("apellido").trim();
    const empresa = formData.get("empresa").trim();
    const mail = formData.get("mail").trim();
    const telefono = formData.get("telefono").trim();
    const opcion = formData.get("opcion");
    const solicitud = new user(nombre, apellido, empresa, mail, telefono, opcion);

    try {
        localStorage.setItem("users", JSON.stringify([...pedidoarray, solicitud]));
    } catch (error) {
        console.error("No se pudo guardar la solicitud.", error);
        window.alert("No se pudo registrar la solicitud. Intentalo de nuevo.");
        return;
    }

    pedidoarray.push(solicitud);
    confirmationMessage.textContent = `Tu solicitud sobre ${opcion} quedó registrada. Nos comunicaremos con vos a la brevedad.`;
    form.reset();
    confirmationDialog.showModal();
});

closeButton.addEventListener("click", () => {
    confirmationDialog.close();
});
