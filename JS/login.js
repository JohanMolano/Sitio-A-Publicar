const formulario = document.getElementById("login-form")
const mensaje = document.getElementById("mensaje-login")

function iniciarSesion(evento) {
    evento.preventDefault();
    const usuario = document.getElementById("username").value
    const clave = document.getElementById("password").value
    const datosUsuario = usuarios[usuario];

    // Verificar si el usuario existe en el objeto usuarios
    if (datosUsuario !== undefined && datosUsuario.clave === clave) {
        sessionStorage.setItem("usuarioActivo", usuario)
        mensaje.textContent = `Bienvenido, ${datosUsuario.nombre}!`
        window.location.href = "principal.html"
    } else {
        mensaje.textContent = "Nombre de usuario o contraseña incorrectos."
    }
}
formulario.addEventListener("submit", iniciarSesion)