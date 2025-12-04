// Validación del formulario de pronósticos
const form = document.getElementById("formulario");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || correo === "" || mensaje === "") {
      alert("Por favor, completa todos los campos antes de enviar tu pronóstico.");
      return;
    }

    // Validación simple de formato de correo
    const regexCorreo = /\S+@\S+\.\S+/;
    if (!regexCorreo.test(correo)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    document.getElementById("msg-ok").classList.remove("hidden");
    form.reset();
  });
}

// Botón modo oscuro
const btnDark = document.getElementById("btn-dark");
if (btnDark) {
  btnDark.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}
