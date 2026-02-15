console.log("app.js cargado correctamente");

document.addEventListener("DOMContentLoaded", function() {

    const btn = document.getElementById("btnIngresar");

    btn.addEventListener("click", function() {

        const usuario = document
            .getElementById("usuarioInput")
            .value
            .trim()
            .toLowerCase();

        const usuariosPermitidos = ["johan", "supervisor1", "inspector2"];

        if (usuariosPermitidos.includes(usuario)) {

            document.getElementById("pantallaLogin").style.display = "none";
            document.getElementById("pantallaRegistro").style.display = "block";

        } else {
            alert("Usuario no autorizado");
        }

    });

});
