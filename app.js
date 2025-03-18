let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.querySelector("#amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, inserte un Nombre");
        return;
    }

    amigos.push(nombreAmigo);

    actualizarlistaAmigos();

    inputAmigo.value = "";
    inputAmigo.focus();
}

function actualizarlistaAmigos() {
    const lista = document.querySelector("#listaAmigos")
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agrega nombres primero.");
        return
    }

    const i = Math.floor(Math.random() * amigos.length);

    const amigoSecreto = amigos[i]; 

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSecreto}</li>`;

}
