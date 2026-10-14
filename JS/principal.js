const saludo = document.getElementById("saludo")
const usuarioActivo = sessionStorage.getItem("usuarioActivo")
const datos = usuarios[usuarioActivo]
saludo.textContent = `Bienvenido, ${datos.nombre}!`