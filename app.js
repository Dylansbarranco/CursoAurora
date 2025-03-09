// Array para almacenar los nombres de los amigos
const nombres = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el nombre del input
    const nombreAmigo = document.getElementById("nombreAmigo").value;
    // Verificar que el nombre no esté vacío
    if (nombreAmigo) {
        // Agregar el nombre al array
        nombres.push(nombreAmigo);
        // Limpiar el input
        document.getElementById("nombreAmigo").value = "";
        // Mostrar la lista actualizada de amigos
        mostrarAmigos();
    }
}

// Función para mostrar la lista de amigos en el HTML
function mostrarAmigos() {
    // Obtener el elemento de la lista en el HTML
    const lista = document.getElementById("listaAmigos");
    // Limpiar la lista actual
    lista.innerHTML = "";
    // Recorrer el array de nombres y crear un elemento <li> por cada nombre
    for (let i = 0; i < nombres.length; i++) {
        const li = document.createElement("li");
        li.textContent = nombres[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Verificar que haya al menos un amigo en la lista
    if (nombres.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    // Obtener el nombre del amigo sorteado
    const amigoSorteado = nombres[indiceAleatorio];
    // Mostrar el resultado del sorteo en el HTML
    document.getElementById("resultadoSorteo").innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}

// Ejemplo de cómo podría integrarse en el HTML
// <ul id="listaAmigos"></ul>
// <button onclick="mostrarAmigos()">Mostrar Amigos</button>
// <input type="text" id="nombreAmigo" placeholder="Ingrese un nombre">
// <button onclick="agregarAmigo()">Agregar Amigo</button>
// <button onclick="sortearAmigo()">Sortear Amigo Secreto</button>
// <div id="resultadoSorteo"></div>

