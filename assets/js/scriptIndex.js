
key = document.querySelector('#key')

cambiarRosado = () => key.style.backgroundColor = 'pink'
cambiarNaranja = () => key.style.backgroundColor = '#FFA500'
cambiarCeleste = () => key.style.backgroundColor = '#87CEEB'

function crearDiv () {
var nuevoDiv = document.createElement('div');

// Aplicar estilos al div
nuevoDiv.style.backgroundColor = 'lightblue';
nuevoDiv.style.border = '2px solid darkblue';
nuevoDiv.style.width = '200px';
nuevoDiv.style.height = '200px';
nuevoDiv.style.marginLeft = '40%';
nuevoDiv.style.marginTop = '2%';




// Añadir el div al body del documento
document.body.appendChild(nuevoDiv);
}


document.addEventListener("keydown", function(event) {
    
    if (event.key === "a" || event.key === "A") {   
    cambiarRosado();
    } else if (event.key === "s" || event.key === "S") {   
    cambiarNaranja();
    } else if (event.key === "d" || event.key === "D") {   
        cambiarCeleste();
    } else if (event.key === "q" || event.key === "Q" || event.key === "w" || event.key === "W" || event.key === "e" || event.key === "E") {   
        crearDiv();
    }

});
    