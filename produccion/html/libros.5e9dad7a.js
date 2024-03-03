let formularioSesion = document.getElementById("formSesion");
let btnSesion = document.getElementById("btnSesion");
if (formularioSesion) formularioSesion.addEventListener("submit", (e)=>{
    e.preventDefault();
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    let objeto = {
        user: user,
        password: password
    };
    localStorage.setItem("sesion", JSON.stringify(objeto));
    comprobarSesion();
});
function comprobarSesion() {
    if (localStorage.getItem("sesion")) {
        btnSesion.textContent = "CUENTA";
        if (document.getElementById("contenidoLogin")) {
            document.getElementById("contenidoLogin").classList.add("ocultar");
            document.getElementById("cuenta").classList.add("df-column");
            document.getElementById("cuenta").classList.remove("ocultar");
            document.getElementById("cuenta").classList.add("cuenta");
            document.getElementById("cerrarSesion").addEventListener("click", (e)=>{
                e.preventDefault();
                localStorage.removeItem("sesion");
                comprobarSesion();
            });
        }
    } else {
        if (document.getElementById("contenidoLogin").classList.contains("ocultar")) {
            document.getElementById("cuenta").classList.add("ocultar");
            document.getElementById("cuenta").classList.remove("df-column");
            document.getElementById("contenidoLogin").classList.remove("ocultar");
        } else {
            document.getElementById("cuenta").classList.add("ocultar");
            document.getElementById("cuenta").classList.remove("cuenta");
            document.getElementById("contenidoLogin").classList.remove("ocultar");
        }
        btnSesion.textContent = "INICIAR SESION";
    }
}
comprobarSesion();

//# sourceMappingURL=libros.5e9dad7a.js.map
