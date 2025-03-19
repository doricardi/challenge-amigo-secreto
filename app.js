let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const listaAmigos = document.getElementById("listaAmigos");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  if (amigos.includes(nombre)) {
    alert("Este nombre ya fue ingresado.");
    return;
  }

  amigos.push(nombre);
  input.value = "";
  actualizarLista();
}

function actualizarLista() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Debes ingresar al menos dos nombres para hacer el sorteo.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigos[indiceAleatorio]}</strong> 🎉</li>`;
}
