const btn = document.getElementById('btn-saludo')
const mensaje = document.getElementById('mensaje')

let saludo = 0

function saludar (){
    saludo++;
    mensaje.textContent = `Gracias por saludar, llevar ${saludo} saludo(s).`
}

btn.addEventListener('click', saludar)